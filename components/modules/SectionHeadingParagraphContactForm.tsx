import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import React from 'react'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import useHubspot from 'lib/hooks/useHubspot'

type SectionHeadingParagraphContactFormProps = {
  heading: string
  paragraph: string
  tnc: string
  onSubmit: (args: any) => void
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionHeadingParagraphContactForm: React.FC<
  SectionHeadingParagraphContactFormProps
> = ({ heading, paragraph, onSubmit, tnc, marginTop, marginBottom }) => {
  const region = 'na1'
  const portalId = '8929845'
  const formId = '48799ea5-f9d3-4a93-b8eb-c2e7b09f223f'
  const target = '#hubspotContactForm'

  useHubspot({ isOpen: true, region, portalId, formId, target })

  return (
    // @ts-ignore: 2590
    <SectionContainer
      direction={{ base: 'column', md: 'row' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex direction={'column'} flex={1}>
        <Heading1>{heading}</Heading1>
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
