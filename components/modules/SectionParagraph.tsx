import { Flex } from '@chakra-ui/react'
import CustomPortableText from 'components/base/CustomPortableText'
import { HeightVariants } from 'components/base/Divider'
import SectionContainer from 'components/base/Section'
import { ContentItem } from 'utils/interfaces'

type SectionParagraphProps = {
  marginTop: HeightVariants
  marginBottom: HeightVariants
  content: ContentItem[]
}

const SectionParagraph: React.FC<SectionParagraphProps> = ({
  marginTop,
  marginBottom,
  content,
}) => {
  return (
    <SectionContainer marginTop={marginTop} marginBottom={marginBottom}>
      <Flex width={'w-full'} maxWidth={'1000px'} direction={'column'}>
        <CustomPortableText value={content} />
      </Flex>
    </SectionContainer>
  )
}

export default SectionParagraph
