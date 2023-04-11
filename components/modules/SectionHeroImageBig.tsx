import { AspectRatio, Box } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image'
import Button, { Variants } from 'components/base/Button'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'
import { getVideoUrl } from 'lib/utils'

const SectionHeroImageBig = ({
  quotes,
  bannerImage,
  bannerVideo,
  marginBottom,
  marginTop,
}) => {
  const withVideo = false

  const handleScrollDown = () => {
    animateScroll.scrollTo((100 * window.innerHeight) / 100, {
      duration: 500,
      smooth: 'easeInOutQuad',
    })
  }

  return (
    <Box
      height={'100vh'}
      bg={withVideo ? 'gray.700' : ''}
      backgroundImage={
        bannerVideo?.asset?._ref ? '' : urlForImage(bannerImage).url()
      }
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display={'flex'}
      flexDir={'column'}
      textAlign={'center'}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {bannerVideo && (
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
      >
        <PortableText value={quotes} />
      </Box>
      <Box mb={'61px'}>
        <Button
          aria-label="go-to-down"
          variant={Variants.whiteLine}
          px={0}
          onClick={handleScrollDown}
        >
          <BsChevronDown />
        </Button>
      </Box>
    </Box>
  )
}

export default SectionHeroImageBig
