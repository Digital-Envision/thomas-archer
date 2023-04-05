import { Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const SectionHeroImageDefault = () => {
  return (
    <Box position={'relative'} width={'full'} height={'50vh'}>
      <Box zIndex={-1}>
        <Image
          priority
          src={'/images/image-banner-default.png'}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center'}
          alt={'banner'}
        />
      </Box>
      <Box
        bgGradient="linear(to-b, #00000073, #00000000)"
        width={'full'}
        height={'25vh'}
        position={'absolute'}
      ></Box>
    </Box>
  )
}

export default SectionHeroImageDefault
