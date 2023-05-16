import { Box, Divider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import Person from 'components/icon/Person'
import Telephone from 'components/icon/Telephone'
import React from 'react'
import DesktopSubNav from './DesktopSubNav'
import { NavLinksInterfaces, LinksInterface } from '.'
import Link from 'next/link'
import { SanityFiles } from 'utils/interfaces'

export interface Props {
  openDrawer?: () => void
  onLightNavbar?: boolean
  parentHover?: boolean
  NAV_ITEMS: Array<NavLinksInterfaces>
  specialButtonOne: {
    showButton: boolean
  }
  specialButtonTwo: {
    label: string
    useInternal: boolean
    externalHref: string
    internalHref: string
    isExternal: boolean
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
  socialMedia: {
    connectWithUs: LinksInterface
    socialMedia: Array<{
      label: string
      icon: SanityFiles
      useInternal: boolean
      internalHref: string
      externalHref: string
      isExternal: boolean
    }>
  }
}

const DesktopNav: React.FC<Props> = ({
  openDrawer,
  onLightNavbar,
  parentHover,
  NAV_ITEMS,
  specialButtonOne,
  specialButtonTwo,
  contact,
  socialMedia,
}) => {
  return (
    <Grid
      templateColumns={'repeat(9, 1fr)'}
      display={{ base: 'none', xl: 'grid' }}
      height={'full'}
    >
      <GridItem colSpan={6}>
        <Stack
          direction={'row'}
          spacing={10}
          height={'full'}
          justifyContent={'right'}
          pr={'3.5em'}
          pt={'4.4em'}
        >
          {NAV_ITEMS?.map((link, key) => {
            return (
              <Box
                key={key}
                className="nav"
                borderBottom={'5px solid transparent'}
                _hover={{
                  borderBottomColor: 'black',
                }}
              >
                <Link
                  href={
                    link.useInternal
                      ? `/${link.internalHref}`
                      : link.externalHref
                  }
                  target={link.isExternal ? '_blank' : ''}
                >
                  <Text
                    fontSize={'14px'}
                    fontWeight={400}
                    lineHeight={'16.8px'}
                    height={'full'}
                    _hover={{
                      textDecor: 'none',
                    }}
                    color={
                      parentHover
                        ? '#000000'
                        : onLightNavbar
                        ? '#000000'
                        : 'white'
                    }
                  >
                    {link.label}
                  </Text>
                </Link>
                {link.children && (
                  <DesktopSubNav
                    links={link.children}
                    title={link.label}
                    button={link.button}
                    contact={contact}
                    socialMedia={socialMedia}
                  />
                )}
              </Box>
            )
          })}
        </Stack>
      </GridItem>
      <GridItem colSpan={2} pt={'3.4em'}>
        <Flex
          gap={specialButtonOne && specialButtonTwo ? 3 : 1}
          height={'full'}
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
                  parentHover ? 'black' : onLightNavbar ? 'black' : 'white'
                }
                rectFill={
                  parentHover ? 'white' : onLightNavbar ? 'white' : 'black'
                }
                width={'21.6px'}
                height={'20.78px'}
              />
            </ButtonIcon>
          )}
          {specialButtonOne &&
            specialButtonTwo &&
            specialButtonOne.showButton &&
            specialButtonTwo.showButton && (
              <Divider
                orientation="vertical"
                borderColor={
                  parentHover ? '#000000' : onLightNavbar ? '#000000' : 'white'
                }
                height={'28px'}
                mt={'8px'}
              />
            )}
          {specialButtonTwo && specialButtonTwo.showButton && (
            <ButtonIcon
              aria-label="button-client-login"
              as={'a'}
              href={
                specialButtonTwo.useInternal
                  ? `/${specialButtonTwo.internalHref}`
                  : specialButtonTwo.externalHref
              }
            >
              <Flex alignItems={'center'}>
                <Person
                  pathFill={
                    parentHover ? 'black' : onLightNavbar ? 'black' : 'white'
                  }
                  width={'21.6px'}
                  height={'20.78px'}
                  mr={2}
                  ml={1}
                />
                {specialButtonTwo.label && (
                  <Text
                    fontWeight={400}
                    fontSize={'14px'}
                    color={
                      parentHover ? 'black' : onLightNavbar ? 'black' : 'white'
                    }
                  >
                    {specialButtonTwo.label}
                  </Text>
                )}
              </Flex>
            </ButtonIcon>
          )}
        </Flex>
      </GridItem>
      <GridItem pt={'3.3em'}>
        <Button
          variant={
            parentHover
              ? ButtonVariants.black
              : onLightNavbar
              ? ButtonVariants.black
              : ButtonVariants.white
          }
          onClick={openDrawer}
        >
          Enquire
        </Button>
      </GridItem>
    </Grid>
  )
}

export default DesktopNav
