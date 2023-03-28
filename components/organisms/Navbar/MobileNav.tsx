import { Flex } from '@chakra-ui/react'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import Telephone from 'components/icon/Telephone'
import React from 'react'
import Menu from 'components/icon/Menu'

export interface Props {
  onLightNavbar: boolean
  onOpenDropdown: boolean
  handleOpenDropdown: () => void
  TELEPHONE: string
}

const MobileNav: React.FC<Props> = ({
  onLightNavbar,
  onOpenDropdown,
  handleOpenDropdown,
  TELEPHONE,
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
        <ButtonIcon
          aria-label="button-telephone"
          variant={ButtonIconVariants.default}
          as={'a'}
          href={`tel:${TELEPHONE}`}
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
        <ButtonIcon
          aria-label="button-menu"
          variant={ButtonIconVariants.default}
          as={'a'}
          width={'24.77px'}
          height={'21px'}
          onClick={handleOpenDropdown}
        >
          <Menu
            pathFill={
              onOpenDropdown ? 'black' : onLightNavbar ? 'black' : 'white'
            }
          />
        </ButtonIcon>
      </Flex>
    </>
  )
}

export default MobileNav
