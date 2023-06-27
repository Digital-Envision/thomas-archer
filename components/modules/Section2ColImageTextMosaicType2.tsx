import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'
import Link, { LinksInterface } from 'components/base/Link'
import { getImageUrl } from 'lib/utils'
import SectionContainer from 'components/base/Section'
import Image, { ImageVariant } from 'components/base/Image'
import { MetaData } from 'utils/interfaces'

type Section2ColImageTextMosaicType2Props = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  rightImage?: any // sanity io image
  rightImageMetaData?: MetaData
  rightImageAlt?: string
  leftImage?: any // sanity io image
  leftImageMetaData?: MetaData
  leftImageAlt?: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button?: LinksInterface
  anchor?: string
}

const Section2ColImageTextMosaicType2: React.FC<
  Section2ColImageTextMosaicType2Props
> = ({
  heading,
  headingTagLevel,
  paragraph,
  marginTop,
  marginBottom,
  leftImage,
  leftImageMetaData,
  leftImageAlt,
  rightImage,
  rightImageMetaData,
  rightImageAlt,
  button,
  anchor,
}) => {
  return (
    <SectionContainer
      direction={{ base: 'column', md: 'row' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
      justify="end"
      id={anchor}
    >
      <Flex flex={1} justify={'end'}>
        <Flex direction={'column'} pr={{ base: 0, md: '1rem' }}>
          <Image
            variant={ImageVariant.Img}
            lqip={leftImageMetaData?.metadata?.lqip}
            objectFit={'cover'}
            src={getImageUrl(leftImage)}
            alt={leftImageAlt || heading}
            width="w-full"
          />
          <Box pt="1.5rem" />
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
          <Box pt="1.5rem" />

          <Flex
            flex={1.2}
            direction={'row'}
            pt={2}
            px={{ base: '1rem', md: 0 }}
          >
            <Box pt={1} pr={2}>
              <Dash width="50px" height="1px" />
            </Box>

            <Box>
              <Text>{paragraph}</Text>
              <Box pt={5}>
                {button?.label && (
                  <Link link={button}>
                    <Button variant={Variants.blackLine}>
                      {button?.label}
                    </Button>
                  </Link>
                )}
              </Box>
              <Box
                pt={{
                  base: HeightVariants.less,
                  md: HeightVariants.none,
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box p={{ base: '0.5rem', md: 0 }} />

      <Flex
        flex={1.2}
        align="center"
        maxW={'900px'}
        mt={{ base: '0px', sm: '0px', md: '0px', lg: '100px' }}
      >
        <Image
          variant={ImageVariant.Img}
          lqip={rightImageMetaData?.metadata?.lqip}
          width="100%"
          height={'auto'}
          objectFit={'cover'}
          src={getImageUrl(rightImage)}
          alt={rightImageAlt || heading}
        />
      </Flex>
    </SectionContainer>
  )
}

export default Section2ColImageTextMosaicType2
