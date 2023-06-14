import { Box, Flex, Img } from '@chakra-ui/react'
import { urlForImage } from 'lib/sanity.image'
import React from 'react'

const SectionFeaturedImage = ({ desktopImage, mobileImage, alt }) => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      {desktopImage && (
        <Flex>
          <Box
            display={{
              base: 'none',
              md: 'block',
            }}
            width={{
              base: '100%',
              '2xl': '50vw',
            }}
          >
            <Img
              src={urlForImage(desktopImage).url()}
              alt={alt}
              objectFit={'cover'}
              width={'100%'}
            ></Img>
          </Box>
        </Flex>
      )}
      {mobileImage && (
        <Box
          display={{
            base: 'block',
            md: 'none',
          }}
          px={'1rem'}
        >
          <Img
            src={urlForImage(mobileImage).url()}
            alt={alt}
            objectFit={'cover'}
            width={'100vw'}
          ></Img>
        </Box>
      )}
    </Flex>
  )
}

export default SectionFeaturedImage
