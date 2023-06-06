import { Box } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React from 'react'
import { urlForImage } from 'lib/sanity.image'
import { SanityFiles } from 'utils/interfaces'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Link, { LinksInterface } from 'components/base/Link'
import { HeadingTagSemantic } from 'components/base/Heading1'

const Height = {
  large: {
    base: '600px',
    lg: '850px',
  },
  medium: {
    base: '350px',
    lg: '600px',
  },
}

export enum HeightVariants {
  large = 'large',
  medium = 'medium',
}

type SectionImageHeadingCTAProps = {
  title?: string
  description?: string
  isOverlay?: boolean
  image: SanityFiles
  button: LinksInterface
  marginTop?: string
  marginBottom?: string
  headingTagLevel?: HeadingTagSemantic
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
    headingTagLevel,
    height = HeightVariants.large,
  } = props

  return (
    <Box
      height={Height[height]}
      backgroundImage={urlForImage(image).url()}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition={'center'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box
        bgGradient={isOverlay ? 'linear(to-b, #00000073, #00000000)' : ''}
        width={'full'}
        height={Height[height]}
        position={'absolute'}
        display={'flex'}
        textAlign={'center'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box width={'498px'} px={'1rem'}>
          {title && (
            <Text
              zIndex={1}
              my={'auto'}
              fontFamily={'heading'}
              fontSize={'28px'}
              color={'#FFFFFF'}
              mb={'32px'}
              as={headingTagLevel}
            >
              {title}
            </Text>
          )}
          {description && <Text color={'#FFFFFF'}>{description}</Text>}
          {button.label && (
            <Link link={button}>
              <Button variant={ButtonVariants.whiteLine} mt={'42px'}>
                {button?.label}
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default SectionImageHeadingCTA
