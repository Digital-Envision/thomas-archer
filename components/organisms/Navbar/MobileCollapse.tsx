import { Box, Divider, Flex, Grid, GridItem, Link } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React, { useEffect, useState } from 'react'
import { LinksInterface, NavLinksInterfaces } from '.'
import MobileNavLevel1 from './MobileNavLevel1'
import MobileNavLevel2 from './MobileNavLevel2'

export interface Props {
  openDrawer?: () => void
  NAV_ITEMS: Array<NavLinksInterfaces>
  onOpenLevel2: boolean
  setOnOpenLevel2: (status: boolean) => void
}

const MobileCollapse: React.FC<Props> = ({
  openDrawer,
  NAV_ITEMS,
  onOpenLevel2,
  setOnOpenLevel2,
}) => {
  const [boxHeight, setBoxHeight] = useState('calc(100vh - 110px)')
  const [subLinks, setSubLinks] = useState([])
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    function calculateHeight() {
      const windowHeight = window.innerHeight
      setBoxHeight(`calc(${windowHeight}px - 110px)`)
    }

    calculateHeight()

    window.addEventListener('resize', calculateHeight)
    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  const handleOpenLevel2 = (links: Array<LinksInterface>, title: string) => {
    setSubLinks(links)
    setSubTitle(title)
    setOnOpenLevel2(true)
  }

  return (
    <Box
      bg={'rgba(255,255,255,0.9)'}
      width={'full'}
      px={{
        base: '1.75em',
        md: '4.3em',
      }}
      pt={'33px'}
      pb={'50px'}
      transition={'all .3s'}
      opacity={1}
      zIndex={99}
      display={{
        base: 'flex',
        xl: 'none',
      }}
      height={boxHeight}
      flexDir={'column'}
      overflowY={'auto'}
      overflowX={'hidden'}
    >
      <Flex
        width={'220%'}
        position={'relative'}
        right={onOpenLevel2 ? '120%' : '0'}
        transition={'ease-in-out .5s'}
      >
        <Grid templateColumns={'repeat(2, 1fr)'} width={'full'} gap={'10%'}>
          <GridItem>
            <MobileNavLevel1
              openDrawer={openDrawer}
              NAV_ITEMS={NAV_ITEMS}
              setSubLinks={handleOpenLevel2}
            />
          </GridItem>
          <GridItem>
            <MobileNavLevel2 NAV_ITEMS={subLinks} title={subTitle} />
          </GridItem>
        </Grid>
      </Flex>

      <Box mt={'auto'}>
        <Flex alignItems={'center'}>
          <Box>
            <Text width={'100px'}>Connect with us</Text>
          </Box>
          <Box borderColor={'black'} width={'full'} mr={5}>
            <Divider orientation="horizontal" borderColor={'black'} />
          </Box>
          <Flex>
            <Link>
              <Text>Instagram</Text>
            </Link>
            <Divider
              mx={1}
              orientation="vertical"
              borderColor={'#000000'}
              height={'14px'}
            />
            <Link>
              <Text>Facebook</Text>
            </Link>
          </Flex>
        </Flex>
        <Text textDecor={'underline'} mt={2}>
          info@thomasarcher.com.au
        </Text>
      </Box>
    </Box>
  )
}

export default MobileCollapse
