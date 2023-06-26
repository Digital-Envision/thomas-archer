import _ from 'lodash'
import { Box, Flex, Img, Link } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'
import React from 'react'
import Text from 'components/base/Text'

const Slider = ({
  images = [],
  title,
  href = '#',
  handlePrev,
  handleNext,
  slide,
}) => {
  return (
    images?.length > 0 && (
      <Box mt={5}>
        <Box
          px={'16px'}
          bg={'#F5F5F5'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex
            position="relative"
            width="100%"
            height="531px"
            overflow="hidden"
            textAlign={'center'}
            flexDir={'column'}
          >
            <Link href={'#'}>
              <Text pt={'40px'}>{title}</Text>
            </Link>
            <Box textAlign={'center'} bg={'blue'}>
              {images?.map((image, index) => (
                <Link href={href}>
                  <Box
                    key={index}
                    position={'absolute'}
                    width="100%"
                    height="100%"
                    transform={`translateX(${(index - slide) * 100}%)`}
                    transition="transform 0.5s"
                  >
                    <Flex
                      flexDir={'column'}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      <Img
                        src={image?.image}
                        width={'202px'}
                        height={'436px'}
                      />
                    </Flex>
                  </Box>
                </Link>
              ))}
            </Box>
            <Text mt={'auto'} mb={'18px'}>
              {_.isArray(images) && images[slide]?.name}
            </Text>
            <Flex position={'absolute'} top={'50%'} width={'100%'}>
              <ButtonIcon
                aria-label="floor-arrow-left"
                variant={ButtonIconVariants.state2}
                bg={'transparent'}
                onClick={handlePrev}
                visibility={images.length < 2 ? 'hidden' : 'visible'}
                fontSize={{ lg: '30px' }}
              >
                <HiOutlineArrowLeft />
              </ButtonIcon>
              <ButtonIcon
                aria-label="floor-arrow-right"
                variant={ButtonIconVariants.state2}
                bg={'transparent'}
                onClick={handleNext}
                visibility={images.length < 2 ? 'hidden' : 'visible'}
                marginLeft={'auto'}
                fontSize={{ lg: '30px' }}
              >
                <HiOutlineArrowRight />
              </ButtonIcon>
            </Flex>
          </Flex>
        </Box>
      </Box>
    )
  )
}

export default Slider
