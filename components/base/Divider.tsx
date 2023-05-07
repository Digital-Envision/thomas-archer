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
}

const Divider = ({
  variant: heightVariant,
  marginBottom,
  marginTop,
}: DividerProps) => {
  return (
    <Box
      pt={marginTop}
      pb={marginBottom}
      maxW={'1800px'}
      mx="auto"
      px={{ base: '1rem', md: '4rem' }}
    >
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
