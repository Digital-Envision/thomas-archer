import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  pathFill?: string
}

const Close: React.FC<Props> = ({
  width = '22',
  height = '22',
  pathFill = '#D9D9D9',
  ...props
}) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L21.007 21.007" stroke="black" />
      <path d="M1 21.0068L21.007 0.999843" stroke="black" />
    </Icon>
  )
}

export default Close
