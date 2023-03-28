import React from 'react'
import { ImageProps } from '@chakra-ui/react'
import { Image as ChakraImage } from '@chakra-ui/react'

export enum LogoVariants {
  white = 'white',
  black = 'black',
}
interface LogoProps extends ImageProps {
  variant: LogoVariants
}

const Logo = ({ variant, ...props }: LogoProps) => {
  return (
    <ChakraImage
      objectFit="cover"
      src={
        variant === LogoVariants.white
          ? '/images/logo/logo-white.svg'
          : '/images/logo/logo-black.svg'
      }
      alt="logo"
      {...props}
    />
  )
}

export default Logo
