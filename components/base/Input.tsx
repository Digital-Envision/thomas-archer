import React from 'react'
import { InputProps, Input as ChakraInput } from '@chakra-ui/react'

export interface Props extends InputProps {
  required?: boolean
}

const Input: React.FC<Props> = ({
  children,
  required,
  placeholder,
  ...props
}) => {
  return (
    <ChakraInput
      bg={'transparent'}
      outline={0}
      boxShadow="none"
      px={0}
      borderColor="#898989"
      borderRadius={0}
      borderTop={0}
      borderX={0}
      _focus={{
        borderColor: '#898989',
        borderTopColor: 'transparent',
        outline: 'none',
        boxShadow: 'none',
      }}
      _placeholder={{
        color: '#898989',
      }}
      fontWeight={300}
      fontSize={'12px'}
      placeholder={required ? `${placeholder}*` : placeholder}
      {...props}
    ></ChakraInput>
  )
}

export default Input
