import { Box, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import { urlForImage } from 'lib/sanity.image'
import { HeadingTagSemantic } from 'components/base/Heading1'
import { LinksInterface } from 'components/organisms/Navbar'

export type ArticleBlogCardProps = {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  createdAt?: string
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  button?: LinksInterface
  buttonText?: string // for internal /blog/[slug.current]
  buttonLink?: string // for internal /blog/[slug.current]
}

// TODO offset when there's createdAt
// TODO fix internal link

/**
 * used in:
 * Section3ColsCards
 * Section2ColCards
 * SectionBlog
 */

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  heading,
  headingTagLevel,
  image,
  createdAt,
  paragraph,
  button,
  buttonText,
  buttonLink,
}) => {
  return (
    <Flex
      direction={'column'}
      width={'100%'}
      maxWidth="550px"
      maxHeight={'700px'}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={(image && urlForImage(image).url()) || ''}
          alt={heading}
          height="450px"
          w="full"
          objectFit={'cover'}
        />
      </Box>
      <Flex flex="1" flexDirection={'column'} px="8" pt="8">
        <Box flex="1" overflow="hidden">
          {!isEmpty(createdAt) && (
            <Text mb="4" fontSize={'10px'} color={'#898989'}>
              {createdAt}
            </Text>
          )}
          <Heading3 as={headingTagLevel} mb="4">
            {heading}
          </Heading3>

          <Text noOfLines={3} fontSize={'14px'} mb="4">
            {paragraph}
          </Text>
        </Box>

        <Box mt="auto">
          {buttonText && (
            <Link href={buttonLink || '#'} target={buttonLink ? '_blank' : ''}>
              <Button variant={Variants.blackLine}>{buttonText}</Button>
            </Link>
          )}

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
              <Button variant={Variants.blackLine}>{button?.label}</Button>
            </Link>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default ArticleBlogCard
