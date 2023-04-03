import { Box } from '@chakra-ui/react'

type DashProps = {
  width: string | {}
  height: string
  maxWidth?: string
}

const Dash: React.FC<DashProps> = ({ width, height, maxWidth = '100%' }) => {
  return (
    <Box
      as="hr"
      border="none"
      height={`${height}`}
      width={width}
      maxWidth={maxWidth}
      borderBottom="1px solid black"
    />
  )
}

export default Dash
