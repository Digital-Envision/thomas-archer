import { Box, Grid } from '@chakra-ui/react'
import React from 'react'

const FloorPlanListing = () => {
  return (
    <Box px={{ base: '1rem', md: '4rem' }}>
      <Grid templateColumns={'repeat(3, 1fr)'}>
        <Box bg={'red'} height={'585px'}>
          <Box></Box>
          <Box></Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default FloorPlanListing
