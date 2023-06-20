import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Img } from '@chakra-ui/react'
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

  const [images, setImages] = useState([])
  const [floorIndex, setFloorIndex] = useState(null)
  const [slide, setSlide] = useState(0)

  const floorPlan =
    floorIndex !== null ? floor?.floorPlan?.listSizes[floorIndex] : []

  const handleNext = () => {
    if (slide === images.length - 1) {
      setSlide(0)
    } else {
      setSlide((count) => count + 1)
    }
  }

  const handlePrev = () => {
    if (slide === 0) {
      setSlide(images.length - 1)
    } else {
      setSlide((count) => count - 1)
    }
  }

  useEffect(() => {
    if (floor) {
      const listSizes = floor?.floorPlan?.listSizes
      for (let i = 0; i < listSizes?.length; i++) {
        if (listSizes[i]?.listImages) {
          const listImages = listSizes[i]?.listImages
          let hasImages = []
          for (let j = 0; j < listImages?.length; j++) {
            if (listImages[j]?.image) {
              hasImages.push(j)
            }
          }

          if (!_.isEmpty(hasImages)) {
            setImages(hasImages)
            setFloorIndex(i)
            setSlide(hasImages[0])
            return
          }
        }
      }
    }
  }, [floor])

  return images?.length > 0 && floorIndex !== null ? (
    <>
      <Grid
        templateColumns={'repeat(6, 1fr)'}
        alignItems={'center'}
        justifyContent={'center'}
        bg={'#F5F5F5'}
        px={'16px'}
        rowGap={'4rem'}
      >
        <GridItem colSpan={1}>
          <ButtonIcon
            aria-label="floor-arrow-left"
            variant={ButtonIconVariants.state2}
            bg={'transparent'}
            onClick={handlePrev}
            visibility={images.length < 2 ? 'hidden' : 'visible'}
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
            floorPlan?.listImages[images[slide]]?.image && (
              <Link
                href={
                  floorPlanParentPage
                    ? `/${floorPlanParentPage}/${floor?.slug?.current}`
                    : '#'
                }
              >
                <Box mt={'40px'} textAlign={'center'}>
                  <Text>{floor?.title}</Text>
                  <Img
                    src={urlForImage(
                      floorPlan?.listImages[images[slide]]?.image
                    ).url()}
                    width={'202px'}
                    height={'436px'}
                    alt={floorPlan?.listImages[images[slide]]?.alt}
                  />
                  <Text mb={'18px'}>
                    {floorPlan?.listImages[images[slide]]?.name}
                  </Text>
                </Box>
              </Link>
            )}
        </GridItem>
        <GridItem colSpan={1} display={'flex'} justifyContent={'right'}>
          <ButtonIcon
            aria-label="floor-arrow-right"
            variant={ButtonIconVariants.state2}
            bg={'transparent'}
            onClick={handleNext}
            visibility={images.length < 2 ? 'hidden' : 'visible'}
          >
            <HiOutlineArrowRight />
          </ButtonIcon>
        </GridItem>
      </Grid>
      <Link
        href={
          floorPlanParentPage
            ? `/${floorPlanParentPage}/${floor?.slug?.current}`
            : '#'
        }
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          mt={'20px'}
          borderBottom={'1px solid #D9D9D9'}
          pb={'15px'}
        >
          <Text textDecor={'underline'}>
            {floor?.title}{' '}
            {floor?.floorPlan?.listSizes?.map((type, key) => {
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
