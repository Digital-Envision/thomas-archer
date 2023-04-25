import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import Heading2 from 'components/base/Heading2'
import ProjectListingCard, {
  ProjectListingCardProps,
} from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useRouter } from 'next/router'

type SectionProjectListingProps = {
  heading: string
  projects: ProjectListingCardProps[]
  imageUrl: string // load image from url; test purpose
  image?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionProjectListing: React.FC<SectionProjectListingProps> = (props) => {
  const { asPath } = useRouter()
  const { heading, projects, marginTop, marginBottom } = props
  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      width={'100%'}
      maxWidth={'1440px'}
      px={'1rem'}
      marginTop={marginTop}
      marginBottom={marginBottom}
      direction="column"
    >
      <Heading2
        alignSelf={'flex-start'}
        pl={{
          base: '3vh',
          md: '0.1vh',
          lg: '8vh',
        }}
      >
        {heading}
      </Heading2>
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
        {_.toArray(projects)?.map(
          ({ image, subHeading, heading, description, slug }, index) => (
            <GridItem key={index} colSpan={1}>
              <ProjectListingCard
                image={image}
                heading={heading}
                subHeading={subHeading}
                description={description}
                link={`${asPath}/project/${slug?.current}`}
              />
              <Box mb={'2rem'} />
            </GridItem>
          )
        )}
      </Grid>

      <Box pt="1rem" />
      <Button type="submit" variant={Variants.blackLine}>
        Load More Inspiration
      </Button>
    </Flex>
  )
}

export default SectionProjectListing
