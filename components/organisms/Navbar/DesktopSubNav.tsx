import _ from 'lodash'
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'
import React from 'react'
import DropdownItem from 'components/modules/DropdownItem'
import Link, { LinksInterface } from 'components/base/Link'
import NextLink from 'next/link'
import { SanityFiles } from 'utils/interfaces'

export interface Props {
  links: Array<LinksInterface>
  title: string
  button: any
  contact: {
    phone: {
      code: string
      number: string
    }
    email: string
    address: {
      streetName: string
      suburb: string
      postalCode: string
    }
  }
  socialMedia: {
    connectWithUs: LinksInterface
    socialMedia: Array<
      {
        icon: SanityFiles
      } & LinksInterface
    >
  }
}

const DesktopSubNav: React.FC<Props> = ({
  links,
  title,
  button,
  contact,
  socialMedia,
}) => {
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
                !link.mobileOnly && (
                  <DropdownItem
                    key={key}
                    link={link}
                    width={'auto'}
                    paddingX={0}
                    _hover={{}}
                  >
                    {link.label}
                  </DropdownItem>
                )
              )
            })}
          </SimpleGrid>
        </GridItem>
      </Grid>
      <Grid templateColumns={'repeat(11, 1fr)'}>
        <GridItem colSpan={4}>
          {button && button?.label && (
            <Link link={button}>
              <Button variant={ButtonVariants.black}>{button?.label}</Button>
            </Link>
          )}
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={2} spacingX={10}>
            <Flex alignItems={'center'}>
              {socialMedia?.connectWithUs && (
                <Box>
                  <Link link={socialMedia?.connectWithUs}>
                    <Text textDecor={'underline'}>Connect with us</Text>
                  </Link>
                </Box>
              )}
              {socialMedia?.socialMedia?.length > 0 && (
                <Box width={'71px'} borderColor={'black'} mx={2}>
                  <Divider />
                </Box>
              )}
              <Flex>
                {socialMedia?.socialMedia?.map((sc, key) => {
                  return (
                    <>
                      {key !== 0 && (
                        <Divider
                          mx={1}
                          orientation="vertical"
                          borderColor={'#000000'}
                          height={'14px'}
                        />
                      )}
                      <Link link={sc}>
                        <Text textDecor={'underline'}>{sc.label}</Text>
                      </Link>
                    </>
                  )
                })}
              </Flex>
            </Flex>
            <NextLink href={`mailto:${contact?.email}`}>
              <Text>{contact?.email}</Text>
            </NextLink>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default DesktopSubNav
