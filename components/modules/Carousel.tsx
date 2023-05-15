import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'

type CarouselProps = {
  images: Array<SanityFiles>
  autoSlide: boolean
}

const Carousel: React.FC<CarouselProps> = ({ images, autoSlide = false }) => {
  const [slide, setSlide] = useState(0)

  const handleCarousel = (key: number) => {
    setSlide(key)
  }

  useEffect(() => {
    if (autoSlide && images.length > 1) {
      const timer = setInterval(() => {
        setSlide((slide) => (slide + 1) % images.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [autoSlide, images])

  return (
    <Box>
      <Flex width={'100%'} overflow={'hidden'}>
        {images.map((image, key) => {
          return (
            <Box
              position={'relative'}
              right={`${slide}00vw`}
              transition={'all .6s'}
              key={key}
              height="780px"
            >
              <Box width={'100vw'}>
                <Image
                  src={(image && urlForImage(image).url()) || ''}
                  alt={image._key}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%' }}
                  layout={'fill'}
                  objectPosition={'center'}
                />
              </Box>
            </Box>
          )
        })}
      </Flex>
      {images.length > 1 && (
        <Flex
          position={'relative'}
          bottom={'26px'}
          gap={2}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {images.map((image, key) => {
            return (
              <Box
                key={key}
                bg={key === slide ? '#FFFFFF' : '#D9D9D9'}
                width={'7px'}
                height={'7px'}
                rounded={'full'}
                _hover={{
                  cursor: 'pointer',
                }}
                onClick={() => handleCarousel(key)}
              ></Box>
            )
          })}
        </Flex>
      )}
    </Box>
  )
}

export default Carousel
