import { SlideFade, useDisclosure } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const TransitionFade = ({ children }) => {
  const componentRef = useRef(null)
  const { isOpen, onToggle } = useDisclosure()

  const handleScroll = () => {
    // Get the position of the component on the Y-axis
    const componentPositionY = componentRef.current.getBoundingClientRect().top

    // Get the current scroll position
    const scrollY = window.scrollY

    if (componentPositionY - scrollY <= -680 && !isOpen) {
      onToggle()
    }
  }

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isOpen])

  return (
    <SlideFade
      in={isOpen}
      ref={componentRef}
      transition={{ enter: { duration: 0.4 } }}
      offsetY={'10px'}
    >
      {children}
    </SlideFade>
  )
}

export default TransitionFade
