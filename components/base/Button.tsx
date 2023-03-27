import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children }) => {
  return (
    <ChakraButton>
      {children}
    </ChakraButton>
  )
}

export default Button;

