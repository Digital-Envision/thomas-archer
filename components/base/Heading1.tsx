import React from 'react'
import { Heading as ChakraHeading, HeadingProps } from '@chakra-ui/react'

export enum HeadingTagSemantic {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

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
