import _ from 'lodash'
import { Box, Divider, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import Person from 'components/icon/Person'
import Telephone from 'components/icon/Telephone'
import React, { useEffect, useState } from 'react'
import DesktopSubNav from './DesktopSubNav'
import { NavLinksInterfaces } from '.'
import Link, { LinksInterface } from 'components/base/Link'
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
    showButton: boolean
  } & LinksInterface
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
    socialMedia: Array<
      {
        icon: SanityFiles
      } & LinksInterface
    >
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
  const [hasSpecialButton1, setHasSpecialButton1] = useState(false)
  const [hasSpecialButton2, setHasSpecialButton2] = useState(false)

  useEffect(() => {
    setHasSpecialButton1(specialButtonOne && specialButtonOne.showButton)
    setHasSpecialButton2(specialButtonTwo && specialButtonTwo.showButton)
  }, [specialButtonOne, specialButtonTwo])

  return (
    <Grid
      templateColumns={'repeat(9, 1fr)'}
      display={{ base: 'none', xl: 'grid' }}
      height={'full'}
    >
      <GridItem colSpan={hasSpecialButton1 && hasSpecialButton2 ? 6 : 7}>
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
                <Link link={link}>
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
      <GridItem
        colSpan={hasSpecialButton1 && hasSpecialButton2 ? 2 : 1}
        pr={
          hasSpecialButton1 && hasSpecialButton2 ? 0 : hasSpecialButton1 ? 0 : 3
        }
        pt={'3.4em'}
      >
        <Flex
          gap={hasSpecialButton1 && hasSpecialButton2 ? 3 : 1}
          height={'full'}
          justifyContent={
            hasSpecialButton1 && hasSpecialButton2
              ? 'left'
              : hasSpecialButton1
              ? 'center'
              : 'left'
          }
        >
          {hasSpecialButton1 && (
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
          {hasSpecialButton1 && hasSpecialButton2 && (
            <Divider
              orientation="vertical"
              borderColor={
                parentHover ? '#000000' : onLightNavbar ? '#000000' : 'white'
              }
              height={'28px'}
              mt={'8px'}
            />
          )}
          {hasSpecialButton2 && (
            <Link link={specialButtonTwo}>
              <ButtonIcon aria-label="button-client-login">
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
                      mt={1}
                      fontWeight={400}
                      fontSize={'14px'}
                      color={
                        parentHover
                          ? 'black'
                          : onLightNavbar
                          ? 'black'
                          : 'white'
                      }
                    >
                      {specialButtonTwo.label}
                    </Text>
                  )}
                </Flex>
              </ButtonIcon>
            </Link>
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
