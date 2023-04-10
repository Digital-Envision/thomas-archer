import { Box, Collapse, Flex, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Logo, { LogoVariants } from 'components/base/Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import MobileCollapse from './MobileCollapse'
import EnquireFlyout from '../EnquireFlyout'

export interface LinksInterface {
  label: string
  href: string
  externalLink: boolean
}

export interface NavLinksInterfaces extends LinksInterface {
  children?: Array<LinksInterface>
}

const Navbar = () => {
  const [onLightNavbar, setOnLightNavbar] = useState(false)

  const [onHover, setOnHover] = useState(false)
  const [onOpenDropdown, setOnOpenDropdown] = useState(false)
  const [onOpenLevel2, setOnOpenLevel2] = useState(false)

  const [openDrawer, setOpenDrawer] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setOnLightNavbar(window.pageYOffset > 499)
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
      <EnquireFlyout isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
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
            <Logo variant={LogoVariantBreakpoint.variant} />
          </Box>
          <Box ml={'auto'}>
            <DesktopNav
              openDrawer={() => setOpenDrawer(true)}
              onLightNavbar={onLightNavbar}
              parentHover={onHover}
              NAV_ITEMS={NAV_ITEMS}
              TELEPHONE={TELEPHONE}
            />
            <MobileNav
              onLightNavbar={onLightNavbar}
              onOpenDropdown={onOpenDropdown}
              handleOpenDropdown={handleOpenDropdown}
              TELEPHONE={TELEPHONE}
            />
          </Box>
        </Flex>

        <Box height={'87%'}>
          <Collapse in={onOpenDropdown} endingHeight={'100%'}>
            <MobileCollapse
              openDrawer={() => setOpenDrawer(true)}
              NAV_ITEMS={NAV_ITEMS}
              onOpenLevel2={onOpenLevel2}
              setOnOpenLevel2={setOnOpenLevel2}
            />
          </Collapse>
        </Box>
      </Box>
    </>
  )
}

const TELEPHONE = '+611234567890'

const NAV_ITEMS = [
  {
    label: 'Gallery',
    href: '',
    externalLink: false,
    children: [
      {
        label: 'Inspiration Moodboards',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Portofolio',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Upcoming Projects',
        href: '#',
        externalLink: false,
      },
    ],
  },
  {
    label: 'Custom Build',
    href: '#',
    externalLink: false,
  },
  {
    label: 'Home Designs',
    href: '#',
    externalLink: false,
    children: [
      {
        label: 'Evolve',
        href: '#',
        externalLink: true,
      },
      {
        label: 'Expressions Series',
        href: '#',
        externalLink: false,
      },
      {
        label: 'View Range',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Inclusions',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Facades',
        href: '#',
        externalLink: false,
      },
    ],
  },
  {
    label: 'Display Home',
    href: '#',
    externalLink: false,
  },
  {
    label: 'About',
    href: '#',
    externalLink: false,
    children: [
      {
        label: 'Why Thomas Archer',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Find Your Home',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Accolades',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Testimonials',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Where We Build',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Style Studio',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Interior Styling',
        href: '#',
        externalLink: false,
      },
    ],
  },
]

export default Navbar
