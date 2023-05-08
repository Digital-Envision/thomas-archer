import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, Img } from '@chakra-ui/react'
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

const FloorList = ({ floor }) => {
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

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <ButtonIcon
          aria-label="floor-arrow-left"
          variant={ButtonIconVariants.state2}
          bg={'transparent'}
          onClick={handlePrev}
        >
          <HiOutlineArrowLeft />
        </ButtonIcon>
        {floorPlan?.listImages[slide]?.image && (
          <Box mx={'60px'} textAlign={'center'}>
            <Img
              src={urlForImage(floorPlan?.listImages[slide]?.image).url()}
              width={'202px'}
              height={'446px'}
            />
            <Text my={'16px'}>{floorPlan?.listImages[slide]?.name}</Text>
          </Box>
        )}
        <ButtonIcon
          aria-label="floor-arrow-right"
          variant={ButtonIconVariants.state2}
          bg={'transparent'}
          onClick={handleNext}
        >
          <HiOutlineArrowRight />
        </ButtonIcon>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        mt={'43px'}
        borderBottom={'1px solid #D9D9D9'}
        mx={'35px'}
        px={'20px'}
        pb={'10px'}
      >
        <Link href={`/floor/${floor?.slug?.current}`} target={'_blank'}>
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
  )
}

const FloorPlanListing = ({ floors }) => {
  return (
    <Box px={{ base: '1rem', md: '4rem' }}>
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
