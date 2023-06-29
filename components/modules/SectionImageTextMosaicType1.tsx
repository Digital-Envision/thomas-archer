import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import Divider, { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import Link from 'components/base/Link'
import _ from 'lodash'
import { getImageUrl } from 'lib/utils'
import { LinksInterface } from 'components/base/Link'

type SectionImageTextMosaicType1Props = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  rightImage?: any // sanity io image
  rightImageAlt: string
  leftImage?: any // sanity io image
  leftImageAlt: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
  anchor?: string
}

const SectionImageTextMosaicType1: React.FC<
  SectionImageTextMosaicType1Props
> = ({
  heading,
  headingTagLevel,
  paragraph,
  leftImage,
  leftImageAlt,
  rightImage,
  rightImageAlt,
  marginTop,
  marginBottom,
  button,
  anchor,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1880px'}
      marginTop={marginTop}
      marginBottom={marginBottom}
      px={{ base: '1rem', md: 0, lg: 0 }}
      id={anchor}
    >
      <Flex
        flex={1}
        alignSelf={{ base: 'center', md: 'start' }}
        justify={'end'}
        pr={{ base: 0, md: '1rem' }}
      >
        <Image
          height={'auto'}
          width={{ base: '100vw', md: '450px' }}
          objectFit={'cover'}
          src={getImageUrl(leftImage)}
          alt={leftImageAlt || heading}
        />
      </Flex>

      <Box p={{ base: '0.5rem', md: 0 }} />

      <Flex flex={1.2} justify={'center'} direction={'column'}>
        <Image
          objectFit={'cover'}
          src={getImageUrl(rightImage)}
          alt={rightImageAlt || heading}
          width="w-full"
          height={'auto'}
        />
        <Box pt="1.5rem" maxW={'700px'}>
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
          <Box pt="1.5rem" />
          <Flex flex={1} direction={'row'} pt={2} pr={2}>
            <Box pt={2} pr={2}>
              {paragraph && <Dash width="50px" height="1px" />}
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
        </Box>
      </Flex>
    </Flex>
  )
}

export default SectionImageTextMosaicType1
