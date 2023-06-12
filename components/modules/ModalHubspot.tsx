import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import useHubspot from 'lib/hooks/useHubspot'

const ModalHubspot = ({ isOpen, onClose, region, portalId, formId }) => {
  useHubspot({
    isOpen,
    region,
    portalId,
    formId,
    target: '#modalHubspot',
  })

  return (
    <Modal
      isCentered
      size={{ base: 'sm', md: 'lg', xl: '2xl' }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent pt={6} pb={12} px={12}>
        <ModalCloseButton />
        <Box id="modalHubspot"></Box>
      </ModalContent>
    </Modal>
  )
}

export default ModalHubspot
