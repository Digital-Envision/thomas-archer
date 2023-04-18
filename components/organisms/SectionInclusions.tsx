import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import Text from '../base/Text'

type SectionInclusionsProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  inclusions: any[]
  image?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const inclusionsData = [
  {
    id: 1,
    image: 'https://source.unsplash.com/tleCJiDOri0/500x500',
    heading: 'Rendered Aerated Concrete Panelling',
    paragraph:
      'Beautiful and practical, the aerated concrete panelling used externally throughout the ground floor of our homes combines both function and form whist delivering supreme thermal and acoustic benefits. The modern aesthetic is enhanced as we apply three alternative render colours to your home as standard. This creates depth, interest and stand out for the right reasons.',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/8J49mtYWu7E/500x500',
    heading: 'Colorbond Roofing',
    paragraph:
      'Beautiful and practical, the aerated concrete panelling used externally throughout the ground floor of our homes combines both function and form whist delivering supreme thermal and acoustic benefits. The modern aesthetic is enhanced as we apply three alternative render colours to your home as standard. This creates depth, interest and stand out for the right reasons.',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/PyeXkOVmG1Y/500x500',
    heading: 'Double Glazed Windows',
    paragraph:
      'Beautiful and practical, the aerated concrete panelling used externally throughout the ground floor of our homes combines both function and form whist delivering supreme thermal and acoustic benefits. The modern aesthetic is enhanced as we apply three alternative render colours to your home as standard. This creates depth, interest and stand out for the right reasons.',
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/C4EhHUxP9Fk/500x500',
    heading: 'Engineered Stone Benchtops',
    paragraph:
      'Beautiful and practical, the aerated concrete panelling used externally throughout the ground floor of our homes combines both function and form whist delivering supreme thermal and acoustic benefits. The modern aesthetic is enhanced as we apply three alternative render colours to your home as standard. This creates depth, interest and stand out for the right reasons.',
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/rOk4VSMS3Ck/500x500',
    heading: 'Premium Appliances',
    paragraph:
      'Beautiful and practical, the aerated concrete panelling used externally throughout the ground floor of our homes combines both function and form whist delivering supreme thermal and acoustic benefits. The modern aesthetic is enhanced as we apply three alternative render colours to your home as standard. This creates depth, interest and stand out for the right reasons.',
  },
]

const SectionInclusions: React.FC<SectionInclusionsProps> = ({
  heading,
  headingTagLevel,
  inclusions,
  marginTop,
  marginBottom,
}) => {
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
        {inclusionsData.map(({ image, heading, paragraph }, index) => (
          <GridItem key={index} colSpan={1} maxW="600px">
            <Flex align="center" direction={'column'}>
              <Image src={image} pb={'2rem'} />
              <Box>
                <Text fontSize={'10px'} color={'#898989'} pb={'0.2rem'}>
                  {`${index + 1}`.padStart(2, '0')}
                </Text>
                <Heading3 as={HeadingTagSemantic.H3} pb={'1.5rem'}>
                  {heading}
                </Heading3>
                <Text>{paragraph}</Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <Box pt="1rem" />
      <Button type="submit" variant={Variants.blackLine}>
        Load More Inspiration
      </Button>
    </Flex>
  )
}

export default SectionInclusions
