import React from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export enum Variants {
  white = 'white',
  black = 'black',
  whiteLine = 'whiteLine',
  blackLine = 'blackLine',
}

export interface Props extends ButtonProps {
  children: React.ReactNode
  variant?: Variants
}

const variants = {
  white: {
    bg: '#FFFFFF',
    color: '#000000',
    _hover: {},
    _focus: {},
    _active: {},
  },
  black: {
    bg: '#000000',
    color: '#FFFFFF',
    _hover: {},
    _focus: {},
    _active: {},
  },
  whiteLine: {
    bg: 'transparent',
    border: '1px solid #FFFFFF',
    borderColor: '#FFFFFF',
    color: '#FFFFFF',
    _hover: {},
    _focus: {},
    _active: {},
  },
  blackLine: {
    bg: 'transparent',
    border: '1px solid #000000',
    borderColor: '#000000',
    color: '#000000',
    _hover: {},
    _focus: {},
    _active: {},
  },
}

const Button: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <ChakraButton
      {...(variant ? variants[variant] : variants.white)}
      fontWeight={300}
      fontSize={'14px'}
      lineHeight={'17px'}
      px={8}
      py={2}
      borderRadius={'25px'}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
