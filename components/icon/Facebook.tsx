import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  pathFill?: string
}

const Facebook: React.FC<Props> = ({
  width = '9',
  height = '18',
  pathFill = 'black',
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
      <path
        d="M5.84198 18V9.7889H8.49806L8.89543 6.58987H5.84198V4.54885C5.84198 3.62244 6.08947 2.99276 7.36871 2.99276H9V0.126659C8.71766 0.0868516 7.74864 0 6.62277 0C4.26995 0 2.65957 1.49095 2.65957 4.2304V6.58987H0V9.7889H2.65957V18H5.84198Z"
        fill={pathFill}
      />
    </Icon>
  )
}

export default Facebook
