import { Box, Circle, Flex } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import { urlForImage } from 'lib/sanity.image'
import { HeadingTagSemantic } from 'components/base/Heading1'
import Link, { LinksInterface } from 'components/base/Link'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import { useState } from 'react'
import ModalVideo from './ModalVideo'
import moment from 'moment'

export type ArticleBlogCardProps = {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  _createdAt?: string
  isShowCreatedAt?: boolean
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  button?: LinksInterface
  video?: string
  isVideoMode?: boolean
  isClickable?: boolean
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
  _createdAt,
  isShowCreatedAt = false,
  heading,
  headingTagLevel,
  paragraph,
  button,
  video,
  isVideoMode,
  isClickable = false,
}) => {
  const [playVideo, setPlayVideo] = useState(false)

  const onCloseVideo = () => {
    setPlayVideo(false)
  }

  const Card = () => (
    <Flex flexDir={'column'} width={'100%'}>
      {isVideoMode && video && (
        <ModalVideo
          isOpen={playVideo}
          onClose={onCloseVideo}
          videoUrl={video}
        />
      )}
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
          {isVideoMode && video && (
            <Box
              zIndex={2}
              height={'100%'}
              width={'100%'}
              position={'absolute'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Circle
                size="100px"
                bg="transparent"
                border={'5px solid white'}
                pt={1}
                fontSize={'80px'}
                color={'white'}
                cursor={'pointer'}
                onClick={() => setPlayVideo(true)}
              >
                <HiChevronRight />
              </Circle>
            </Box>
          )}
        </Box>
      </Box>
      <Flex flex="1" flexDirection={'column'} px={{ base: 8, md: 2 }}>
        <Box flex="1" overflow="hidden">
          {_createdAt && isShowCreatedAt && (
            <Text mb="4" fontSize={'10px'} color={'#898989'}>
              {moment(_createdAt).format('DD MMMM YYYY')}
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
          {isVideoMode && video && (
            <Button
              variant={Variants.blackLine}
              onClick={() => setPlayVideo(true)}
            >
              Watch Video
            </Button>
          )}
          {button?.label && (
            <Link link={button}>
              <Button variant={Variants.blackLine}>{button?.label}</Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  )

  if (isClickable) {
    return (
      <Link link={button}>
        <Card />
      </Link>
    )
  }

  return <Card />
}

export default ArticleBlogCard
