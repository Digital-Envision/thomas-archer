import React, { useRef, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi2'

const ScrollBox = ({ children, ...props }) => {
  const [scrollInterval, setScrollInterval] = useState(null)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)

  const handleScrollRight = () => {
    const scrollContainer = scrollContainerRef.current
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + scrollContainer.clientWidth / 2,
      behavior: 'smooth',
    })
  }

  const handleScrollLeft = () => {
    const scrollContainer = scrollContainerRef.current
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft - scrollContainer.clientWidth / 2,
      behavior: 'smooth',
    })
  }

  const handleLeftButtonMouseDown = () => {
    handleScrollLeft()
    setScrollInterval(
      setInterval(() => {
        handleScrollLeft()
      }, 10)
    )
  }

  const handleRightButtonMouseDown = () => {
    handleScrollRight()
    setScrollInterval(
      setInterval(() => {
        handleScrollRight()
      }, 10)
    )
  }

  const handleMouseUp = () => {
    clearInterval(scrollInterval)
    setScrollInterval(null)
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
          onMouseDown={handleLeftButtonMouseDown}
          onMouseUp={handleMouseUp}
        >
          <HiOutlineArrowLeft />
        </ButtonIcon>
        <ButtonIcon
          aria-label="project-arrow-right"
          variant={ButtonIconVariants.state2}
          ref={rightButtonRef}
          onMouseDown={handleRightButtonMouseDown}
          onMouseUp={handleMouseUp}
        >
          <HiOutlineArrowRight />
        </ButtonIcon>
      </Flex>
    </Box>
  )
}

export default ScrollBox
