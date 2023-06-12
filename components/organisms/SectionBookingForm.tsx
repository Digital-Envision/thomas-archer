import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import { HeadingTagSemantic } from 'components/base/Heading1'
import React from 'react'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import useHubspot from 'lib/hooks/useHubspot'
import { Hubspot, SanityFiles } from 'utils/interfaces'
import { getImageUrl } from 'lib/utils'

type SectionBookingForm = {
  marginTop: HeightVariants
  marginBottom: HeightVariants
  image?: SanityFiles
  alt?: string
  hubspot: Hubspot
}

const SectionBookingForm: React.FC<SectionBookingForm> = ({
  marginTop,
  marginBottom,
  image,
  alt,
  hubspot,
}) => {
  const { region, portalId, formId } = hubspot?.bookingSessionForm

  useHubspot({
    isOpen: true,
    region,
    portalId,
    formId,
    target: '#hubspotBookingForm',
  })

  return (
    <SectionContainer
      direction={{ base: 'column', md: 'row' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex direction={'column'} flex={1}>
        <Box id="hubspotBookingForm" />

        <Text mt={'-1.8rem'} textAlign={'right'}>
          *Required Fields.
        </Text>
      </Flex>

      <Box p="2rem" />

      <Flex flex={1} justify={'center'}>
        <Image width={'100%'} objectFit={'cover'} src={getImageUrl(image)} />
      </Flex>
    </SectionContainer>
  )
}

export default SectionBookingForm
