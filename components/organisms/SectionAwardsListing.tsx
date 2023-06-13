import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useRouter } from 'next/router'

import AwardListingCard from 'components/modules/AwardListingCard'
import { useState } from 'react'
import { getSanityData } from 'lib/sanity.client'
import { ListingContainer, ListingGrid } from 'components/base/Listing'

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
      condition: `&& slug.current != null  && award.awards != null && !(_id in path("drafts.**"))`,
      page: currentPagination?.page + 1,
      limit: 12,
      sortByField: 'orderRank',
      sortOrder: 'asc',
    })

    setProjects((prev) => {
      return {
        pagination: { ...newProjects.pagination },
        data: [...prev.data, ...newProjects.data],
      }
    })
  }

  return (
    <ListingContainer {...props}>
      <Box mt={'2rem'} />

      <ListingGrid>
        {projects?.data.map((props, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <AwardListingCard
                {...props}
                link={`${asPath}/project/${props?.slug?.current}`}
              />
            </GridItem>
          )
        })}
      </ListingGrid>

      <Box mt={'80px'} />
      {projects?.pagination?.isMore && (
        <Button
          type="submit"
          variant={Variants.blackLine}
          onClick={handleViewMore}
        >
          Load More Inspiration
        </Button>
      )}
    </ListingContainer>
  )
}

export default SectionAwardsListing
