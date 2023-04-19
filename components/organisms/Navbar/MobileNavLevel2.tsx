import { Box, Flex, Stack } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import Heading1 from 'components/base/Heading1'
import { NavLinksInterfaces } from '.'
import Link from 'next/link'
import Text from 'components/base/Text'

export interface Props {
  NAV_ITEMS: Array<NavLinksInterfaces>
  title: string
  button: any
  handleBack: () => void
}

const MobileNavLevel2: React.FC<Props> = ({
  NAV_ITEMS,
  title,
  button,
  handleBack,
}) => {
  return (
    <Box>
      <Text
        textAlign={'right'}
        textDecor={'underline'}
        mb={'10px'}
        cursor={'pointer'}
        onClick={handleBack}
      >
        Back to Main Menu
      </Text>
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
        {button && button.label && (
          <Box>
            <Link
              href={
                button.useInternal
                  ? button.internalHref
                    ? `/${button?.internalHref}`
                    : '#'
                  : button.externalHref
                  ? button.externalHref
                  : '#'
              }
              target={button?.isExternal ? '_blank' : ''}
            >
              <Button mt={'50px'} variant={ButtonVariants.black}>
                {button?.label}
              </Button>
            </Link>
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default MobileNavLevel2
