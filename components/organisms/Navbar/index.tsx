import _ from 'lodash'
import { Box, Collapse, Flex, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo, { LogoVariants } from 'components/base/Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import MobileCollapse from './MobileCollapse'
import EnquireFlyout from '../EnquireFlyout'
import Link from 'next/link'

export interface LinksInterface {
  label: string
  useInternal: boolean
  internalHref: {
    _ref: string
    _type: string
  }
  externalHref: string
  isExternal: boolean
  mobileOnly: boolean
}

export interface NavLinksInterfaces extends LinksInterface {
  children?: Array<LinksInterface>
  button?: {
    label: string
    useInternal: boolean
    internalHref: {
      _ref: string
      _type: string
    }
    externalHref: string
    isExternal: boolean
  }
}

const Navbar = ({
  links,
  enquire,
  contact,
  socialMedia,
  specialButtons,
  isForceOnLightNavbar = false,
}) => {
  const Links = links || []

  const [onLightNavbar, setOnLightNavbar] = useState(isForceOnLightNavbar)

  const [onHover, setOnHover] = useState(false)
  const [onOpenDropdown, setOnOpenDropdown] = useState(false)
  const [onOpenLevel2, setOnOpenLevel2] = useState(false)

  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (!isForceOnLightNavbar) {
        setOnLightNavbar(window.pageYOffset > 499)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleOpenDropdown = () => {
    if (onOpenDropdown) {
      setOnOpenLevel2(false)
      setOnOpenDropdown(false)
    } else {
      setOnOpenDropdown(true)
    }
  }

  const LogoVariantBreakpoint = useBreakpointValue(
    {
      base: onOpenDropdown
        ? {
            version: 'mobile',
            variant: LogoVariants.black,
          }
        : onLightNavbar
        ? {
            version: 'mobile',
            variant: LogoVariants.black,
          }
        : {
            version: 'mobile',
            variant: LogoVariants.white,
          },
      xl: onHover
        ? {
            version: 'desktop',
            variant: LogoVariants.black,
          }
        : onLightNavbar
        ? {
            version: 'desktop',
            variant: LogoVariants.black,
          }
        : {
            version: 'desktop',
            variant: LogoVariants.white,
          },
    },
    {
      fallback: 'xl',
    }
  )

  useEffect(() => {
    if (LogoVariantBreakpoint.version === 'desktop') {
      // Set overflow-y to auto on mount
      document.documentElement.style.overflowY = 'auto'
      document.body.style.overflowY = 'auto'

      // Cleanup function to remove styles on unmount
      return () => {
        document.documentElement.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
      }
    } else {
      if (onOpenDropdown) {
        // Set overflow-y to hidden on mount
        document.documentElement.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'

        // Cleanup function to remove styles on unmount
        return () => {
          document.documentElement.style.overflowY = 'auto'
          document.body.style.overflowY = 'auto'
        }
      }
    }
  }, [LogoVariantBreakpoint])

  return (
    <>
      <EnquireFlyout
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title={enquire?.title}
        description={enquire?.description}
        button={enquire?.button}
        privacyAndPolicy={enquire?.privacyAndPolicy}
        contact={contact}
      />
      <Box width={'full'} position={'fixed'} height={'auto'} zIndex={99}>
        <Flex
          height={{
            base: '110px',
            xl: '113px',
          }}
          bg={{
            base: onOpenDropdown
              ? '#FFFFFF'
              : onLightNavbar
              ? '#FFFFFF'
              : 'transparent',
            xl: onLightNavbar ? '#FFFFFF' : 'transparent',
          }}
          transition={'all .2s'}
          _hover={{
            bg: {
              xl: '#FFFFFF',
            },
          }}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          px={{
            base: '27.58px',
            md: '70.48px',
          }}
          pt={{
            lg: 0,
          }}
          alignItems={{
            base: 'center',
            xl: 'normal',
          }}
        >
          <Box
            height={{
              base: '25.67px',
              xl: '21.08px',
            }}
            width={{
              base: '228.85px',
              xl: '189.05px',
            }}
            pt={{
              xl: '3.4em',
            }}
          >
            <Link href={'/'}>
              <Logo variant={LogoVariantBreakpoint.variant} />
            </Link>
          </Box>
          <Box ml={'auto'}>
            <DesktopNav
              openDrawer={() => setOpenDrawer(true)}
              onLightNavbar={onLightNavbar}
              parentHover={onHover}
              NAV_ITEMS={Links}
              specialButtonOne={specialButtons?.specialButtonOne}
              specialButtonTwo={specialButtons?.specialButtonTwo}
              contact={contact}
              socialMedia={socialMedia}
            />
            <MobileNav
              onLightNavbar={onLightNavbar}
              onOpenDropdown={onOpenDropdown}
              handleOpenDropdown={handleOpenDropdown}
              specialButtonOne={specialButtons?.specialButtonOne}
              contact={contact}
            />
          </Box>
        </Flex>

        <Box height={'87%'}>
          <Collapse in={onOpenDropdown} endingHeight={'100%'}>
            <MobileCollapse
              openDrawer={() => setOpenDrawer(true)}
              NAV_ITEMS={Links}
              onOpenLevel2={onOpenLevel2}
              setOnOpenLevel2={setOnOpenLevel2}
              specialButtonTwo={specialButtons?.specialButtonTwo}
              contact={contact}
              socialMedia={socialMedia}
            />
          </Collapse>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
