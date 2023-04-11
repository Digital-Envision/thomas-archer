import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import { LinksInterface } from '.'

export interface Props {
  links: Array<LinksInterface>
  title: string
}

const DesktopSubNav: React.FC<Props> = ({ links, title }) => {
  return (
    <Box
      bg={'rgba(255,255,255,0.9)'}
      position={'absolute'}
      left={0}
      top={112}
      width={'full'}
      pl={'70.48px'}
      pr={'80px'}
      pt={'33px'}
      pb={'50px'}
      transition={'all .3s'}
      visibility={'hidden'}
      opacity={0}
      sx={{
        '.nav:hover &': {
          visibility: 'visible',
          opacity: 1,
          zIndex: 99,
        },
      }}
    >
      <Grid templateColumns={'repeat(11, 1fr)'} mb={'76px'}>
        <GridItem colSpan={4}>
          <Heading1 fontSize={'34px'}>{title}</Heading1>
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={2} spacingX={10} spacingY={1}>
            {links?.map((link, key) => {
              return (
                <DropdownItem
                  key={key}
                  href={link.href}
                  isExternal={link.externalLink}
                  width={'auto'}
                  paddingX={0}
                  _hover={{}}
                >
                  {link.label}
                </DropdownItem>
              )
            })}
          </SimpleGrid>
        </GridItem>
      </Grid>
      <Grid templateColumns={'repeat(11, 1fr)'}>
        <GridItem colSpan={4}>
          <Button variant={ButtonVariants.black}>
            Book on Exploration Session
          </Button>
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={2} spacingX={10}>
            <Flex alignItems={'center'}>
              <Box>
                <Link textDecor={'underline'}>
                  <Text>Connect with us</Text>
                </Link>
              </Box>
              <Box width={'71px'} borderColor={'black'} mx={2}>
                <Divider />
              </Box>
              <Flex>
                <Link textDecor={'underline'}>
                  <Text>Instagram</Text>
                </Link>
                <Divider
                  mx={1}
                  orientation="vertical"
                  borderColor={'#000000'}
                  height={'14px'}
                  //mt={1}
                />
                <Link textDecor={'underline'}>
                  <Text>Facebook</Text>
                </Link>
              </Flex>
            </Flex>
            <Link href={'mailto:info@thomasarcher.com.au'}>
              <Text>info@thomasarcher.com.au</Text>
            </Link>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default DesktopSubNav
