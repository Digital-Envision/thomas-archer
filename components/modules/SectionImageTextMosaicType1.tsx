import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import Divider, { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import _ from 'lodash'
import { getImageUrl } from 'lib/utils'
import { LinksInterface } from 'components/organisms/Navbar'

type SectionImageTextMosaicType1Props = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  rightImageUrl: string
  leftImageUrl: string
  rightImage?: any // sanity io image
  leftImage?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
  // buttonText: string
}

/**
 * Usage
 * <SectionImageTextMosaicType1
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
      et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
      efficitur nunc in."
    rightImageUrl="https://via.placeholder.com/727x455/"
    leftImageUrl="https://via.placeholder.com/500x500/"
  />
 */

const SectionImageTextMosaicType1: React.FC<
  SectionImageTextMosaicType1Props
> = ({
  heading,
  headingTagLevel,
  paragraph,
  rightImageUrl,
  leftImageUrl,
  marginTop,
  marginBottom,
  leftImage,
  rightImage,
  button,
  // buttonText,
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
        />
      </Flex>

      <Box p={{ base: '0.5rem', md: 0 }} />

      <Flex flex={1.2} justify={'center'} direction={'column'}>
        <Image
          objectFit={'cover'}
          src={getImageUrl(rightImage)}
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
                  <Link
                    href={
                      button?.useInternal
                        ? button?.internalHref
                          ? `/${button?.internalHref}`
                          : '#'
                        : button?.externalHref
                        ? button?.externalHref
                        : '#'
                    }
                    target={button?.isExternal ? '_blank' : ''}
                  >
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
