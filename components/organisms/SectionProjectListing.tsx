import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import Heading2 from 'components/base/Heading2'
import { ListingGrid, ListingContainer } from 'components/base/Listing'
import ProjectListingCard, {
  ProjectListingCardProps,
} from 'components/modules/ProjectListingCard'
import { projectImages } from 'lib/image.queries'
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
      condition: `&& slug.current != null && !(_id in path("drafts.**"))`,
      page: currentPagination?.page + 1,
      limit: 12,
      sortByField: 'orderRank',
      sortOrder: 'asc',
      customQuery: projectImages,
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
      <Heading2 alignSelf={'flex-start'}>{heading}</Heading2>
      <Box mt={'2rem'} />

      <ListingGrid>
        {_.toArray(projects?.data)?.map((props, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <ProjectListingCard
                {...props}
                link={`${asPath}/${props?.slug?.current}`}
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
          Load More Projects
        </Button>
      )}
    </ListingContainer>
  )
}

export default SectionProjectListing
