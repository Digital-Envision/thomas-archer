import {
  Img,
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  Box,
} from '@chakra-ui/react'
import React, { useState } from 'react'

export enum ImageVariant {
  Img = 'Img',
  ImageChakra = 'ImageChakra',
  ImageNext = 'ImageNext',
}

interface ImageProps extends ChakraImageProps {
  variant: ImageVariant
  lqip?: string
}

const Image = ({ variant, lqip, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  switch (variant) {
    case ImageVariant.Img:
      return (
        <Box position={'relative'}>
          <Img
            {...props}
            loading={'lazy'}
            onLoad={handleOnLoad}
            opacity={isLoaded ? '100%' : '0'}
            transition={'opacity 0.5s'}
          />
          <Box
            opacity={isLoaded ? '0' : '100%'}
            transition={'opacity 0.5s'}
            position={'absolute'}
            placeholder={'blur'}
            top={0}
            width={'100%'}
            height={'100%'}
          >
            <Img {...props} src={lqip} loading={'lazy'} placeholder={'blur'} />
          </Box>
        </Box>
      )
    case ImageVariant.ImageChakra:
      return (
        <Box position={'relative'}>
          <ChakraImage
            {...props}
            loading={'lazy'}
            onLoad={handleOnLoad}
            opacity={isLoaded ? '100%' : '0'}
            transition={'opacity 0.5s'}
          />
          <Box
            opacity={isLoaded ? '0' : '100%'}
            transition={'opacity 0.5s'}
            position={'absolute'}
            placeholder={'blur'}
            top={0}
            width={'100%'}
            height={'100%'}
          >
            <ChakraImage
              {...props}
              src={lqip}
              loading={'lazy'}
              placeholder={'blur'}
            />
          </Box>
        </Box>
      )
    default:
      return (
        <Box opacity={isLoaded ? '100%' : '0'} transition={'opacity 0.5s'}>
          <ChakraImage
            {...props}
            loading={'lazy'}
            onLoad={handleOnLoad}
            transition={'opacity 0.5s'}
          />
        </Box>
      )
  }
}

export default Image
