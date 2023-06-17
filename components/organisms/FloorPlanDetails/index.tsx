import _ from 'lodash'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FloorPlanDetailsDesktop from './Desktop'
import FloorPlanDetailsMobile from './Mobile'

const FloorPlanDetails = ({
  title,
  floorPlan,
  marginTop,
  marginBottom,
  hubspot,
  content,
  ...props
}) => {
  const [floorType, setFloorType] = useState(0)
  const [images, setImages] = useState([])

  const handleCheckImages = () => {
    const floors = floorPlan?.listSizes[floorType]?.listImages
    const floorImages = []

    for (let i = 0; i < floors?.length; i++) {
      if (floors[i]?.image) {
        floorImages.push(floors[i])
      }
    }

    if (floorImages.length > 2) {
      setImages(floorImages.slice(0, 1))
    } else if (floorImages.length === 1) {
      setImages([null, ...floorImages])
    } else if (_.isEmpty(floorImages)) {
      setImages([null, null])
    } else {
      setImages(floorImages)
    }
  }

  useEffect(() => {
    handleCheckImages()
  }, [floorPlan, floorType])

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
      <Box
        display={{ base: 'none', lg: 'flex' }}
        width={'100%'}
        maxW={{ md: '1800px' }}
        alignItems={{ lg: 'center' }}
        justifyContent={{ lg: 'center' }}
      >
        <FloorPlanDetailsDesktop
          title={title}
          floorPlan={floorPlan}
          floorType={floorType}
          setFloorType={setFloorType}
          hubspot={hubspot}
          images={images}
          contact={content}
        />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <FloorPlanDetailsMobile
          title={title}
          floorPlan={floorPlan}
          floorType={floorType}
          setFloorType={setFloorType}
          hubspot={hubspot}
          images={images}
          contact={content}
        />
      </Box>
    </Box>
  )
}

export default FloorPlanDetails
