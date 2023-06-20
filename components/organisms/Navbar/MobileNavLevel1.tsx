import { Box, Flex, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import Person from 'components/icon/Person'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import { NavLinksInterfaces } from '.'
import Link, { LinksInterface } from 'components/base/Link'

export interface Props {
  openDrawer?: () => void
  handleOpenDropdown: () => void
  NAV_ITEMS: Array<NavLinksInterfaces>
  setSubLinks: (
    links: Array<LinksInterface>,
    title: string,
    button: Omit<LinksInterface, 'mobileOnly'>
  ) => void
  specialButtonTwo: {
    showButton: boolean
  } & LinksInterface
}

const MobileNavLevel1: React.FC<Props> = ({
  openDrawer,
  handleOpenDropdown,
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
              link={
                link.children
                  ? {
                      ...link,
                      useInternal: false,
                      externalHref: '#',
                    }
                  : link
              }
              onClick={() =>
                link.children
                  ? setSubLinks(link.children, link.label, link.button)
                  : handleOpenDropdown()
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
          <Link link={specialButtonTwo}>
            <Flex
              alignItems={'center'}
              py={2}
              _hover={{
                textDecor: 'none',
              }}
            >
              <Person
                pathFill={'black'}
                width={'17px'}
                height={'20px'}
                mr={3}
              />
              {specialButtonTwo.label && (
                <Text
                  fontWeight={300}
                  color={'black'}
                  fontSize={'1.3em'}
                  lineHeight={'1.57em'}
                  mt={2}
                >
                  {specialButtonTwo.label}
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
