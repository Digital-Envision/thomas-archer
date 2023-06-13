import {Box} from "@chakra-ui/react"
import ModalHubspot from "components/modules/ModalHubspot"
import { useState } from "react"

const ModalType = ({ link, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ModalHubspot
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          region={link?.region}
          portalId={link?.portalId}
          formId={link?.formId}
      />
      <Box onClick={() => setIsOpen(true)} cursor={'pointer'}>
        {children}
      </Box>
    </>
  )
}

export default ModalType

