import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'

type CarouselProps = {
  images: Array<SanityFiles>
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden'

    // Re-enable horizontal scrolling when component unmounts
    return () => {
      document.body.style.overflowX = 'auto'
    }
  }, [])

  const handleCarousel = (key: number) => {
    setSlide(key)
  }

  return (
    <Box>
      <Flex flexDir={'row'} width={`${images.length}00vw`}>
        {images.map((image, key) => {
          return (
            <Box
              position={'relative'}
              height={'780px'}
              width={'100vw'}
              right={`${slide}00vw`}
              transition={'all .6s'}
            >
              <Box key={key} transition={'all .6s'}>
                <Image
                  src={urlForImage(image).url()}
                  alt={image._key}
                  layout={'fill'}
                  objectFit={'cover'}
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
