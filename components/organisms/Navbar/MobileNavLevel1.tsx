import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import Person from 'components/icon/Person'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import { LinksInterface, NavLinksInterfaces } from '.'

export interface Props {
  openDrawer?: () => void
  NAV_ITEMS: Array<NavLinksInterfaces>
  setSubLinks: (links: Array<LinksInterface>, title: string) => void
}

const MobileNavLevel1: React.FC<Props> = ({
  openDrawer,
  NAV_ITEMS,
  setSubLinks,
}) => {
  return (
    <Box>
      <Stack direction={'column'} spacing={0} width={'full'}>
        {NAV_ITEMS.map((link, key) => {
          return (
            <>
              <DropdownItem
                key={key}
                href={link.children ? '#' : link.href}
                isExternal={link.children ? false : link.externalLink}
                as={link.children ? 'button' : 'a'}
                onClick={() =>
                  link.children ? setSubLinks(link.children, link.label) : {}
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
            </>
          )
        })}
        <Link
          _hover={{
            textDecor: 'none',
          }}
        >
          <Flex alignItems={'center'} py={5}>
            <Person pathFill={'black'} width={'17px'} height={'20px'} mr={2} />
            <Text
              fontWeight={300}
              color={'black'}
              fontSize={'1.3em'}
              lineHeight={'1.57em'}
            >
              Client Login
            </Text>
          </Flex>
        </Link>
        <Box>
          <Button
            mt={'28px'}
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
