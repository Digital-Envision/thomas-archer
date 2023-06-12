import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { SanityFiles } from 'utils/interfaces'
import { getImageUrl } from 'lib/utils'

type CarouselProps = {
  images: { image: SanityFiles; alt: string }[]
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
      <Flex
        width={'100%'}
        minHeight={{ base: '244px', '2xl': 'calc(60vw - 10rem)' }}
        height={{
          base: 'calc(80vw - 8rem)',
          sm: 'calc(80vw - 10rem)',
          md: 'calc(70vw - 10rem)',
          lg: 'calc(70vw - 8rem)',
          xl: 'calc((70vw - 5rem))',
          '2xl': 'calc((100vh - 3rem))',
        }}
        maxHeight={{
          '2xl': 'calc((73vw - 7rem))',
        }}
        overflow={'hidden'}
      >
        {images.map(({ image, alt }, key) => {
          return (
            <Box
              position={'relative'}
              right={`${slide}00vw`}
              transition={'all .6s'}
              key={key}
              height={`100%`}
            >
              <Box width={'100vw'}>
                <Image
                  src={getImageUrl(image)}
                  alt={alt}
                  fill
                  objectFit="cover"
                  objectPosition="center"
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
