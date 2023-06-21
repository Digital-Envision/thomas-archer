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
import React, { useState } from 'react'
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
  const [onClickLink, setOnClickLink] = useState(false)

  const handleOnClickLink = () => {
    setOnClickLink(true)

    setTimeout(() => {
      setOnClickLink(false)
    }, 600)
  }

  const handleRearrangedGrid = (subNav) => {
    if (_.isArray(subNav)) {
      const array = subNav.filter((link) => {
        if (link?.mobileOnly) {
          return link?.mobileOnly === false
        }

        return link
      })

      const rightItems = array.slice(0, Math.round(array.length / 2))
      const leftItems = array.slice(Math.round(array.length / 2))

      let right = 0
      let left = 0

      const gridItems = [...Array(array.length)].map((e, i) => {
        if (i % 2 === 0) {
          const rightItem = rightItems[right]
          right += 1
          return rightItem
        }

        const leftItem = leftItems[left]
        left += 1
        return leftItem
      })

      return gridItems
    }
  }

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
          visibility: !onClickLink && 'visible',
          opacity: !onClickLink && 1,
          zIndex: !onClickLink && 99,
        },
      }}
    >
      <Grid templateColumns={'repeat(11, 1fr)'} mb={'76px'}>
        <GridItem colSpan={4}>
          <Heading1 fontSize={'34px'}>{title}</Heading1>
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={2} spacingX={10} spacingY={1}>
            {handleRearrangedGrid(links).map((link, key) => {
              return (
                !link.mobileOnly && (
                  <DropdownItem
                    key={key}
                    link={link}
                    width={'auto'}
                    paddingX={0}
                    _hover={{}}
                    onClick={handleOnClickLink}
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
              <Button
                variant={ButtonVariants.black}
                onClick={handleOnClickLink}
              >
                {button?.label}
              </Button>
            </Link>
          )}
        </GridItem>
        <GridItem colSpan={7}>
          <SimpleGrid columns={2} spacingX={10}>
            <Flex alignItems={'center'}>
              {socialMedia?.socialMedia?.length > 0 && (
                <Box>
                  <Text>Connect with us</Text>
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
                        <Text
                          textDecor={'underline'}
                          onClick={handleOnClickLink}
                        >
                          {sc.label}
                        </Text>
                      </Link>
                    </>
                  )
                })}
              </Flex>
            </Flex>
            <NextLink href={`mailto:${contact?.email}`}>
              <Text onClick={handleOnClickLink}>{contact?.email}</Text>
            </NextLink>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default DesktopSubNav
