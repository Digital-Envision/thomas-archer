import { Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

const SectionHeroImageDefault = ({ isOverlay, image, marginTop, marginBottom }) => {
  return (
    <Box position={'relative'} width={'full'} height={'50vh'} marginTop={marginTop} marginBottom={marginBottom}>
      <Box zIndex={-1}>
        <Image
          priority
          src={urlForImage(image).url()}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center'}
          alt={'banner'}
        />
      </Box>
      {isOverlay && (
        <Box
          bgGradient="linear(to-b, #00000073, #00000000)"
          width={'full'}
          height={'25vh'}
          position={'absolute'}
        ></Box>
      )}
    </Box>
  )
}

export default SectionHeroImageDefault
