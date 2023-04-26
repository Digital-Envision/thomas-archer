import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'

type CarouselProps = {
  images: Array<SanityFiles>
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [slide, setSlide] = useState(0)

  const handleCarousel = (key: number) => {
    setSlide(key)
  }

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
            >
              <Box width={'100vw'}>
                <Image
                  src={urlForImage(image)?.url()}
                  alt={image._key}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%' }}
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
