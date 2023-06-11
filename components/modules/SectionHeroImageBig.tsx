import _ from 'lodash'
import { AspectRatio, Box, Flex } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'
import Button, { Variants } from 'components/base/Button'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'
import { getVideoUrl } from 'lib/utils'
import { SanityFiles } from 'utils/interfaces'

type SectionHeroImageBigProps = {
  quotes: Array<any>
  isVideo: boolean
  isExternalVideo: boolean
  externalVideo: string
  bannerImage?: SanityFiles
  bannerVideo?: SanityFiles
  marginBottom?: string
  marginTop?: string
}

const ExternalVideo = ({ quotes, handleScrollDown, externalVideo, marginTop, marginBottom }) => {
  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box className="bg-iframe">
        <iframe
          src={`${externalVideo}?background=1&autoplay=1&muted=1&loop=1`}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>
      <Flex
        position={'absolute'}
        width={'100vw'}
        height={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
      >
        <Box
          zIndex={1}
          fontFamily={'heading'}
          fontSize={{
            base: '55px',
            lg: '64px',
          }}
          color={'#FFFFFF'}
          px={'16px'}
        >
          <PortableText value={quotes} />
        </Box>
      </Flex>
      <Flex
        position={'absolute'}
        width={'100vw'}
        height={'100vh'}
        justifyContent={'center'}
        textAlign={'center'}
      >
        <Box mt={'auto'} mb={'61px'}>
          <Button
            aria-label="go-to-down"
            variant={Variants.whiteLine}
            px={0}
            pt={1}
            onClick={handleScrollDown}
            fontSize={'25px'}
          >
            <BsChevronDown />
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

const SectionHeroImageBig: React.FC<SectionHeroImageBigProps> = (props) => {
  const {
    quotes,
    isVideo,
    bannerImage,
    bannerVideo,
    marginBottom,
    marginTop,
    isExternalVideo,
    externalVideo,
  } = props

  const handleScrollDown = () => {
    animateScroll.scrollMore((100 * window.innerHeight) / 100, {
      duration: 500,
      smooth: 'easeInOutQuad',
    })
  }

  return isVideo && isExternalVideo && !_.isEmpty(externalVideo) ? (
    <ExternalVideo
      quotes={quotes}
      handleScrollDown={handleScrollDown}
      externalVideo={externalVideo}
      marginBottom={marginBottom}
      marginTop={marginTop}
    />
  ) : (
    <Box
      height={'100vh'}
      bg={bannerVideo?.asset?._ref ? 'gray.700' : ''}
      backgroundImage={
        isVideo ? '' : bannerImage ? urlForImage(bannerImage).url() : ''
      }
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition={'center'}
      display={'flex'}
      flexDir={'column'}
      textAlign={'center'}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {isVideo && !isExternalVideo && bannerVideo && (
        <Box position={'relative'}>
          <Box position={'absolute'} top={0} left={0} zIndex={0}>
            <AspectRatio height={'100vh'} width={'100vw'}>
              <video
                autoPlay
                muted
                loop
                playsInline
                onContextMenu={(e) => e.preventDefault()}
              >
                <source
                  src={`${getVideoUrl(
                    urlForImage(bannerVideo)
                  )}?background=1&autoplay=1&muted=1&loop=1`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </Box>
        </Box>
      )}
      <Box
        zIndex={1}
        my={'auto'}
        fontFamily={'heading'}
        fontSize={{
          base: '55px',
          lg: '64px',
        }}
        color={'#FFFFFF'}
        px={'16px'}
      >
        <PortableText value={quotes} />
      </Box>
      <Box mb={'61px'}>
        <Button
          aria-label="go-to-down"
          variant={Variants.whiteLine}
          px={0}
          pt={1}
          onClick={handleScrollDown}
          fontSize={'25px'}
        >
          <BsChevronDown />
        </Button>
      </Box>
    </Box>
  )
}

export default SectionHeroImageBig
