import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import { urlForImage } from 'lib/sanity.image'
import _ from 'lodash'
import Text from '../base/Text'

interface SectionInclusionsSchema {
  _key: string
  _type: 'SectionInclusions'
  heading: string
  headingTagLevel: HeadingTagSemantic
  items: {
    _key: string
    _type: 'item'
    heading: string
    image: {
      _type: 'image'
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    paragraph: string
  }[]
  marginBottom: string
  marginTop: string
}

type SectionInclusionsProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  items: SectionInclusionsSchema['items']
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionInclusions: React.FC<SectionInclusionsProps> = ({
  heading,
  headingTagLevel,
  items,
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
        as={headingTagLevel}
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
        {!_.isEmpty(items) &&
          items.map(({ image, heading, paragraph }, index) => (
            <GridItem key={index} colSpan={1} maxW="600px">
              <Flex align="center" direction={'column'}>
                <Image src={urlForImage(image)?.url()} pb={'2rem'} />
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
