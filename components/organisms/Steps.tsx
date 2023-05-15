import _ from 'lodash'
import { Box, Circle, Divider, Flex, Grid, GridItem } from '@chakra-ui/react'
import Heading2 from 'components/base/Heading2'
import Text from 'components/base/Text'
import React from 'react'

const Steps = ({ title, description, steps, marginBottom, marginTop }) => {
  const data = _.isArray(steps) ? steps : []
  const cloneData = []

  let stepNumber = 1

  for (let i = 0; i < data.length; i++) {
    cloneData.push(data[i]) // Push the current data item to the cloned array
    if (i !== data.length - 1) {
      cloneData.push('dash') // Push a dash separator between data items, except for the last item
    }
  }

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      <Box textAlign={'center'} maxWidth={'682px'} px={5}>
        {title && (
          <Heading2 fontSize={{ base: '25px', lg: '28px' }}>{title}</Heading2>
        )}
        {description && <Text mt={'34px'}>{description}</Text>}
      </Box>
      <Grid
        mt={'53px'}
        px={5}
        maxWidth={{
          base: '306px',
          lg:
            data?.length > 2
              ? '1800px'
              : data?.length === 2
              ? '682px'
              : '306px',
        }}
        templateColumns={{ lg: `repeat(${cloneData.length}, 1fr)` }}
        rowGap={{ base: 10, lg: 0 }}
      >
        {cloneData.map((num, key) => {
          if (num === 'dash') {
            return (
              <Box pt={5} px={7} display={{ base: 'none', lg: 'block' }}>
                <Divider borderColor={'black'} />
              </Box>
            )
          } else {
            const step = stepNumber++
            return (
              <GridItem key={key} alignItems={'center'} width={'100%'}>
                <Flex
                  flexDir={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Circle
                    size="40px"
                    bg="transparent"
                    border={'1px solid black'}
                    pt={1}
                  >
                    <Text
                      lineHeight={'normal'}
                      fontSize={'20px'}
                      fontFamily={'iskry'}
                    >
                      {step}
                    </Text>
                  </Circle>
                  <Box mt={{ base: '15px', lg: '30px' }} textAlign={'center'}>
                    {num.title && (
                      <Text
                        fontFamily={'iskry'}
                        fontSize={{ base: '19px', lg: '24px' }}
                      >
                        {num.title}
                      </Text>
                    )}
                    {num.description && (
                      <Text mt={{ base: '18px', lg: '34px' }}>
                        {num.description}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </GridItem>
            )
          }
        })}
      </Grid>
    </Flex>
  )
}

export default Steps
