import React from 'react'
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

interface HeaderProps extends HeadingProps {
  children?: React.ReactNode
}

/**
 * mainly the difference is on fontSize, lineHeight
 */

const Heading2 = ({ children, ...props }: HeaderProps) => {
  return (
    <ChakraHeading
      as="h2"
      fontWeight={400}
      color={'#000000'}
      fontFamily={'Iskry'}
      fontSize={'28px'}
      lineHeight={'25px'}
      {...props}
    >
      {children}
    </ChakraHeading>
  )
}

export default Heading2
