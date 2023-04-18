import { Box, Flex, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import Person from 'components/icon/Person'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import { LinksInterface, NavLinksInterfaces } from '.'
import Link from 'next/link'

export interface Props {
  openDrawer?: () => void
  NAV_ITEMS: Array<NavLinksInterfaces>
  setSubLinks: (
    links: Array<LinksInterface>,
    title: string,
    button: Omit<LinksInterface, 'mobileOnly'>
  ) => void
  specialButtonTwo: {
    label: string
    useInternal: boolean
    externalHref: string
    internalHref: string
    isExternal: boolean
    showButton: boolean
  }
}

const MobileNavLevel1: React.FC<Props> = ({
  openDrawer,
  NAV_ITEMS,
  setSubLinks,
  specialButtonTwo,
}) => {
  return (
    <Box>
      <Stack direction={'column'} spacing={0} width={'full'}>
        {NAV_ITEMS?.map((link, key) => {
          return (
            <DropdownItem
              key={key}
              href={
                link.children
                  ? '#'
                  : link.useInternal
                  ? `/${link.internalHref}`
                  : link.externalHref
              }
              isExternal={link.children ? false : link.isExternal}
              onClick={() =>
                link.children
                  ? setSubLinks(link.children, link.label, link.button)
                  : {}
              }
              width={'auto'}
              paddingX={0}
              paddingY={5}
              _hover={{}}
              textProps={{
                fontSize: '1.3em',
                lineHeight: '1.57em',
              }}
            >
              {link.label}
            </DropdownItem>
          )
        })}
        {specialButtonTwo && specialButtonTwo.showButton && (
          <Link
            href={
              specialButtonTwo.useInternal
                ? `/${specialButtonTwo.internalHref}`
                : specialButtonTwo.externalHref
            }
          >
            <Flex
              alignItems={'center'}
              py={5}
              _hover={{
                textDecor: 'none',
              }}
            >
              <Person
                pathFill={'black'}
                width={'17px'}
                height={'20px'}
                mr={2}
              />
              {specialButtonTwo.label && (
                <Text
                  fontWeight={300}
                  color={'black'}
                  fontSize={'1.3em'}
                  lineHeight={'1.57em'}
                >
                  Client Login
                </Text>
              )}
            </Flex>
          </Link>
        )}
        <Box>
          <Button
            mt={'28px'}
            mb={'28px'}
            variant={ButtonVariants.black}
            onClick={openDrawer}
          >
            Enquire
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default MobileNavLevel1
