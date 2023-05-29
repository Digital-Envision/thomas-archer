import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import FloorPlanDetailsDesktop from './Desktop'
import FloorPlanDetailsMobile from './Mobile'

const FloorPlanDetails = ({ title, floorPlan, marginTop, marginBottom }) => {
  const [floorType, setFloorType] = useState(0)

  return (
    <Box
      px={{
        md: '4rem',
      }}
      display={{ md: 'flex' }}
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box display={{ base: 'none', lg: 'block' }} maxW={{ md: '1800px' }}>
        <FloorPlanDetailsDesktop
          title={title}
          floorPlan={floorPlan}
          floorType={floorType}
          setFloorType={setFloorType}
        />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <FloorPlanDetailsMobile
          title={title}
          floorPlan={floorPlan}
          floorType={floorType}
          setFloorType={setFloorType}
        />
      </Box>
    </Box>
  )
}

export default FloorPlanDetails
