import { Box, Flex } from '@chakra-ui/react'
import { urlForImage } from 'lib/sanity.image'
import React from 'react'
import Image, { ImageVariant } from 'components/base/Image'

const SectionFeaturedImage = ({
  desktopImage,
  desktopImageMetaData,
  mobileImage,
  mobileImageMetaData,
  alt,
  marginBottom,
  marginTop,
}) => {
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {desktopImage && (
        <Flex>
          <Box
            display={{
              base: 'none',
              md: 'block',
            }}
            width={'100vw'}
            px={'1rem'}
          >
            <Image
              variant={ImageVariant.Img}
              src={urlForImage(desktopImage).url()}
              lqip={desktopImageMetaData?.metadata?.lqip}
              alt={alt}
              objectFit={'cover'}
              width={'100%'}
            ></Image>
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
          <Image
            variant={ImageVariant.Img}
            src={urlForImage(mobileImage).url()}
            lqip={mobileImageMetaData?.metadata?.lqip}
            alt={alt}
            objectFit={'cover'}
            width={'100vw'}
          ></Image>
        </Box>
      )}
    </Flex>
  )
}

export default SectionFeaturedImage
