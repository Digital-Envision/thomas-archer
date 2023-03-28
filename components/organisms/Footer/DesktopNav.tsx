import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React from 'react'
import {NavLinksInterfaces} from '../Navbar'

export interface Props {
  NAV_ITEMS: Array<NavLinksInterfaces>
}

const DesktopNav: React.FC<Props> = ({ NAV_ITEMS }) => {
  return (
    <SimpleGrid
      columns={NAV_ITEMS.length}
      display={{
        base: 'none',
        md: 'grid',
      }}
    >
      {NAV_ITEMS.map((nav, key) => {
        return (
          <Box key={key}>
            <Text fontWeight={700} fontSize={'12px'} lineHeight={'14px'} mb={3}>
              {nav.label}
            </Text>
            {nav.children && (
              <Flex flexDir={'column'} rowGap={3}>
                {nav.children.map((childLink, childKey) => {
                  return (
                    <Text key={childKey} fontSize={'12px'} lineHeight={'14px'}>
                      {childLink.label}
                    </Text>
                  )
                })}
              </Flex>
            )}
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default DesktopNav
