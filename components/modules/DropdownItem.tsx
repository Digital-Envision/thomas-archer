import React from 'react'
import {
  Link,
  LinkProps as ChakraLinkProps,
  Icon,
  Flex,
  TextProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HiArrowSmallRight } from 'react-icons/hi2'
import Text, { ParagraphProps, textBaseProps } from 'components/base/Text'

interface LinkProps extends ChakraLinkProps {
  children: ReactNode
  href: string
  isExternal?: boolean
  width?: string
  textProps?: ParagraphProps
}

const dropdownTextStyle: TextProps = {
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: '29px',
}

/**
 * usage: 
 * 
 * <DropdownItem href="https://www.google.com" isExternal>
    Why Thomas Archer
  </DropdownItem>
 */

const DropdownItem = ({
  children,
  href,
  isExternal,
  width = '400px',
  textProps, // override text style props
  ...props
}: LinkProps) => {
  return (
    <Link
      href={href}
      isExternal={isExternal}
      paddingX={2}
      paddingY={2}
      borderBottom="1px"
      borderColor="#898989"
      _hover={{
        textDecoration: 'none',
        bg: '#FFFFFF',
        border: 0,
      }}
    >
      <Flex align="center" justifyContent="space-between" width={width}>
        <Text {...dropdownTextStyle} {...textProps}>
          {children}
        </Text>
        <Icon as={HiArrowSmallRight} color={'#898989'} fontSize={'18px'} />
      </Flex>
    </Link>
  )
}

export default DropdownItem
