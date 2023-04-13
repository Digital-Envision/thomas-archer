import { Icon, IconProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends IconProps {
  width?: string | number
  height?: string | number
  pathFill?: string
  rectFill?: string
}

const Pinterest: React.FC<Props> = ({
  width = '12',
  height = '15',
  pathFill = 'black',
  rectFill = 'white',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 15"
    >
      <path
        fill={pathFill}
        d="M6.063.634C2.256.634.234 3.162.234 5.914c0 1.279.69 2.873 1.791 3.38.167.076.255.043.294-.117.03-.122.178-.714.245-.99a.261.261 0 00-.062-.25c-.364-.438-.656-1.244-.656-1.992 0-1.925 1.472-3.787 3.983-3.787 2.167 0 3.685 1.462 3.685 3.55 0 2.36-1.205 3.996-2.772 3.996-.866 0-1.515-.708-1.306-1.577.248-1.037.73-2.156.73-2.904 0-.67-.364-1.229-1.115-1.229-.885 0-1.596.907-1.596 2.118 0 .773.264 1.297.264 1.297s-.874 3.656-1.034 4.337c-.155.657-.121 1.55-.06 2.226a.441.441 0 00.818.18c.338-.574.743-1.345.91-1.98l.549-2.074c.288.542 1.127 1.002 2.02 1.002 2.66 0 4.578-2.42 4.578-5.428 0-3.01-2.378-5.04-5.437-5.04"
      ></path>
    </svg>
  )
}

export default Pinterest
