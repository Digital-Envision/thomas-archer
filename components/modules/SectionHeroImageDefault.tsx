import { Box } from '@chakra-ui/react'
import React from 'react'
import Image, { ImageVariant } from 'components/base/Image'
import { urlForImage } from 'lib/sanity.image'
import { MetaData, SanityFiles } from 'utils/interfaces'

type SectionHeroImageDefaultProps = {
  isOverlay?: boolean
  image: SanityFiles
  marginTop?: string
  marginBottom?: string
  imageMetaData: MetaData
}

const SectionHeroImageDefault: React.FC<SectionHeroImageDefaultProps> = ({
  isOverlay,
  image,
  imageMetaData,
  marginTop,
  marginBottom,
}) => {
  return (
    <Box
      position={'relative'}
      width={'full'}
      height={'50vh'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box zIndex={-1}>
        {image && (
          <Box position={'absolute'} width={'100%'}>
            <Image
              width={'100%'}
              variant={ImageVariant.ImageChakra}
              src={(image && urlForImage(image)?.url()) || ''}
              lqip={imageMetaData?.metadata?.lqip}
              alt={'banner'}
              objectPosition={'center'}
              objectFit={'cover'}
              height={'50vh'}
            />
          </Box>
        )}
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
