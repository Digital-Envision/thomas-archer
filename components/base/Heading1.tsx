import React from 'react'
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

interface HeaderProps extends HeadingProps {
  children?: React.ReactNode
}

/**
 * mainly the difference is on fontSize, lineHeight
 */

const Heading1 = ({ children, ...props }: HeaderProps) => {
  return (
    <ChakraHeading
      as="h1"
      fontWeight={400}
      color={'#000000'}
      fontSize={'3xl'} // 30px
      lineHeight={'short'}
      {...props}
    >
      {children}
    </ChakraHeading>
  )
}

export default Heading1
