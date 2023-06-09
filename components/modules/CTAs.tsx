import { Flex } from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import Link from 'components/base/Link'
import React from 'react'

const CTAs = ({ listButtons, marginTop, marginBottom }) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      gap={5}
      mt={marginTop}
      mb={marginBottom}
      flexDir={{
        base: 'column',
        md: 'row',
      }}
    >
      {listButtons?.map((button, key) => {
        return (
          <Link link={button} key={key}>
            <Button variant={Variants.blackLine} fontSize={'14px'}>
              {button?.label}
            </Button>
          </Link>
        )
      })}
    </Flex>
  )
}

export default CTAs
