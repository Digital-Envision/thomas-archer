import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  pathFill?: string
}

const Dropdown: React.FC<Props> = ({
  width = '12',
  height = '8',
  pathFill = '#D9D9D9',
  ...props
}) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 0.5L6 6.5L11 0.5" stroke={pathFill} />
    </Icon>
  )
}

export default Dropdown
