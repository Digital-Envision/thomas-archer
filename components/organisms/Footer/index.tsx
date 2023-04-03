import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import ButtonIcon from 'components/base/ButtonIcon'
import Logo, { LogoVariants } from 'components/base/Logo'
import Text from 'components/base/Text'
import Facebook from 'components/icon/Facebook'
import Instagram from 'components/icon/Instagram'
import Link from 'next/link'
import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Footer = () => {
  return (
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
              <Text fontSize={'12px'}>11 Corporate Dr,</Text>
              <Text fontSize={'12px'}>Heatherton VIC 3202</Text>
            </GridItem>
            <GridItem>
              <Link href={'tel:0399995967'}>
                <Text>
                  <Text as={'span'} fontSize={'12px'} fontWeight={700} mr={2}>
                    p.
                  </Text>
                  03 9999 5967
                </Text>
              </Link>
              <Link href={'mailto:info@thomasarcher.com.au'}>
                <Text>
                  <Text as={'span'} fontSize={'12px'} fontWeight={700} mr={2}>
                    e.
                  </Text>
                  info@thomasarcher.com.au
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
            <Button variant={ButtonVariants.blackLine}>Enquire</Button>
            <ButtonIcon aria-label="instagram">
              <Instagram />
            </ButtonIcon>
            <ButtonIcon aria-label="facebook">
              <Facebook />
            </ButtonIcon>
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
          <DesktopNav NAV_ITEMS={NAV_ITEMS} />
          <MobileNav NAV_ITEMS={NAV_ITEMS} />
        </GridItem>
      </Grid>
      <Box
        mt={{
          base: '39px',
          md: '26px',
        }}
      >
        <Text
          color={'#898989'}
          fontWeight={300}
          fontSize={'10px'}
          lineHeight={'20px'}
        >
          ©2022 Thomas Archer | <Link href={'#'}>Privacy Policy</Link> |{' '}
          <Link href={'#'}>Site Directory</Link>
        </Text>
      </Box>
    </Box>
  )
}

const NAV_ITEMS = [
  {
    label: 'Gallery',
    href: '',
    externalLink: false,
    children: [
      {
        label: 'Inspiration Moodboards',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Portofolio',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Upcoming Projects',
        href: '#',
        externalLink: false,
      },
    ],
  },
  {
    label: 'Custom Build',
    href: '#',
    externalLink: false,
  },
  {
    label: 'Home Designs',
    href: '#',
    externalLink: false,
    children: [
      {
        label: 'Evolve',
        href: '#',
        externalLink: true,
      },
      {
        label: 'Expressions Series',
        href: '#',
        externalLink: false,
      },
      {
        label: 'View Range',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Inclusions',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Facades',
        href: '#',
        externalLink: false,
      },
    ],
  },
  {
    label: 'Display Home',
    href: '#',
    externalLink: false,
  },
  {
    label: 'About',
    href: '#',
    externalLink: false,
    children: [
      {
        label: 'Why Thomas Archer',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Find Your Home',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Accolades',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Testimonials',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Where We Build',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Style Studio',
        href: '#',
        externalLink: false,
      },
      {
        label: 'Interior Styling',
        href: '#',
        externalLink: false,
      },
    ],
  },
]

export default Footer
