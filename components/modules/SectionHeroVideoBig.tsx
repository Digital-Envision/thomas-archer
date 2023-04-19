import { AspectRatio, Box } from '@chakra-ui/react'
import { urlForImage } from 'lib/sanity.image'
import React from 'react'
import { getVideoUrl } from 'lib/utils'
import { SanityFiles } from 'utils/interfaces'

type SectionHeroVideoBigProps = {
  bannerImage?: SanityFiles
  isExternalVideo: boolean
  video?: SanityFiles
  externalVideo: string
  marginBottom?: string
  marginTop?: string
}

const SectionHeroVideoBig: React.FC<SectionHeroVideoBigProps> = ({
  isExternalVideo,
  video,
  externalVideo,
  marginBottom,
  marginTop,
}) => {
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
        {isExternalVideo ? (
          <AspectRatio ratio={16 / 9}>
            <iframe
              width={'100vw'}
              height={'100vh'}
              src={externalVideo}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <video
              onContextMenu={(e) => e.preventDefault()}
              controls
              height={'100vh'}
              width={'100vw'}
            >
              <source
                src={`${getVideoUrl(urlForImage(video))}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        )}
      </Box>
    </Box>
  )
}

export default SectionHeroVideoBig
