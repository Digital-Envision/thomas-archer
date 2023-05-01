import React from 'react'
import { Box } from '@chakra-ui/react'
import ScrollBox from 'components/modules/ScrollBox'
import Text from 'components/base/Text'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

const HorizontalImage = ({ image, name, description }) => {
  return (
    <>
      <Box
        mb={'16px'}
        minW={{
          base: '263px',
        }}
        minH={{
          base: '160.55px',
        }}
        width={{
          base: 'calc((100vw - 7rem))',
          sm: 'calc((100vw - 7rem)*.905)',
          md: 'calc((80vw - 3rem))',
          lg: 'calc((80vw - 5.5rem)*.880)',
          xl: 'calc((100vw - 5rem)*.700)',
          '2xl': 'calc((100vh - 3rem)*.900)',
        }}
        height={{
          base: 'calc((100vw - 8rem)*.650)',
          sm: 'calc((100vw - 10rem)*.650)',
          md: 'calc(70vw - 13rem)',
          lg: 'calc((70vw - 6rem)*.800)',
          xl: 'calc((70vw - 1rem)*.720)',
          '2xl': 'calc((100vh - 3rem)*.600)',
        }}
        maxW={{
          '2xl': 'calc((73vw - 5rem))',
        }}
        maxH={{
          '2xl': 'calc((73vw - 7rem)*.730)',
        }}
        _hover={{
          userSelect: 'none',
        }}
      >
        <Box width={'100%'} height={'100%'} position={'relative'} bg={'red'}>
          <Image
            src={image ? image : '#'}
            alt={name ? name : ''}
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
      <Text fontWeight={700} mb={'5px'}>
        {name}
      </Text>
      <Text fontWeight={300}>{description}</Text>
    </>
  )
}

const VerticalImage = ({ image, name, description }) => {
  return (
    <>
      <Box
        mb={'16px'}
        minW={{
          base: '132px',
        }}
        minH={{
          base: '160.55px',
        }}
        width={{
          base: 'calc((50vw - 7rem))',
          sm: 'calc((100vw - 7rem)*.452)',
          md: 'calc((40vw - 3rem))',
          lg: 'calc((80vw - 5.5rem)*.440)',
          xl: 'calc((100vw - 5rem)*.350)',
          '2xl': 'calc((100vh - 3rem)*.450)',
        }}
        height={{
          base: 'calc((100vw - 8rem)*.650)',
          sm: 'calc((100vw - 10rem)*.650)',
          md: 'calc(70vw - 13rem)',
          lg: 'calc((70vw - 6rem)*.800)',
          xl: 'calc((70vw - 1rem)*.720)',
          '2xl': 'calc((100vh - 3rem)*.600)',
        }}
        maxW={{
          '2xl': 'calc((37vw - 5rem))',
        }}
        maxH={{
          '2xl': 'calc((73vw - 7rem)*.730)',
        }}
        _hover={{
          userSelect: 'none',
        }}
      >
        <Box width={'100%'} height={'100%'} position={'relative'} bg={'red'}>
          <Image
            src={image ? image : '#'}
            alt={name ? name : ''}
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
      <Text fontWeight={700} mb={'5px'}>
        {name}
      </Text>
      <Text fontWeight={300}>{description}</Text>
    </>
  )
}

const GalleryScroll = ({ listImages, marginTop, marginBottom }) => {
  return (
    <Box marginTop={marginTop} marginBottom={marginBottom}>
      <ScrollBox>
        {/* spacing */}
        <Box>
          <Box
            transition={'all .6s'}
            height={{
              base: 'calc((100vw - 8rem)*.650)',
              sm: 'calc((100vw - 10rem)*.650)',
              md: 'calc(70vw - 13rem)',
              lg: 'calc((70vw - 6rem)*.800)',
              xl: 'calc((70vw - 1rem)*.720)',
              '2xl': 'calc((100vh - 3rem)*.600)',
            }}
            maxH={{
              '2xl': 'calc((73vw - 7rem)*.730)',
            }}
            _hover={{
              userSelect: 'none',
            }}
          >
            <Box
              width={{
                base: '18px',
                md: '64px',
              }}
              height={'100%'}
              bg={'transparent'}
              display={{ base: 'none', sm: 'block' }}
            ></Box>
          </Box>
        </Box>
        {listImages?.map((image, key) => {
          return (
            <Box key={key}>
              {image?.isVertical ? (
                <VerticalImage
                  image={urlForImage(image?.image)?.url()}
                  name={image?.name}
                  description={image?.description}
                />
              ) : (
                <HorizontalImage
                  image={urlForImage(image?.image)?.url()}
                  name={image?.name}
                  description={image?.description}
                />
              )}
            </Box>
          )
        })}
        {/* spacing */}
        <Box>
          <Box
            transition={'all .6s'}
            height={{
              base: 'calc((100vw - 8rem)*.650)',
              sm: 'calc((100vw - 10rem)*.650)',
              md: 'calc(70vw - 13rem)',
              lg: 'calc((70vw - 6rem)*.800)',
              xl: 'calc((70vw - 1rem)*.720)',
              '2xl': 'calc((100vh - 3rem)*.600)',
            }}
            maxH={{
              '2xl': 'calc((73vw - 7rem)*.730)',
            }}
            _hover={{
              userSelect: 'none',
            }}
          >
            <Box
              width={{
                base: '18px',
                md: '64px',
              }}
              height={'100%'}
              bg={'transparent'}
              display={{ base: 'none', sm: 'block' }}
            ></Box>
          </Box>
        </Box>
      </ScrollBox>
    </Box>
  )
}

export default GalleryScroll
