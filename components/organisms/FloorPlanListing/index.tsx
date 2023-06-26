import _ from 'lodash'
import React, { useEffect, useState, useMemo } from 'react'
import { Box, Divider, Flex, Grid } from '@chakra-ui/react'
import Text from 'components/base/Text'
import Link from 'next/link'
import Bed from 'components/icon/Bed'
import Bath from 'components/icon/Bath'
import Car from 'components/icon/Car'
import { urlForImage } from 'lib/sanity.image'
import { useStoreLink } from 'lib/store/link'
import Slider from './Slider'

const FloorList = ({ floor, _floorIndex, filter }) => {
  const [floorIndex, setFloorIndex] = useState(null)

  const floorPlanRef = useStoreLink(
    (state) => state?.detailsPage?.floorPlan?.parentPage?._ref
  )
  const floorPlanParentPage = useStoreLink(
    (state) => state?.pages[floorPlanRef]?.url
  )

  const [slide, setSlide] = useState(0)

  const floorPlan = floorIndex !== null ? floor?.listSizes[floorIndex] : []

  const handlePrev = () => {
    setSlide((prevIndex) => {
      return prevIndex === 0
        ? floor?.images[floorIndex].length - 1
        : prevIndex - 1
    })
  }

  const handleNext = () => {
    setSlide((prevIndex) => {
      return prevIndex === floor?.images[floorIndex].length - 1
        ? 0
        : prevIndex + 1
    })
  }

  useEffect(() => {
    setSlide(0)
    if (filter === 'all') {
      setFloorIndex(_floorIndex)
    } else if (filter === 'single') {
      setFloorIndex(floor?.storeyIndex?.singleStorey)
    } else if (filter === 'double') {
      setFloorIndex(floor?.storeyIndex?.doubleStorey)
    }
  }, [filter])

  return !_.isEmpty(floor?.images) && floorIndex !== null ? (
    <>
      <Slider
        title={floor?.title}
        images={floor?.images[floorIndex]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        slide={slide}
        href={
          floorPlanParentPage ? `/${floorPlanParentPage}/${floor?.slug}` : '#'
        }
      />
      <Link
        href={
          floorPlanParentPage ? `/${floorPlanParentPage}/${floor?.slug}` : '#'
        }
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          pt={'20px'}
          borderBottom={'1px solid #D9D9D9'}
          pb={'15px'}
        >
          <Text textDecor={'underline'}>
            {floor?.title}{' '}
            {floor?.listSizes?.map((type, key) => {
              return key > 0 ? ` | ${type?.size}` : type?.size
            })}
          </Text>
          <Flex ml={'auto'} alignItems={'center'}>
            <Box textAlign={'center'}>
              <Bed />
              <Text as={'span'} ml={'13px'}>
                {floorPlan?.roomDetails?.bedRoom}
              </Text>
            </Box>
            <Box mx={'13px'}>
              <Bath />
              <Text as={'span'} ml={'13px'}>
                {floorPlan?.roomDetails?.bathRoom}
              </Text>
            </Box>
            <Box>
              <Car />
              <Text as={'span'} ml={'13px'}>
                {floorPlan?.roomDetails?.carPort}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Link>
    </>
  ) : (
    <></>
  )
}

const FloorPlanListing = ({ floors, marginTop, marginBottom }) => {
  const [filter, setFilter] = useState('all')
  const [mappingFloors, setMappingFloors] = useState([])
  const filteringFloors = useMemo(() => {
    if (filter === 'all') {
      return mappingFloors
    } else if (filter === 'single') {
      return mappingFloors.filter(
        (floor) => !_.isNull(floor?.storeyIndex?.singleStorey)
      )
    } else if (filter === 'double') {
      return mappingFloors.filter(
        (floor) => !_.isNull(floor?.storeyIndex?.doubleStorey)
      )
    }
  }, [filter, mappingFloors])

  useEffect(() => {
    if (_.isArray(floors)) {
      const mapping = floors.map((floor) => {
        const listSizes = floor?.floorPlan?.listSizes

        const sizesImages = []

        let filterStorey = {
          singleStorey: null,
          doubleStorey: null,
        }

        for (let i = 0; i < listSizes?.length; i++) {
          const listImages = listSizes[i]?.listImages
          const thisImages = []
          for (let j = 0; j < listImages?.length; j++) {
            if (listImages[j]?.image) {
              thisImages.push({
                name: listImages[j]?.name,
                image: urlForImage(listImages[j]?.image)?.url(),
              })
            }
          }

          if (thisImages.length > 1 && _.isNull(filterStorey.doubleStorey)) {
            filterStorey.doubleStorey = i
          } else if (
            thisImages.length === 1 &&
            _.isNull(filterStorey.singleStorey)
          ) {
            filterStorey.singleStorey = i
          }

          sizesImages.push(thisImages)
        }

        return {
          title: floor?.title,
          listSizes,
          floorIndex: !_.isEmpty(sizesImages) ? 0 : null,
          images: sizesImages,
          storeyIndex: filterStorey,
          slug: floor?.slug?.current,
        }
      })

      setMappingFloors(mapping)
    }
  }, [floors])

  return (
    <Box
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex mb={'60px'} ml={'20px'}>
        <Text
          cursor={'pointer'}
          mt={1}
          fontWeight={filter === 'all' && 700}
          onClick={() => setFilter('all')}
          userSelect={'none'}
        >
          View all
        </Text>
        <Divider
          orientation="vertical"
          height={'22px'}
          borderColor={'#000000'}
          mx={2}
        />
        <Text
          cursor={'pointer'}
          mt={1}
          fontWeight={filter === 'single' && 700}
          onClick={() => setFilter('single')}
          userSelect={'none'}
        >
          Single Storey
        </Text>
        <Divider
          orientation="vertical"
          height={'20px'}
          borderColor={'#000000'}
          mx={2}
        />
        <Text
          cursor={'pointer'}
          mt={1}
          fontWeight={filter === 'double' && 700}
          onClick={() => setFilter('double')}
          userSelect={'none'}
        >
          Double Storey
        </Text>
      </Flex>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        columnGap={5}
        rowGap={'150px'}
      >
        {filteringFloors?.map((floor, key) => {
          return (
            <Box key={key}>
              <FloorList
                floor={floor}
                _floorIndex={floor.floorIndex}
                filter={filter}
              />
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default FloorPlanListing
