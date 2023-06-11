import {
  Box,
  Flex,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import Text from 'components/base/Text'
import { urlForImage } from 'lib/sanity.image'
import React, { useEffect, useState } from 'react'

const Desktop = ({ listSketches }) => {
  return (
    <>
      {listSketches?.map((sketch) => (
        <Flex flexDir={'column'} height={'1065px'} width={'468px'}>
          <Text
            textAlign={'center'}
            fontWeight={400}
            fontFamily={'iskry'}
            fontSize={'14px'}
          >
            {`${sketch.name}`.toUpperCase()}
          </Text>
          <Flex height={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Img
                src={urlForImage(sketch?.listImages?.desktopImage?.image).url()}
                alt={sketch?.listImages?.desktopImage?.alt}
              ></Img>
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  )
}

const Mobile = ({ listSketches }) => {
  const [choose, setChoose] = useState(0)

  return (
    <Tabs isFitted onChange={(index) => setChoose(index)}>
      <TabList>
        {listSketches?.map((sketch) => (
          <Tab
            _selected={{
              color: 'black',
              fontWeight: 500,
              borderBottomColor: 'black',
            }}
            color={'#D9D9D9'}
            fontWeight={500}
          >
            {sketch.name}
          </Tab>
        ))}
      </TabList>

      <Flex alignItems={'center'} justifyContent={'center'}>
        <Box>
          {listSketches[choose]?.listImages?.mobileImage?.image && (
            <Img
              src={urlForImage(
                listSketches[choose]?.listImages?.mobileImage?.image
              ).url()}
              alt={'image'}
            ></Img>
          )}
        </Box>
      </Flex>
    </Tabs>
  )
}

const SectionFeaturedImage = ({ listSketches }) => {
  return (
    <Flex
      height={'1065px'}
      alignItems={'center'}
      justifyContent={'center'}
      display={'block'}
    >
      <Flex
        display={{ base: 'none', md: 'flex' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Desktop listSketches={listSketches} />
      </Flex>
      <Box display={{ base: 'block', md: 'none' }}>
        <Mobile listSketches={listSketches} />
      </Box>
    </Flex>
  )
}

export default SectionFeaturedImage
