import {
  AspectRatio,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

const ModalVideo = ({ videoUrl, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ sm: 'xl', md: '2xl', lg: '4xl', xl: '6xl' }}
      isCentered
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent px={{ base: 4, md: 0 }} bg={'transparent'}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            width={'100%'}
            height={'100%'}
            src={`${videoUrl}${
              videoUrl.includes('?') ? '&autoplay=1' : '?autoplay=1'
            }`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  )
}

export default ModalVideo
