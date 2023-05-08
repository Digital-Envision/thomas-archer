import { Box, Flex, Grid, GridItem, Img } from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import Text from 'components/base/Text'
import Bath from 'components/icon/Bath'
import Bed from 'components/icon/Bed'
import Car from 'components/icon/Car'
import { urlForImage } from 'lib/sanity.image'
import React from 'react'

const FloorPlanDetails = ({ floors }) => {
  return (
    <Box
      px={{
        base: '27.58px',
        md: '70.48px',
      }}
    >
      <Heading2 mb={'25px'}>Elba 45</Heading2>
      <Grid templateColumns={'repeat(5, 1fr)'}>
        <GridItem colSpan={2}>
          <Box mb={'57px'}>
            <Flex alignItems={'center'}>
              <Box textAlign={'center'}>
                <Bed />
                <Text as={'span'} ml={'13px'}>
                  {floors?.roomDetails?.bedRoom}
                </Text>
              </Box>
              <Box mx={'13px'}>
                <Bath />
                <Text as={'span'} ml={'13px'}>
                  {floors?.roomDetails?.bathRoom}
                </Text>
              </Box>
              <Box>
                <Car />
                <Text as={'span'} ml={'13px'}>
                  {floors?.roomDetails?.carPort}
                </Text>
              </Box>
            </Flex>
            <Text mt={'22px'}>{floors?.description}</Text>
          </Box>
          <Box mb={'30px'}>
            <Heading3 fontSize={'19px'}>Available Options</Heading3>
            <Text mt={'18px'}>{floors?.options?.description}</Text>
          </Box>
          <Box>
            {floors?.options?.listOptions.map((opt, key) => {
              return (
                <Box
                  key={key}
                  mb={'24px'}
                  pb={'10px'}
                  borderBottom={
                    key === floors.options.listOptions.length - 1
                      ? '1px solid transparent'
                      : '1px solid #D9D9D9'
                  }
                >
                  <Text fontSize={'14px'}>{opt}</Text>
                </Box>
              )
            })}
          </Box>
          <Flex flexDir={'column'} width={'250px'} mt={'50px'}>
            <Button variant={ButtonVariants.blackLine} mb={'20px'}>
              Download Price List
            </Button>
            <Button variant={ButtonVariants.blackLine} mb={'20px'}>
              Download Home Flyer
            </Button>
            <Button variant={ButtonVariants.blackLine}>
              Inclusions Brochure
            </Button>
          </Flex>
          <Text mt={'40px'}>
            To find out more, please{' '}
            <Text as={'span'} textDecor={'underline'}>
              contact one of our Consultant
            </Text>
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <Flex flexDir={'row-reverse'}>
            {floors?.listImages?.map(
              (img, key) =>
                img?.image && (
                  <Img
                    key={key}
                    src={urlForImage(img?.image).url()}
                    width={'421px'}
                    height={'683px'}
                    alt={img?.name}
                  ></Img>
                )
            )}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default FloorPlanDetails
