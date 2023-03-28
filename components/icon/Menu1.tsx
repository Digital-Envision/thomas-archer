import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  width?: string | number
  height?: string | number
  pathFill?: string
}

const Menu1: React.FC<Props> = ({
  width = '18',
  height = '18',
  pathFill = 'white',
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
      <g clipPath="url(#clip0_743_3293)">
        <path d="M0 1H18" stroke="black" stroke-width="2" />
        <path d="M0 9H18" stroke="black" stroke-width="2" />
        <path d="M0 17H18" stroke="black" stroke-width="2" />
      </g>
      <defs>
        <clipPath id="clip0_743_3293">
          <rect width="18" height="18" fill={pathFill} />
        </clipPath>
      </defs>
    </Icon>
  )
}

export default Menu1
