import { Box, Flex, Grid } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useRouter } from 'next/router'

import AwardListingCard from 'components/modules/AwardListingCard'
import { useState } from 'react'
import { getSanityData } from 'lib/sanity.client'

type SectionAwardsListingProps = {
  awardedProjects: ProjectListingCardProps
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionAwardsListing: React.FC<SectionAwardsListingProps> = (props) => {
  const { marginTop, marginBottom, awardedProjects: _projects } = props
  const { asPath } = useRouter()
  const [projects, setProjects] = useState(_projects)

  const handleViewMore = async () => {
    const currentPagination = projects?.pagination

    if (!currentPagination?.isMore) return

    const newProjects = await getSanityData({
      type: 'projects',
      condition: `&& slug.current != null  && award.awards != null`,
      page: currentPagination?.page + 1,
      limit: 12,
    })

    setProjects((prev) => {
      return {
        pagination: { ...newProjects.pagination },
        data: [...prev.data, ...newProjects.data],
      }
    })
  }

  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      width={'100%'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
      direction="column"
    >
      <Box mt={'2rem'} />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{
          base: 2,
          md: 4,
          lg: '3vh',
        }}
      >
        {projects?.data.map((props, i) => {
          return (
            <AwardListingCard
              {...props}
              key={`${props?.slug?.current}-${i}`}
              link={`${asPath}/project/${props?.slug?.current}`}
            />
          )
        })}
      </Grid>
      <Box pt="1rem" />
      {projects?.pagination?.isMore && (
        <Button
          type="submit"
          variant={Variants.blackLine}
          onClick={handleViewMore}
        >
          Load More Inspiration
        </Button>
      )}
    </Flex>
  )
}

export default SectionAwardsListing
