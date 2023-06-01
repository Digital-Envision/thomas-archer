import { Box, Collapse, Flex } from '@chakra-ui/react'
import Text from 'components/base/Text'
import Dropdown from 'components/icon/Dropdown'
import Link from 'components/base/Link'
import React, { useState } from 'react'
import { NavLinksInterfaces } from '../Navbar'

export interface Props {
  NAV_ITEMS: Array<NavLinksInterfaces>
}

const MobileNav: React.FC<Props> = ({ NAV_ITEMS }) => {
  const [dropdown, setDropdown] = useState(-1)

  const onDropdown = (key: number) => {
    if (dropdown === key) setDropdown(-1)
    else setDropdown(key)
  }

  return (
    <Box
      display={{
        base: 'block',
        md: 'none',
      }}
    >
      {NAV_ITEMS?.map((link, key) => {
        return (
          <Box mb={8} key={key}>
            <Flex alignItems={'center'} onClick={() => onDropdown(key)}>
              {link.children ? (
                <>
                  <Text
                    fontWeight={700}
                    _hover={{
                      textDecor: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </Text>
                  {link.children && (
                    <Dropdown
                      width={6}
                      height={6}
                      pt={'9px'}
                      transform={
                        dropdown === key ? 'rotate(-180deg)' : 'rotate(0)'
                      }
                      transition={'all .2s'}
                    />
                  )}
                </>
              ) : (
                <Link link={link}>
                  <Text fontWeight={700}>{link.label}</Text>
                </Link>
              )}
            </Flex>
            {link.children && (
              <Collapse in={dropdown === key}>
                {link?.children?.map((childLink, childKey) => {
                  return (
                    <Link link={childLink} key={childKey}>
                      <Text fontSize={'12px'} mt={'20px'} ml={5}>
                        {childLink.label}
                      </Text>
                    </Link>
                  )
                })}
              </Collapse>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default MobileNav
