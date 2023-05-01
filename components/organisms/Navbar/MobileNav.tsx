import { Flex } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import Telephone from 'components/icon/Telephone'
import React from 'react'
import Menu from 'components/icon/Menu'
import Close from 'components/icon/Close'

export interface Props {
  onLightNavbar: boolean
  onOpenDropdown: boolean
  handleOpenDropdown: () => void
  specialButtonOne: {
    showButton: boolean
  }
  contact: {
    phone: {
      code: string
      number: string
    }
    email: string
    address: {
      streetName: string
      suburb: string
      postalCode: string
    }
  }
}

const MobileNav: React.FC<Props> = ({
  onLightNavbar,
  onOpenDropdown,
  handleOpenDropdown,
  specialButtonOne,
  contact,
}) => {
  return (
    <>
      <Flex
        alignItems={'center'}
        display={{
          base: 'flex',
          xl: 'none',
        }}
      >
        {specialButtonOne && specialButtonOne.showButton && (
          <ButtonIcon
            aria-label="button-telephone"
            variant={ButtonIconVariants.default}
            as={'a'}
            href={`tel:${contact?.phone?.code}${contact?.phone?.number}`}
          >
            <Telephone
              pathFill={
                onOpenDropdown ? 'black' : onLightNavbar ? 'black' : 'white'
              }
              rectFill={
                onOpenDropdown ? 'white' : onLightNavbar ? 'white' : 'black'
              }
              width={'25.6px'}
              height={'25.58px'}
            />
          </ButtonIcon>
        )}
        <ButtonIcon
          aria-label="button-menu"
          variant={ButtonIconVariants.default}
          as={'a'}
          width={'24.77px'}
          height={'21px'}
          onClick={handleOpenDropdown}
        >
          {onOpenDropdown ? (
            <Close />
          ) : (
            <Menu pathFill={onLightNavbar ? 'black' : 'white'} />
          )}
        </ButtonIcon>
      </Flex>
    </>
  )
}

export default MobileNav
