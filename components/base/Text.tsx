import React from 'react'
import { Text as ChakraText, TextProps } from '@chakra-ui/react'

export interface ParagraphProps extends TextProps {
  children: any
}

/**
 * mainly the difference is on fontSize, lineHeight
 */

export const textBaseProps = {
  fontWeight: 300,
  color: '#000000',
  fontFamily: 'Helvetica Neue LT Pro',
  fontSize: '14px',
  lineHeight: '20px',
}

const Text = ({ children, ...props }: ParagraphProps) => {
  return (
    <ChakraText {...textBaseProps} {...props}>
      {children}
    </ChakraText>
  )
}

export default Text
