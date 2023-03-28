import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  width?: string | number
  height?: string | number
  pathFill?: string
}

const Menu: React.FC<Props> = ({
  width = '18',
  height = '18',
  pathFill = 'black',
  ...props
}) => {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 1H0V0H18V1Z"
        fill={pathFill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 9H0V8H18V9Z"
        fill={pathFill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 17H0V16H18V17Z"
        fill={pathFill}
      />
    </Icon>
  )
}

export default Menu
