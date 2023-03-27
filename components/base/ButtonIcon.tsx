import React from 'react'
import { IconButtonProps, IconButton as ChakraButton } from '@chakra-ui/react'

export enum Variants {
  default = 'default',
  state2 = 'state2',
}

export interface Props extends IconButtonProps {
  children: React.ReactNode
  variant?: Variants
}

const variants = {
  default: {
    bg: 'transparent',
    color: '#000000',
    _hover: {},
    _focus: {},
    _active: {},
  },
  state2: {
    bg: '#FFFFFF',
    color: '#000000',
    _hover: {},
    _focus: {},
    _active: {},
  },
}

const ButtonIcon: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <ChakraButton
      {...(variant ? variants[variant] : variants.default)}
      fontSize={'20px'}
      borderRadius={'25px'}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}

export default ButtonIcon
