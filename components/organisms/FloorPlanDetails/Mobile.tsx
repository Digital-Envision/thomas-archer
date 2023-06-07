import _ from 'lodash'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react'
import Button, { Variants as ButtonVariants } from 'components/base/Button'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import Text from 'components/base/Text'
import Bath from 'components/icon/Bath'
import Bed from 'components/icon/Bed'
import Car from 'components/icon/Car'
import { urlForImage } from 'lib/sanity.image'
import React, { useState } from 'react'
import FloorPlanDetailsModal from './Modal'
import { getUrlFromSanityFile } from 'lib/utils'
import Link from 'next/link'

const FloorPlanDetailsMobile = ({
  title,
  floorPlan,
  floorType,
  setFloorType,
}) => {
  const [selectImage, setSelectImage] = useState(0)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [hubspotModalForm, setHubspotModalForm] = useState({
    region: '',
    portalId: '',
    formId: '',
  })

  const handleCloseModal = () => {
    setIsOpenModal(false)
    setHubspotModalForm({
      region: '',
      portalId: '',
      formId: '',
    })
  }

  const handleOpenModal = (form) => {
    setHubspotModalForm({
      region: form?.region,
      portalId: form?.portalId,
      formId: form?.formId,
    })
    if (form?.region && form?.portalId && form?.formId) {
      setIsOpenModal(true)
    }
  }

  const handleSelectImage = (index: number) => {
    if (floorPlan?.listSizes[floorType]?.listImages[index]) {
      setSelectImage(index)
    }
  }

  const handleSelectSize = (index: number) => {
    setSelectImage(() => 0)
    setFloorType(index)
  }

  return (
    <Grid>
      <GridItem
        px={{
          base: '27.58px',
        }}
      >
        <Box mb={'40px'}>
          <Heading2 mb={'24px'}>
            {title} {floorPlan?.listSizes[floorType]?.size}
          </Heading2>
          {_.isArray(floorPlan?.listSizes) &&
            floorPlan?.listSizes?.length > 1 && (
              <SimpleGrid
                columns={{ base: 3, sm: 5, md: 5 }}
                gap={{ base: 1, sm: 3, md: 5 }}
              >
                {floorPlan?.listSizes?.map((size, key) => (
                  <Text
                    as={'span'}
                    fontWeight={floorType === key ? 500 : 300}
                    cursor={'pointer'}
                    onClick={() => handleSelectSize(key)}
                  >
                    View {title} {size.size}
                  </Text>
                ))}
              </SimpleGrid>
            )}
        </Box>
        <Box mb={'57px'}>
          <Flex alignItems={'center'}>
            {floorPlan?.listSizes[floorType]?.roomDetails?.bedRoom && (
              <Box textAlign={'center'} mr={'13px'}>
                <Bed />
                <Text as={'span'} ml={'13px'}>
                  {floorPlan?.listSizes[floorType]?.roomDetails?.bedRoom}
                </Text>
              </Box>
            )}
            {floorPlan?.listSizes[floorType]?.roomDetails?.bathRoom && (
              <Box mr={'13px'}>
                <Bath />
                <Text as={'span'} ml={'13px'}>
                  {floorPlan?.listSizes[floorType]?.roomDetails?.bathRoom}
                </Text>
              </Box>
            )}
            {floorPlan?.listSizes[floorType]?.roomDetails?.carPort && (
              <Box>
                <Car />
                <Text as={'span'} ml={'13px'}>
                  {floorPlan?.listSizes[floorType]?.roomDetails?.carPort}
                </Text>
              </Box>
            )}
          </Flex>
          {floorPlan?.listSizes[floorType]?.description && (
            <Text mt={'22px'}>
              {floorPlan?.listSizes[floorType]?.description}
            </Text>
          )}
        </Box>
        {floorPlan?.listSizes[floorType]?.options?.description ||
        floorPlan?.listSizes[floorType]?.options?.listOptions?.length > 0 ? (
          <Box mb={'30px'}>
            <Heading3 fontSize={'19px'}>Available Options</Heading3>
            <Text mt={'18px'}>
              {floorPlan?.listSizes[floorType]?.options?.description}
            </Text>
          </Box>
        ) : (
          <></>
        )}
        <Box>
          {floorPlan?.listSizes[floorType]?.options?.listOptions.map(
            (opt, key) => {
              return (
                <Box
                  key={key}
                  mb={'24px'}
                  pb={'10px'}
                  borderBottom={
                    key ===
                    floorPlan?.listSizes[floorType]?.options.listOptions
                      .length -
                      1
                      ? '1px solid transparent'
                      : '1px solid #D9D9D9'
                  }
                >
                  <Text fontSize={'14px'}>{opt}</Text>
                </Box>
              )
            }
          )}
        </Box>
      </GridItem>
      <GridItem>
        <Tabs
          isFitted
          index={selectImage}
          onChange={(index) => handleSelectImage(index)}
          mb={'60px'}
        >
          <TabList>
            {floorPlan?.listSizes[floorType]?.listImages?.map(
              (img, key) =>
                img?.image && (
                  <Tab
                    key={key}
                    _selected={{
                      color: 'black',
                      fontWeight: 500,
                      borderBottomColor: 'black',
                    }}
                    color={'#D9D9D9'}
                    fontWeight={500}
                  >
                    {img?.name}
                  </Tab>
                )
            )}
          </TabList>
        </Tabs>
        <Flex justifyContent={'center'}>
          {_.isArray(floorPlan?.listSizes[floorType]?.listImages) &&
            floorPlan?.listSizes[floorType]?.listImages[selectImage] && (
              <Box>
                <Img
                  src={urlForImage(
                    floorPlan?.listSizes[floorType]?.listImages[selectImage]
                      ?.image
                  )?.url()}
                  width={'347px'}
                  height={'621px'}
                  alt={
                    floorPlan?.listSizes[floorType]?.listImages[selectImage]
                      ?.name
                  }
                ></Img>
              </Box>
            )}
        </Flex>
      </GridItem>
      <GridItem
        px={{
          base: '27.58px',
        }}
      >
        {floorPlan?.priceList ||
        floorPlan?.inclusionsBrochure ||
        floorPlan?.homeFlyer ? (
          <Flex flexDir={'column'} width={'250px'} mt={'50px'}>
            <FloorPlanDetailsModal
              isOpen={isOpenModal}
              onClose={handleCloseModal}
              region={hubspotModalForm.region}
              portalId={hubspotModalForm.portalId}
              formId={hubspotModalForm.formId}
            />
            {floorPlan?.priceList && (
              <Button
                variant={ButtonVariants.blackLine}
                mb={'20px'}
                onClick={() => handleOpenModal(floorPlan?.priceList)}
              >
                Download Price List
              </Button>
            )}
            {_.isArray(floorPlan?.listSizes) &&
              floorPlan?.listSizes[floorType].homeFlyer && (
                <Link
                  href={
                    !floorPlan?.listSizes[floorType]?.homeFlyer?.isExternalFile
                      ? floorPlan?.listSizes[floorType]?.homeFlyer?.fileName
                        ? `${getUrlFromSanityFile(
                            floorPlan?.listSizes[floorType]?.homeFlyer?.file
                          )}?dl=${
                            floorPlan?.listSizes[floorType]?.homeFlyer?.fileName
                          }`
                        : `${getUrlFromSanityFile(
                            floorPlan?.listSizes[floorType]?.homeFlyer?.file
                          )}?dl`
                      : floorPlan?.listSizes[floorType]?.homeFlyer?.externalFile
                      ? floorPlan?.listSizes[floorType]?.homeFlyer?.externalFile
                      : '#'
                  }
                >
                  <Button
                    variant={ButtonVariants.blackLine}
                    mb={'20px'}
                    width={'100%'}
                  >
                    Download Home Flyer
                  </Button>
                </Link>
              )}
            {floorPlan?.inclusionsBrochure && (
              <Button
                variant={ButtonVariants.blackLine}
                onClick={() => handleOpenModal(floorPlan?.inclusionsBrochure)}
              >
                Inclusions Brochure
              </Button>
            )}
          </Flex>
        ) : (
          <></>
        )}
        <Text mt={'40px'}>
          To find out more, please{' '}
          <Text as={'span'} textDecor={'underline'}>
            contact one of our Consultant
          </Text>
        </Text>
      </GridItem>
    </Grid>
  )
}

export default FloorPlanDetailsMobile
