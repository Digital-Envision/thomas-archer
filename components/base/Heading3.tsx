import React from 'react'
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

interface HeaderProps extends HeadingProps {
  children?: React.ReactNode
}

/**
 * mainly the difference is on fontSize, lineHeight
 */

const Heading3 = ({ children, ...props }: HeaderProps) => {
  return (
    <ChakraHeading
      as="h3"
      fontWeight={400}
      color={'#000000'}
      fontSize={'22px'}
      lineHeight={'25px'}
      {...props}
    >
      {children}
    </ChakraHeading>
  )
}

export default Heading3
