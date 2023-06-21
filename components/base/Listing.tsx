import { Flex, Grid } from '@chakra-ui/react'
import _ from 'lodash'

export const ListingContainer = ({
  marginTop,
  marginBottom,
  children,
  ...props
}) => {
  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      width={'100%'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  )
}

export const ListingGrid = ({ children, ...props }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      columnGap={{
        base: '2.5vw',
        sm: '2.5vw',
        md: '2.5vw',
        lg: '2.5vw',
      }}
      rowGap={{
        base: '3rem',
        sm: '3rem',
        md: '3rem',
        lg: '3rem',
      }}
      w={{ md: '100%', lg: '100%' }} // base and sm not 100%
      {...props}
    >
      {children}
    </Grid>
  )
}
