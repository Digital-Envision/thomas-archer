import _ from 'lodash'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import ButtonIcon from 'components/base/ButtonIcon'
import Logo, { LogoVariants } from 'components/base/Logo'
import Text from 'components/base/Text'
import Link from 'next/link'
import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import EnquireFlyout from '../EnquireFlyout'
import { urlForImage } from 'lib/sanity.image'
import { ReactSVG } from 'react-svg'
import { NavLinksInterfaces } from '../Navbar'

const Footer = ({ links, enquire, contact, socialMedia, footer }) => {
  const Links = links || []

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <EnquireFlyout
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title={enquire?.title}
        description={enquire?.description}
        button={enquire?.button}
        privacyAndPolicy={enquire?.privacyAndPolicy}
        contact={contact}
      />
      <Box
        as={'footer'}
        bg={'#FFFFFF'}
        pt={'51.88px'}
        pb={'34px'}
        px={{
          base: '27.58px',
          md: '75.41px',
        }}
      >
        <Grid
          templateColumns={'repeat(9, 1fr)'}
          display={{
            base: 'block',
            md: 'grid',
          }}
        >
          <GridItem
            colSpan={{
              base: 9,
              md: 3,
            }}
            mb={{
              base: 20,
              md: 0,
            }}
          >
            <Grid templateRows={'repeat(3, 1fr)'} gap={5}>
              <GridItem>
                <Box>
                  <Logo variant={LogoVariants.black} />
                </Box>
              </GridItem>
              <GridItem>
                <Text fontSize={'12px'}>{contact?.address?.streetName}</Text>
                <Text fontSize={'12px'}>
                  {contact?.address?.suburb} {contact?.address?.postalCode}
                </Text>
              </GridItem>
              <GridItem>
                <Link
                  href={`tel:${contact?.phone?.code}${contact?.phone?.number}`}
                >
                  <Text>
                    <Text as={'span'} fontSize={'12px'} fontWeight={700} mr={2}>
                      p.
                    </Text>
                    {contact?.phone?.code} {contact?.phone?.number}
                  </Text>
                </Link>
                <Link href={`mailto:${contact?.email}`}>
                  <Text>
                    <Text as={'span'} fontSize={'12px'} fontWeight={700} mr={2}>
                      e.
                    </Text>
                    {contact?.email}
                  </Text>
                </Link>
              </GridItem>
            </Grid>
            <Flex
              mt={{
                base: '5',
                md: '16',
              }}
            >
              <Button
                variant={ButtonVariants.blackLine}
                onClick={() => setOpenDrawer(true)}
                mr={'12px'}
              >
                Enquire
              </Button>
              {socialMedia?.socialMedia?.map((sc, key) => {
                return (
                  <Link
                    href={
                      sc?.useInternal
                        ? `/${sc?.internalHref}`
                        : sc?.externalHref
                    }
                    target={sc?.isExternal ? '_blank' : ''}
                    key={key}
                  >
                    <ButtonIcon aria-label={sc?.label}>
                      <ReactSVG
                        src={urlForImage(sc?.icon).url()}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            'style',
                            'width: 18px; height: 18px;'
                          )
                        }}
                      />
                    </ButtonIcon>
                  </Link>
                )
              })}
            </Flex>
          </GridItem>
          <GridItem
            colSpan={{
              base: 0,
              md: 6,
            }}
            display={{
              base: 'block',
              md: 'grid',
            }}
          >
            <DesktopNav NAV_ITEMS={Links} />
            <MobileNav NAV_ITEMS={Links} />
          </GridItem>
        </Grid>
        <Box
          mt={{
            base: '39px',
            md: '26px',
          }}
          display={'flex'}
        >
          {footer?.copyright && (
            <Text
              color={'#898989'}
              fontWeight={300}
              fontSize={'10px'}
              lineHeight={'20px'}
            >
              {footer.copyright}
            </Text>
          )}
          {footer?.links?.map((link: NavLinksInterfaces, key: number) => {
            return (
              <Text
                color={'#898989'}
                fontWeight={300}
                fontSize={'10px'}
                lineHeight={'20px'}
                key={key}
                ml={1}
              >
                |{' '}
                <Link
                  href={
                    link.useInternal
                      ? `/${link.internalHref}`
                      : link.externalHref
                  }
                >
                  {link.label}
                </Link>
              </Text>
            )
          })}
        </Box>
      </Box>
    </>
  )
}

export default Footer
