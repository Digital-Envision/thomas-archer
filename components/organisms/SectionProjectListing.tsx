import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import Heading2 from 'components/base/Heading2'
import ProjectListingCard, {
  ProjectListingCardProps,
} from 'components/modules/ProjectListingCard'
import { getSanityData } from 'lib/sanity.client'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { useState } from 'react'

type SectionProjectListingProps = {
  heading: string
  projects: ProjectListingCardProps
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionProjectListing: React.FC<SectionProjectListingProps> = (props) => {
  const { asPath } = useRouter()
  const { heading, projects: _projects, marginTop, marginBottom } = props
  const [projects, setProjects] = useState(_projects)

  const handleViewMore = async () => {
    const currentPagination = projects?.pagination

    if (!currentPagination?.isMore) return

    const newProjects = await getSanityData({
      type: 'projects',
      condition: `&& slug.current != null`,
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
      <Heading2 alignSelf={'flex-start'}>{heading}</Heading2>
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
        {_.toArray(projects?.data)?.map((props, index) => (
          <GridItem key={index} colSpan={1}>
            <ProjectListingCard
              {...props}
              link={`${asPath}/project/${props?.slug?.current}`}
            />
            <Box mb={'2rem'} />
          </GridItem>
        ))}
      </Grid>

      <Box pt="1rem" />

      {projects?.pagination?.isMore && (
        <Button
          type="submit"
          variant={Variants.blackLine}
          onClick={handleViewMore}
        >
          Load More Projects
        </Button>
      )}
    </Flex>
  )
}

export default SectionProjectListing
