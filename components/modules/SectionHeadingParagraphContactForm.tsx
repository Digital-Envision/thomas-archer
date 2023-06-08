import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import React from 'react'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import useHubspot from 'lib/hooks/useHubspot'
import { Hubspot } from 'utils/interfaces'

type SectionHeadingParagraphContactFormProps = {
  heading: string
  headingTagLevel?: HeadingTagSemantic
  paragraph: string
  tnc: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  hubspot: Hubspot
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
}) => {
  const { region, portalId, formId } = hubspot?.contactForm

  useHubspot({
    isOpen: true,
    region,
    portalId,
    formId,
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

        <Text mt={'-2.5rem'} textAlign={'right'}>
          *Required Fields.
        </Text>

        <Box pt="1.4rem" />
        <Box pt={HeightVariants.default} />
        <Text>{tnc}</Text>
      </Flex>
    </SectionContainer>
  )
}

export default SectionHeadingParagraphContactForm
