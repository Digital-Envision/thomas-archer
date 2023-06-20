import { AspectRatio, Box, Circle } from '@chakra-ui/react'
import { urlForImage } from 'lib/sanity.image'
import React, { useState } from 'react'
import { getVideoUrl } from 'lib/utils'
import { SanityFiles } from 'utils/interfaces'
import Text from 'components/base/Text'
import { HiChevronRight } from 'react-icons/hi2'
import { isVimeoOrYouTubeEmbedURL } from 'utils/checkVideoResource'

type SectionHeroVideoBigProps = {
  isExternalVideo: boolean
  video?: SanityFiles
  externalVideo: string
  marginBottom?: string
  marginTop?: string
  cover?: SanityFiles
}

const Video = ({ withCover, isExternalVideo, externalVideo, video }) => {
  return isExternalVideo
    ? externalVideo && (
        <AspectRatio ratio={16 / 9}>
          <iframe
            width={'100vw'}
            height={'100vw'}
            src={`${externalVideo}?autoplay=${withCover ? '1' : '0'}`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </AspectRatio>
      )
    : video && (
        <AspectRatio ratio={16 / 9}>
          <video
            onContextMenu={(e) => e.preventDefault()}
            autoPlay={withCover}
            controls
            height={'100vw'}
            width={'100vw'}
          >
            <source
              src={`${getVideoUrl(urlForImage(video))}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      )
}

export const EmbedVideoPlayer = ({
  asBackground = false,
  externalVideo,
  ...props
}) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        width={'100vw'}
        height={'100vh'}
        src={
          asBackground
            ? `${externalVideo}?autoplay=1&loop=1&background=1`
            : externalVideo
        }
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        {...props}
      />
    </AspectRatio>
  )
}

const SectionHeroVideoBig: React.FC<SectionHeroVideoBigProps> = ({
  isExternalVideo,
  video,
  externalVideo,
  marginBottom,
  marginTop,
  cover,
}) => {
  const [play, setPlay] = useState(false)

  return (
    <Box
      height={'100%'}
      bg={'gray.700'}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display={'flex'}
      flexDir={'column'}
      textAlign={'center'}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      <Box>
        {cover ||
        (isExternalVideo &&
          isVimeoOrYouTubeEmbedURL(externalVideo).embedCorrect &&
          isVimeoOrYouTubeEmbedURL(externalVideo).resource === 'youtube') ? (
          play ? (
            <Video
              withCover={true}
              isExternalVideo={isExternalVideo}
              externalVideo={externalVideo}
              video={video}
            />
          ) : (
            <Box
              width={'100%'}
              height={'80vh'}
              bgImg={
                cover
                  ? urlForImage(cover).url()
                  : isExternalVideo &&
                    isVimeoOrYouTubeEmbedURL(externalVideo).embedCorrect
                  ? `https://i.ytimg.com/vi/${
                      isVimeoOrYouTubeEmbedURL(externalVideo).videoId
                    }/maxresdefault.jpg`
                  : ''
              }
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundPosition={'center'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              position={'relative'}
            >
              <Circle
                size="140px"
                bg="transparent"
                border={'5px solid white'}
                pt={1}
                fontSize={'100px'}
                color={'white'}
                cursor={'pointer'}
                onClick={() => setPlay(true)}
              >
                <HiChevronRight />
              </Circle>
            </Box>
          )
        ) : (
          <Video
            withCover={false}
            isExternalVideo={isExternalVideo}
            externalVideo={externalVideo}
            video={video}
          />
        )}
        {!externalVideo && !video && (
          <Text bg={'gray.100'}>No Video Found</Text>
        )}
      </Box>
    </Box>
  )
}

export default SectionHeroVideoBig
