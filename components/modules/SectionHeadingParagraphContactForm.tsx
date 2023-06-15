import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import React from 'react'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import useHubspot from 'lib/hooks/useHubspot'
import { Hubspot, HubspotForm } from 'utils/interfaces'
import CustomPortableText from 'components/base/CustomPortableText'

type SectionHeadingParagraphContactFormProps = {
  heading: string
  headingTagLevel?: HeadingTagSemantic
  paragraph: string
  tnc: any
  marginTop: HeightVariants
  marginBottom: HeightVariants
  hubspot: HubspotForm
  globals: any
}

const SectionHeadingParagraphContactForm: React.FC<
  SectionHeadingParagraphContactFormProps
> = ({
  heading,
  headingTagLevel,
  paragraph,
  tnc,
  marginTop,
  marginBottom,
  hubspot,
  globals,
}) => {
  //use global?.hubspot as fallback
  const hubspotData = {
    region: hubspot?.region || globals?.Hubspot?.contactForm?.region,
    portalId: hubspot?.portalId || globals?.Hubspot?.contactForm?.portalId,
    formId: hubspot?.formId || globals?.Hubspot?.contactForm?.formId,
  }

  useHubspot({
    ...hubspotData,
    isOpen: true,
    target: '#hubspotContactForm',
  })

  return (
    // @ts-ignore: 2590
    <SectionContainer
      direction={{ base: 'column', md: 'row' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex direction={'column'} flex={1}>
        <Heading1 as={headingTagLevel}>{heading}</Heading1>
        <Box pt={HeightVariants.less} />
        <Text>{paragraph}</Text>
        <Box
          pt={{
            base: HeightVariants.less,
            md: HeightVariants.none,
          }}
        />
      </Flex>

      <Box p="2rem" />

      <Flex direction={'column'} flex={1}>
        <Box id="hubspotContactForm" />

        <Text
          alignSelf={'flex-end'}
          mt={'-2.5rem'}
          textAlign={'right'}
          as="span"
        >
          *Required Fields.
        </Text>

        <Box pt="1.4rem" />
        <Box pt={HeightVariants.default} />
        <CustomPortableText value={tnc} />
      </Flex>
    </SectionContainer>
  )
}

export default SectionHeadingParagraphContactForm
