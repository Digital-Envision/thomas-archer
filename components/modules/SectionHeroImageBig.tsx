import { AspectRatio, Box } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import Text from 'components/base/Text'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'

const SectionHeroImageBig = () => {
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
      backgroundImage={withVideo ? '' : "url('/images/image-banner-big.png')"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display={'flex'}
      flexDir={'column'}
      textAlign={'center'}
    >
      {withVideo && (
        <Box position={'absolute'} top={0} left={0} zIndex={0}>
          <AspectRatio height={'100vh'} width={'100vw'}>
            <iframe
              title={'hero-banner'}
              src={
                'https://player.vimeo.com/video/694290907?background=1&autoplay=1&muted=1&loop=1'
              }
            />
          </AspectRatio>
        </Box>
      )}
      <Text
        zIndex={1}
        my={'auto'}
        fontFamily={'heading'}
        fontSize={'64px'}
        color={'#FFFFFF'}
      >
        Distinctly different. <br /> Distinctly yours.
      </Text>
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
