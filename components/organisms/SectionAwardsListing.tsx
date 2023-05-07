import { Box, Flex, Grid } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useRouter } from 'next/router'
import Text from 'components/base/Text'

import AwardListingCard from 'components/modules/AwardListingCard'

type SectionAwardsListingProps = {
  projects: ProjectListingCardProps[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionAwardsListing: React.FC<SectionAwardsListingProps> = (props) => {
  const { marginTop, marginBottom, projects } = props
  const { asPath } = useRouter()

  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      width={'100%'}
      maxWidth={'1800px'}
      px={'1rem'}
      marginTop={marginTop}
      marginBottom={marginBottom}
      direction="column"
    >
      <Text>SectionAwardsListing</Text>
      <Box mt={'2rem'} />

      <Box alignSelf={'flex-start'} pl={['1rem', '1rem', '1rem', '3rem']}>
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
          {projects.map((props) => {
            console.log('props', props)
            return (
              <>
                <AwardListingCard
                  {...props}
                  link={`${asPath}/project/${props?.slug?.current}`}
                />
              </>
            )
          })}
        </Grid>
      </Box>
      <Box pt="1rem" />
      <Button type="submit" variant={Variants.blackLine}>
        Load More Inspiration
      </Button>
    </Flex>
  )
}

export default SectionAwardsListing
