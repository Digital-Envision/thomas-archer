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
  marginTop?: HeightVariants
  marginBottom?: HeightVariants
  px?: object
}

const Divider = ({
  variant: heightVariant,
  marginBottom,
  marginTop,
  px = {
    base: '1rem',
    md: '4rem',
  },
}: DividerProps) => {
  return (
    <Box pt={marginTop} pb={marginBottom} maxW={'1800px'} mx="auto" px={px}>
      <Box
        height={'1px'}
        marginTop={heightVariant}
        marginBottom={heightVariant}
        backgroundColor="gray.400"
      />
    </Box>
  )
}

export default Divider
