import { Box, GridItem } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import AwardListingCard from 'components/modules/AwardListingCard'
import { useState } from 'react'
import { getSanityData } from 'lib/sanity.client'
import { ListingContainer, ListingGrid } from 'components/base/Listing'
import { useStoreLink } from 'lib/store/link'

type SectionAwardsListingProps = {
  awardedProjects: ProjectListingCardProps
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionAwardsListing: React.FC<SectionAwardsListingProps> = (props) => {
  const { awardedProjects: _projects } = props
  const [projects, setProjects] = useState(_projects)

  const projectRef = useStoreLink(
    (state) => state?.detailsPage?.projects?.parentPage?._ref
  )
  const projectParentPage = useStoreLink(
    (state) => state?.pages[projectRef]?.url
  )

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
                link={
                  props?.slug?.current && projectParentPage
                    ? `/${projectParentPage}/${props?.slug?.current}`
                    : '#'
                }
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
