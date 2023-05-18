import { Box, Circle, Flex } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Heading2 from 'components/base/Heading2'
import Text from 'components/base/Text'
import React, { useState } from 'react'
import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi2'
import ModalVideo from 'components/modules/ModalVideo'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'

const SectionVideoParagraphCTA = ({
  marginTop,
  marginBottom,
  title,
  description,
  video,
  button,
}) => {
  const [playVideo, setPlayVideo] = useState(false)

  const onCloseVideo = () => {
    setPlayVideo(false)
  }

  return (
    <Box marginBottom={marginBottom} marginTop={marginTop}>
      {video?.video && (
        <ModalVideo
          isOpen={playVideo}
          onClose={onCloseVideo}
          videoUrl={video?.video}
        />
      )}
      <Box
        mb={'30px'}
        width={'100%'}
        minHeight={{
          base: '320px',
        }}
        height={{
          base: 'calc((150vw - 13rem)*.650)',
          sm: 'calc((150vw - 15rem)*.650)',
          md: 'calc(60vw - 6rem)',
          lg: 'calc((67vw - 1rem)*.800)',
          xl: 'calc((82vw - 13rem)*.720)',
          '2xl': 'calc((82vw - 3rem)*.600)',
        }}
        maxH={{
          '2xl': 'calc((73vw - 7rem)*.730)',
        }}
      >
        <Box
          position={'absolute'}
          width={'100%'}
          minHeight={{
            base: '320px',
          }}
          height={{
            base: 'calc((150vw - 13rem)*.650)',
            sm: 'calc((150vw - 15rem)*.650)',
            md: 'calc(60vw - 6rem)',
            lg: 'calc((67vw - 1rem)*.800)',
            xl: 'calc((82vw - 13rem)*.720)',
            '2xl': 'calc((82vw - 3rem)*.600)',
          }}
          maxH={{
            '2xl': 'calc((73vw - 7rem)*.730)',
          }}
          px={{ md: '76px' }}
        >
          <Box
            position={'relative'}
            width={'100%'}
            height={'100%'}
            bg={'gray.100'}
          >
            {video?.cover && (
              <Image
                alt={'image'}
                src={`${urlForImage(video?.cover)}`}
                fill
                objectFit="cover"
                objectPosition="center"
              ></Image>
            )}
          </Box>
        </Box>
        {video?.video && (
          <Box
            position={'absolute'}
            width={'100%'}
            minHeight={{
              base: '320px',
            }}
            height={{
              base: 'calc((150vw - 13rem)*.650)',
              sm: 'calc((150vw - 15rem)*.650)',
              md: 'calc(60vw - 6rem)',
              lg: 'calc((67vw - 1rem)*.800)',
              xl: 'calc((82vw - 13rem)*.720)',
              '2xl': 'calc((82vw - 3rem)*.600)',
            }}
            maxH={{
              '2xl': 'calc((73vw - 7rem)*.730)',
            }}
            px={{ md: '76px' }}
          >
            <Box
              position={'relative'}
              width={'100%'}
              height={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Circle
                size={{ base: '100px', md: '140px' }}
                bg="transparent"
                border={'5px solid white'}
                pt={1}
                fontSize={{ base: '80px', md: '100px' }}
                color={'white'}
                cursor={'pointer'}
                onClick={() => setPlayVideo(true)}
              >
                <HiChevronRight />
              </Circle>
            </Box>
          </Box>
        )}
      </Box>
      <Flex
        px={{ base: 8, md: '76px' }}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box maxW={'606px'}>
          {title && <Heading2>{title}</Heading2>}
          {description && (
            <Text mt={'34px'} mb={4}>
              {description}
            </Text>
          )}
        </Box>
        <Flex ml={{ md: 'auto' }} pt={{ base: 6, md: 0 }}>
          {video?.video && (
            <Button
              variant={ButtonVariants.blackLine}
              onClick={() => setPlayVideo(true)}
            >
              Watch Video
            </Button>
          )}
          {button?.label && (
            <Link
              href={
                button?.useInternal
                  ? `/${button?.internalHref}`
                  : button?.externalHref
              }
              target={button?.isExternal ? '_blank' : ''}
            >
              <Button variant={ButtonVariants.blackLine} ml={5}>
                {button?.label}
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default SectionVideoParagraphCTA
