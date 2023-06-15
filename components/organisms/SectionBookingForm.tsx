import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import { HeadingTagSemantic } from 'components/base/Heading1'
import React from 'react'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import useHubspot from 'lib/hooks/useHubspot'
import { Hubspot, HubspotForm, SanityFiles } from 'utils/interfaces'
import { getImageUrl } from 'lib/utils'
import CustomPortableText from 'components/base/CustomPortableText'

type SectionBookingForm = {
  marginTop: HeightVariants
  marginBottom: HeightVariants
  image?: SanityFiles
  alt?: string
  hubspot: HubspotForm
  tnc: any
  globals: any
}

const SectionBookingForm: React.FC<SectionBookingForm> = ({
  marginTop,
  marginBottom,
  image,
  alt,
  tnc,
  hubspot,
  globals,
}) => {
  //use global?.hubspot as fallback
  const hubspotData = {
    region: hubspot?.region || globals?.Hubspot?.bookingSessionForm?.region,
    portalId:
      hubspot?.portalId || globals?.Hubspot?.bookingSessionForm?.portalId,
    formId: hubspot?.formId || globals?.Hubspot?.bookingSessionForm?.formId,
  }

  useHubspot({
    isOpen: true,
    ...hubspotData,
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

        <Text
          alignSelf={'flex-end'}
          mt={'-1.8rem'}
          textAlign={'right'}
          as="span"
        >
          *Required Fields.
        </Text>
        <Box pt="0.7rem" />
        <Box pt={HeightVariants.less} />
        <CustomPortableText value={tnc} />
      </Flex>

      <Box p="2rem" />

      <Flex flex={1} justify={'center'}>
        <Image
          width={'100%'}
          objectFit={'cover'}
          src={getImageUrl(image)}
          alt={alt}
        />
      </Flex>
    </SectionContainer>
  )
}

export default SectionBookingForm
