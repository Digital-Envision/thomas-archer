import _ from 'lodash'
import { Box, Flex, Img, Link } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Text from 'components/base/Text'

const Slider = ({ listImages = [], title, href = '#' }) => {
  const imageSlider = useRef<HTMLDivElement>()

  const images = useMemo(() => {
    return [listImages[listImages.length - 1], ...listImages, listImages[0]]
  }, [listImages])

  const [slide, setSlide] = useState(1)
  const [hasTransition, setHasTransition] = useState(false)

  const [preventRightClick, setPreventRightClick] = useState(false)
  const [preventLeftClick, setPreventLeftClick] = useState(false)

  const handleScrollLeft = () => {
    const length = images.length

    if (slide !== 0) {
      setPreventLeftClick(true)

      setHasTransition(true)
      setSlide((prevIndex) => {
        return prevIndex === 0 ? length - 1 : prevIndex - 1
      })

      setTimeout(() => {
        setPreventLeftClick(false)
      }, 300)
    }
  }

  const handleScrollRight = () => {
    const length = images.length

    if (slide !== length - 1) {
      setPreventRightClick(true)

      setHasTransition(true)
      setSlide((prevIndex) => {
        return prevIndex === length - 1 ? 0 : prevIndex + 1
      })

      setTimeout(() => {
        setPreventRightClick(false)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (!preventLeftClick) {
      handleScrollLeft()
    }
  }

  const handleNext = () => {
    if (!preventRightClick) {
      handleScrollRight()
    }
  }

  const handleTransition = () => {
    const length = images?.length

    if (imageSlider?.current) {
      if (slide === length - 1) {
        setHasTransition(false)
        setSlide(1)
      } else if (slide === 0) {
        setHasTransition(false)
        setSlide(2)
      }
    }
  }

  useEffect(() => {
    if (imageSlider?.current) {
      imageSlider?.current?.addEventListener('transitionend', handleTransition)
    }

    return () => {
      if (imageSlider?.current) {
        imageSlider?.current?.removeEventListener(
          'transitionend',
          handleTransition
        )
      }
    }
  }, [slide])

  return (
    images?.length > 0 && (
      <Box mt={5}>
        <Box
          px={'16px'}
          bg={'#F5F5F5'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex
            position="relative"
            width="100%"
            height="531px"
            overflow="hidden"
            textAlign={'center'}
            flexDir={'column'}
          >
            <Link href={'#'}>
              <Text pt={'40px'}>{title}</Text>
            </Link>
            <Box textAlign={'center'} bg={'blue'}>
              {images?.map((image, index) => (
                <Link href={href}>
                  <Box
                    key={index}
                    position={'absolute'}
                    width="100%"
                    height="100%"
                    transform={`translateX(${(index - slide) * 100}%)`}
                    transition={`${hasTransition ? 'transform 0.5s' : 'none'}`}
                    ref={imageSlider}
                  >
                    <Flex
                      flexDir={'column'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      <Img
                        src={image?.image}
                        width={'202px'}
                        height={'436px'}
                      />
                    </Flex>
                  </Box>
                </Link>
              ))}
            </Box>
            <Text mt={'auto'} mb={'18px'}>
              {_.isArray(images) && images[slide]?.name}
            </Text>
            <Flex position={'absolute'} top={'50%'} width={'100%'}>
              <ButtonIcon
                aria-label="floor-arrow-left"
                variant={ButtonIconVariants.state2}
                bg={'transparent'}
                onClick={handlePrev}
                visibility={images.length < 2 ? 'hidden' : 'visible'}
                fontSize={{ base: '20px', lg: '15px' }}
                size={'sm'}
                height={{ base: '40px', lg: '32px' }}
                width={{ base: '40px', lg: '30px' }}
              >
                <HiOutlineArrowLeft />
              </ButtonIcon>
              <ButtonIcon
                aria-label="floor-arrow-right"
                variant={ButtonIconVariants.state2}
                bg={'transparent'}
                onClick={handleNext}
                visibility={images.length < 2 ? 'hidden' : 'visible'}
                marginLeft={'auto'}
                fontSize={{ base: '20px', lg: '15px' }}
                size={'sm'}
                height={{ base: '40px', lg: '32px' }}
                width={{ base: '40px', lg: '30px' }}
              >
                <HiOutlineArrowRight />
              </ButtonIcon>
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
  )
}

export default Slider
