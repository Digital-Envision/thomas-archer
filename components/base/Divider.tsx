import { Box } from '@chakra-ui/react'

export enum HeightVariants {
  none = '0px',
  less = '30px',
  default = '60px',
  more = '90px',
  extra = '120px',
}
type DividerProps = {
  variant: HeightVariants | string | { base: any; md: any }
}

const Divider = ({ variant: heightVariant }: DividerProps) => {
  return (
    <Box
      height={'1px'}
      marginX={'3rem'}
      marginTop={heightVariant}
      marginBottom={heightVariant}
      backgroundColor="gray.400"
    />
  )
}

export default Divider
