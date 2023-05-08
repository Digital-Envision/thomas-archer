import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'
import { LinksInterface } from 'components/organisms/Navbar'

type SectionHeadingParagraphCTAImageProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  image?: SanityFiles | string // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
}

const SectionHeadingParagraphCTAImage: React.FC<
  SectionHeadingParagraphCTAImageProps
> = ({
  heading,
  headingTagLevel,
  paragraph,
  image,
  marginTop,
  marginBottom,
  button,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex flex={1} direction={'row'} align={'center'}>
        <Flex flex={1} direction={'column'} justify={'center'}>
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
          <Flex flex={1} direction={'row'} pt={2} pr={2}>
            <Box pt={2} pr={2}>
              <Dash width="50px" height="1px" />
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
        </Flex>
      </Flex>

      <Box p="1rem" />

      <Flex flex={1.2} justify={'center'} maxHeight="450px">
        <Image
          width={'100%'}
          objectFit={'cover'} // TODO CHANGE TO FILL
          src={(image && urlForImage(image).url()) || ''}
          alt={heading}
        />
      </Flex>
    </Flex>
  )
}

export default SectionHeadingParagraphCTAImage
