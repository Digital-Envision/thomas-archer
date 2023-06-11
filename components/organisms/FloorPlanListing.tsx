import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Img, SimpleGrid } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import Text from 'components/base/Text'
import Link from 'next/link'
import Bed from 'components/icon/Bed'
import Bath from 'components/icon/Bath'
import Car from 'components/icon/Car'
import { urlForImage } from 'lib/sanity.image'
import { useStoreLink } from 'lib/store/link'

const FloorList = ({ floor }) => {
  const floorPlanRef = useStoreLink(
    (state) => state?.detailsPage?.floorPlan?.parentPage?._ref
  )
  const floorPlanParentPage = useStoreLink(
    (state) => state?.pages[floorPlanRef]?.url
  )

  const floorPlan = floor?.floorPlan?.listSizes[0]
  const [slide, setSlide] = useState(0)

  const handleNext = () => {
    if (floorPlan?.listImages[slide + 1]?.image) {
      setSlide((count) => count + 1)
    }
  }

  const handlePrev = () => {
    if (floorPlan?.listImages[slide - 1]?.image) {
      setSlide((count) => count - 1)
    }
  }

  return _.isArray(floorPlan?.listImages) &&
    floorPlan?.listImages?.length > 0 ? (
    <>
      <Grid
        templateColumns={'repeat(6, 1fr)'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'#F5F5F5'}
        px={'16px'}
      >
        <GridItem colSpan={1}>
          <ButtonIcon
            aria-label="floor-arrow-left"
            variant={ButtonIconVariants.state2}
            bg={'transparent'}
            onClick={handlePrev}
          >
            <HiOutlineArrowLeft />
          </ButtonIcon>
        </GridItem>
        <GridItem
          colSpan={4}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {_.isArray(floorPlan?.listImages) &&
            floorPlan?.listImages[slide]?.image && (
              <Box mt={'32px'} textAlign={'center'}>
                <Img
                  src={urlForImage(floorPlan?.listImages[slide]?.image).url()}
                  width={'202px'}
                  height={'446px'}
                />
                <Text mb={'18px'}>{floorPlan?.listImages[slide]?.name}</Text>
              </Box>
            )}
        </GridItem>
        <GridItem colSpan={1} display={'flex'} justifyContent={'right'}>
          <ButtonIcon
            aria-label="floor-arrow-right"
            variant={ButtonIconVariants.state2}
            bg={'transparent'}
            onClick={handleNext}
          >
            <HiOutlineArrowRight />
          </ButtonIcon>
        </GridItem>
      </Grid>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        mt={'43px'}
        borderBottom={'1px solid #D9D9D9'}
        pb={'10px'}
      >
        <Link
          href={
            floorPlanParentPage
              ? `/${floorPlanParentPage}/${floor?.slug?.current}`
              : '#'
          }
        >
          <Text textDecor={'underline'}>
            {floor?.title}{' '}
            {floor?.floorPlan?.listSizes?.map((type, key) => {
              return key > 0 ? ` | ${type?.size}` : type?.size
            })}
          </Text>
        </Link>
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
    </>
  ) : (
    <></>
  )
}

const FloorPlanListing = ({ floors, marginTop, marginBottom }) => {
  return (
    <Box
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        columnGap={5}
        rowGap={'150px'}
      >
        {floors?.map((floor, key) => {
          return (
            <Box key={key}>
              <FloorList floor={floor} />
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}

export default FloorPlanListing
