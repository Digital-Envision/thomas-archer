import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Text from '../base/Text'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'
import { PortableText } from '@portabletext/react'
import { LinksInterface } from 'components/organisms/Navbar'

type Section2ColImageTextFeaturedImageLeftRightProps = {
  heading: string
  quotes: any[]
  postedBy: string
  image?: SanityFiles | string // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
  IsImageRight: boolean
}

const Section2ColImageTextFeaturedImageLeftRight: React.FC<
  Section2ColImageTextFeaturedImageLeftRightProps
> = ({
  heading,
  quotes,
  postedBy,
  image,
  marginTop,
  marginBottom,
  button,
  IsImageRight,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{
        base: IsImageRight ? 'column' : 'column-reverse',
        md: IsImageRight ? 'column' : 'column-reverse',
        lg: IsImageRight ? 'row' : 'row-reverse',
      }}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex flex={1} direction={'row'} align={'center'}>
        <Flex
          flex={1}
          direction={'column'}
          justify="space-between"
          height={'100%'}
          py={'2rem'}
        >
          <Box fontFamily={'heading'}>
            <PortableText value={quotes} />
          </Box>

          <Box>
            <Text>{postedBy}</Text>
            <Box pt={5}>
              {button.label && (
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
                  <Button variant={Variants.blackLine}>{button?.label}</Button>
                </Link>
              )}
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Box p="1rem" />

      <Flex flex={1.3} justify={'center'}>
        <Image
          objectFit={'cover'}
          src={(image && urlForImage(image).url()) || ''}
          alt={heading}
        />
      </Flex>
    </Flex>
  )
}

export default Section2ColImageTextFeaturedImageLeftRight
