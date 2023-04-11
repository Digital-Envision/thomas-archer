import { Box } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React from 'react'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Link from 'next/link'

type SectionImageHeadingCTAProps = {
  title: string
  description: string
  isOverlay?: boolean
  image: SanityFiles
  buttonName: string
  buttonLink: string
  button: {
    buttonName: string
    buttonLink: string
    isExternal: boolean
  }
  isExternal: boolean
}

const SectionImageHeadingCTA: React.FC<SectionImageHeadingCTAProps> = ({
  title,
  description,
  isOverlay,
  image,
  button,
}) => {
  return (
    <Box
      height={'100vh'}
      backgroundImage={urlForImage(image).url()}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        bgGradient={isOverlay ? 'linear(to-b, #00000073, #00000000)' : ''}
        width={'full'}
        height={'100vh'}
        position={'absolute'}
        display={'flex'}
        textAlign={'center'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box width={'498px'}>
          <Text
            zIndex={1}
            my={'auto'}
            fontFamily={'heading'}
            fontSize={'28px'}
            color={'#FFFFFF'}
            mb={'32px'}
          >
            {title}
          </Text>
          <Text color={'#FFFFFF'}>{description}</Text>
          <Link
            href={button ? button.buttonLink : '#'}
            target={button?.isExternal ? '_blank' : ''}
          >
            <Button variant={ButtonVariants.whiteLine} mt={'42px'}>
              {button?.buttonName}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionImageHeadingCTA
