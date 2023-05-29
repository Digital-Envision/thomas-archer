import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import { useEffect } from 'react'

const FloorPlanDetailsModal = ({
  isOpen,
  onClose,
  region,
  portalId,
  formId,
}) => {
  useEffect(() => {
    if (region && portalId && formId) {
      const script = document.createElement('script')
      script.src = 'https://js.hsforms.net/forms/shell.js'
      document.body.appendChild(script)

      script.addEventListener('load', () => {
        // @TS-ignore
        if ((window as any).hbspt) {
          // @TS-ignore
          ;(window as any).hbspt.forms.create({
            region: region,
            portalId: portalId,
            formId: formId,
            target: '#hubspotFloorplanForm',
          })
        }
      })
    }
  }, [isOpen])

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
        <Box id="hubspotFloorplanForm"></Box>
      </ModalContent>
    </Modal>
  )
}

export default FloorPlanDetailsModal
