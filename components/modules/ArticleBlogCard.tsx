import { Box, Circle, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import { urlForImage } from 'lib/sanity.image'
import { HeadingTagSemantic } from 'components/base/Heading1'
import { LinksInterface } from 'components/organisms/Navbar'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'

export type ArticleBlogCardProps = {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  createdAt?: string
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  button?: LinksInterface
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
  image,
  createdAt,
  heading,
  headingTagLevel,
  paragraph,
  button,
}) => {
  return (
    <Flex flexDir={'column'} width={'100%'}>
      <Box
        mb={'8'}
        minH={{
          base: '160.55px',
        }}
        height={{
          base: 'calc((100vw - 8rem)*.650)',
          sm: 'calc((100vw - 10rem)*.650)',
          md: 'calc(35vw - 6rem)',
          lg: 'calc((35vw - 1rem)*.800)',
          xl: 'calc((50vw - 13rem)*.720)',
          '2xl': 'calc((50vw - 3rem)*.600)',
        }}
        maxH={{
          '2xl': 'calc((73vw - 7rem)*.730)',
        }}
        _hover={{
          userSelect: 'none',
        }}
      >
        <Box
          width={'100%'}
          height={'100%'}
          position={'relative'}
          bg={'gray.100'}
        >
          <Image
            src={(image && urlForImage(image).url()) || ''}
            alt={heading}
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
      <Flex flex="1" flexDirection={'column'} px="8">
        <Box flex="1" overflow="hidden">
          {!isEmpty(createdAt) && (
            <Text mb="4" fontSize={'10px'} color={'#898989'}>
              {createdAt}
            </Text>
          )}
          {heading && (
            <Heading3 as={headingTagLevel} mb="5">
              {heading}
            </Heading3>
          )}
          {paragraph && (
            <Text noOfLines={3} fontSize={'14px'} mb="4">
              {paragraph}
            </Text>
          )}
        </Box>

        <Flex mt="auto" pt={6} gap={5}>
          <Button variant={Variants.blackLine}>Watch Video</Button>
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
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ArticleBlogCard
