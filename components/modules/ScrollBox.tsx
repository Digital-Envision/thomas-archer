import React, { useRef, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'

const ScrollBox = ({
  children,
  widthImage = 362,
  padding = 64,
  gap = 8,
  ...props
}) => {
  const [preventRightClick, setPreventRightClick] = useState(false)
  const [preventLeftClick, setPreventLeftClick] = useState(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)

  const countScrollLeft = ({ width = widthImage, scroll }) => {
    const firstScroll = width + padding + gap
    const range = width * 2 + gap * 2 + padding - firstScroll

    if (scroll === 0) {
      return scroll
    }

    if (scroll % range === padding || scroll === firstScroll) {
      return scroll - width - gap
    }

    if (scroll < range) return 0
    return range * Math.floor(scroll / range) + padding
  }

  const countScrollRight = ({ width = widthImage, scroll }) => {
    const firstScroll = width + padding + gap
    const range = width * 2 + gap * 2 + padding - firstScroll

    if (scroll === 0) {
      return firstScroll
    }

    if (scroll % range === padding || scroll === firstScroll) {
      return width + scroll + gap
    }

    if (scroll < range) return firstScroll
    return range * Math.round(scroll / range) + padding
  }

  const handleScrollRight = () => {
    setPreventRightClick(true)
    const scrollContainer = scrollContainerRef.current
    scrollContainer.scrollTo({
      left: countScrollRight({
        width: widthImage,
        scroll: scrollContainer.scrollLeft,
      }),
      behavior: 'smooth',
    })
    setTimeout(() => {
      setPreventRightClick(false)
    }, 300)
  }

  const handleScrollLeft = () => {
    setPreventLeftClick(true)
    const scrollContainer = scrollContainerRef.current
    scrollContainer.scrollTo({
      left: countScrollLeft({
        width: widthImage,
        scroll: scrollContainer.scrollLeft,
      }),
      behavior: 'smooth',
    })
    setTimeout(() => {
      setPreventLeftClick(false)
    }, 300)
  }

  const handleLeftButtonMouseDown = () => {
    if (!preventLeftClick) {
      handleScrollLeft()
    }
  }

  const handleRightButtonMouseDown = () => {
    if (!preventRightClick) {
      handleScrollRight()
    }
  }

  return (
    <Box {...props}>
      <Flex
        width={'100%'}
        gap={2}
        overflowX={'auto'}
        ref={scrollContainerRef}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {children}
      </Flex>
      <Flex justifyContent={'right'} mt={'44px'} pr={'76px'}>
        <ButtonIcon
          aria-label="project-arrow-left"
          variant={ButtonIconVariants.state2}
          mr={2}
          ref={leftButtonRef}
          onClick={handleLeftButtonMouseDown}
        >
          <HiOutlineArrowLeft />
        </ButtonIcon>
        <ButtonIcon
          aria-label="project-arrow-right"
          variant={ButtonIconVariants.state2}
          ref={rightButtonRef}
          onClick={handleRightButtonMouseDown}
        >
          <HiOutlineArrowRight />
        </ButtonIcon>
      </Flex>
    </Box>
  )
}

export default ScrollBox
