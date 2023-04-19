import { Box } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React from 'react'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Link from 'next/link'

export enum HeightVariants {
  small = '50vh',
  medium = '70vh',
  large = '100vh',
}

type SectionImageHeadingCTAProps = {
  title: string
  description: string
  isOverlay?: boolean
  image: SanityFiles
  button: {
    label: string
    useInternal: boolean
    internalHref: string
    externalHref: string
    isExternal: boolean
  }
  isExternal?: boolean
  marginTop?: string
  marginBottom?: string
  height?: HeightVariants
}

const SectionImageHeadingCTA: React.FC<SectionImageHeadingCTAProps> = (
  props
) => {
  const {
    title,
    description,
    isOverlay,
    image,
    button,
    marginTop,
    marginBottom,
    height: heightVariant,
  } = props

  return (
    <Box
      height={heightVariant}
      backgroundImage={urlForImage(image).url()}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box
        bgGradient={isOverlay ? 'linear(to-b, #00000073, #00000000)' : ''}
        width={'full'}
        height={heightVariant}
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
            href={
              button.useInternal
                ? `/${button.internalHref}`
                : button.externalHref
            }
            target={button?.isExternal ? '_blank' : ''}
          >
            <Button variant={ButtonVariants.whiteLine} mt={'42px'}>
              {button?.label}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionImageHeadingCTA
