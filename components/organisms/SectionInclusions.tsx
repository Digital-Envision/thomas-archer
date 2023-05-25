import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import CardContainer from 'components/base/Card'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import Heading3 from 'components/base/Heading3'
import { ListingContainer, ListingGrid } from 'components/base/Listing'
import { urlForImage } from 'lib/sanity.image'
import { getImageUrl, getUrlFromSanityFile } from 'lib/utils'
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
    image: SanityFiles
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
    <ListingContainer marginTop={marginTop} marginBottom={marginBottom}>
      <ListingGrid
        gap={{
          base: '4rem',
          sm: '4rem',
          md: '4vh',
          lg: '4vh',
        }}
      >
        {!_.isEmpty(items) &&
          items.map(({ image, heading, paragraph }, index) => (
            <GridItem key={index} colSpan={1}>
              <CardContainer borderBottomWidth={'0px'} minH="450px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Image
                    src={getImageUrl(image)}
                    alt={heading}
                    objectFit="cover"
                    w="full"
                    h="420px"
                    pb={'2rem'}
                  />
                </Box>
                <Box>
                  <Text fontSize={'10px'} color={'#898989'} pb={'0.2rem'}>
                    {`${index + 1}`.padStart(2, '0')}
                  </Text>
                  <Heading3 as={HeadingTagSemantic.H3} pb={'1.5rem'}>
                    {heading}
                  </Heading3>
                  <Text noOfLines={8}>{paragraph}</Text>
                </Box>
              </CardContainer>
            </GridItem>
          ))}
      </ListingGrid>

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
    </ListingContainer>
  )
}

export default SectionInclusions
