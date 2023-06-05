import { ButtonProps } from '@chakra-ui/react'
import React from 'react'
import Button, { Variants } from './base/Button'

const ExitPreviewButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      top="0.5rem"
      left={'6rem'}
      position="fixed"
      zIndex="99999"
      {...props}
      variant={Variants.black}
    >
      <a href="/api/exit-preview">{'Exit Preview'}</a>
    </Button>
  )
}

export default ExitPreviewButton
