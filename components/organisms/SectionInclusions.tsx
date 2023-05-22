import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import { urlForImage } from 'lib/sanity.image'
import { getUrlFromSanityFile } from 'lib/utils'
import _ from 'lodash'
import { SanityFiles } from 'utils/interfaces'
import Text from '../base/Text'
import { LinksInterface } from './Navbar'

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
  items?: SectionInclusionsSchema['items']
  brochure: { file?: SanityFiles; isFileDownloadable: boolean }
  button?: LinksInterface
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionInclusions: React.FC<SectionInclusionsProps> = ({
  items,
  marginTop,
  marginBottom,
  brochure,
  button,
}) => {
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
            <GridItem key={index} colSpan={1} maxW="420px" minH={'450px'}>
              <Flex align="center" direction={'column'}>
                <Image
                  src={(image && urlForImage(image)?.url()) || ''}
                  pb={'2rem'}
                  height="420px"
                  width="420px"
                  objectFit="cover"
                />
                <Box>
                  <Text fontSize={'10px'} color={'#898989'} pb={'0.2rem'}>
                    {`${index + 1}`.padStart(2, '0')}
                  </Text>
                  <Heading3 as={HeadingTagSemantic.H3} pb={'1.5rem'}>
                    {heading}
                  </Heading3>
                  <Text noOfLines={8}>{paragraph}</Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
      </Grid>

      <Box pb={HeightVariants.more} />
      {button?.label &&
        brochure?.isFileDownloadable &&
        !_.isEmpty(brochure?.file) && (
          <Button
            type="submit"
            variant={Variants.blackLine}
            onClick={() => {
              if (_.isEmpty(brochure?.file)) {
                return alert('File not uploaded')
              }
              window.open(getUrlFromSanityFile(brochure?.file), '_blank')
            }}
          >
            Download Inclusions Brochure
          </Button>
        )}
    </Flex>
  )
}

export default SectionInclusions
