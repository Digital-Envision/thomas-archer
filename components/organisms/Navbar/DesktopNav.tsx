import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Link,
  Stack,
} from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import ButtonIcon, {
  Variants as ButtonIconVariants,
} from 'components/base/ButtonIcon'
import Person from 'components/icon/Person'
import Telephone from 'components/icon/Telephone'
import React from 'react'
import DesktopSubNav from './DesktopSubNav'
import { NavLinksInterfaces } from '.'

export interface Props {
  openDrawer?: () => void
  onLightNavbar?: boolean
  parentHover?: boolean
  NAV_ITEMS: Array<NavLinksInterfaces>
  TELEPHONE: string
}

const DesktopNav: React.FC<Props> = ({
  openDrawer,
  onLightNavbar,
  parentHover,
  NAV_ITEMS,
  TELEPHONE,
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
          pt={'3.8em'}
        >
          {NAV_ITEMS.map((link, key) => {
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
                  fontSize={'14px'}
                  fontWeight={400}
                  lineHeight={'16.8px'}
                  height={'full'}
                  _hover={{
                    textDecor: 'none',
                  }}
                  href={link.href ? link.href : '#'}
                  isExternal={link.externalLink}
                >
                  <Text
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
                  <DesktopSubNav links={link.children} title={link.label} />
                )}
              </Box>
            )
          })}
        </Stack>
      </GridItem>
      <GridItem colSpan={2} pt={'3.4em'}>
        <Flex gap={3} height={'full'}>
          <ButtonIcon
            aria-label="button-telephone"
            variant={ButtonIconVariants.default}
            as={'a'}
            href={`tel:${TELEPHONE}`}
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
          <Divider
            orientation="vertical"
            borderColor={'#000000'}
            height={'28px'}
            mt={'8px'}
          />
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
              <Text
                fontWeight={400}
                fontSize={'14px'}
                color={
                  parentHover ? 'black' : onLightNavbar ? 'black' : 'white'
                }
              >
                Client Login
              </Text>
            </Flex>
          </ButtonIcon>
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
