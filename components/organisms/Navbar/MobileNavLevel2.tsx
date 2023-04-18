import { Box, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import Heading1 from 'components/base/Heading1'
import { NavLinksInterfaces } from '.'

export interface Props {
  NAV_ITEMS: Array<NavLinksInterfaces>
  title: string
}

const MobileNavLevel2: React.FC<Props> = ({ NAV_ITEMS, title }) => {
  return (
    <Box>
      <Heading1 mb={8}>{title}</Heading1>
      <Stack direction={'column'} spacing={0} width={'full'}>
        {NAV_ITEMS?.map((link, key) => {
          return (
            <>
              <DropdownItem
                key={key}
                href={
                  link.useInternal ? `/${link.internalHref}` : link.externalHref
                }
                isExternal={link.isExternal}
                width={'auto'}
                paddingY={3}
                paddingX={0}
                _hover={{}}
              >
                {link.label}
              </DropdownItem>
            </>
          )
        })}
        <Box>
          <Button mt={'50px'} variant={ButtonVariants.black}>
            Book an Exploration Session
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default MobileNavLevel2
