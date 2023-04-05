import { Flex, Box } from '@chakra-ui/react'
import SectionHeroImageDefault from 'components/modules/SectionHeroImageDefault'
import Navbar from 'components/organisms/Navbar'
import React from 'react'
import Footer from '../components/organisms/Footer'

/**
 *
 *
 * Try components here.
 * and don't push any update from here.
 *
 *
 * ex:
 * <Flex
      alignItems={'center'}
      justifyContent={'center'}
      bg={'red.700'}
      h="100vh"
    >
    <Button>try button</Button>
    </Flex>
 *
 *
 */

const Component = () => {
  return (
    <Box
      //alignItems={'center'}
      //justifyContent={'center'}
      bg={'blue.700'}
      h="200vh"
      display={'flex'}
      flexDir={'column'}
    >
      <Navbar />
      <Box flex={1}>
        <SectionHeroImageDefault />
      </Box>
      <Footer />
    </Box>
  )
}

export default Component
