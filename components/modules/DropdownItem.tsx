import React from 'react'
import {
  FlexProps,
  Icon,
  Flex,
  TextProps,
  Box,
  BoxProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { HiArrowSmallRight } from 'react-icons/hi2'
import Text from 'components/base/Text'
import Link, { LinksInterface } from 'components/base/Link'

interface LinkProps extends FlexProps {
  children: ReactNode
  link: LinksInterface
  width?: string
  textProps?: TextProps
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
  link,
  width = '400px',
  textProps, // override text style props
  ...props
}: LinkProps) => {
  return (
    <Link link={link}>
      <Box
        paddingY={2}
        borderBottom="1px"
        borderColor="#898989"
        _hover={{
          textDecoration: 'none',
          bg: '#FFFFFF',
          border: 0,
        }}
        role={'group'}
        {...props}
      >
        <Flex align="center" width={width}>
          <Text {...dropdownTextStyle} {...textProps}>
            {children}
          </Text>
          <Box
            _groupHover={{ marginRight: '0px' }}
            ml={'auto'}
            mr={'4px'}
            transition={'ease .1s'}
          >
            <Icon as={HiArrowSmallRight} color={'#898989'} fontSize={'18px'} />
          </Box>
        </Flex>
      </Box>
    </Link>
  )
}

export default DropdownItem
