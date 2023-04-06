import { Box } from '@chakra-ui/react'
import Text from 'components/base/Text'
import React from 'react'

const SectionImageHeadingCTA = () => {
  return (
    <Box
      height={'100vh'}
      backgroundImage={"url('/images/image-banner-big.png')"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display={'flex'}
      textAlign={'center'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box width={'498px'}>
        <Text
          zIndex={1}
          my={'auto'}
          fontFamily={'heading'}
          fontSize={'28px'}
          color={'#FFFFFF'}
          mb={'32px'}
        >
          Visit Our Display Home
        </Text>
        <Text color={'#FFFFFF'}>
          Our beautiful display home in East Bentleigh is a beautiful reflection
          of how visions can be transformed when you start with one of our
          Evolve Series designs. Book your personal tour today to find out more.
        </Text>
      </Box>
    </Box>
  )
}

export default SectionImageHeadingCTA
