import { Flex, Stack } from '@chakra-ui/react'
import ArticleBlogCard, {
  ArticleBlogCardProps,
} from 'components/modules/ArticleBlogCard'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'

type Section2ColCardsProps = {
  ArticleBlogCard1: ArticleBlogCardProps
  ArticleBlogCard2: ArticleBlogCardProps
  ArticleBlogCard3: ArticleBlogCardProps
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
}

const Section2ColCards: React.FC<Section2ColCardsProps> = ({
  ArticleBlogCard1,
  ArticleBlogCard2,
  marginTop,
  marginBottom,
  headingTagLevel,
}) => {
  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      maxWidth={'1440px'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '90px', md: '1rem' }}
        overflow="hidden"
      >
        <ArticleBlogCard
          {...ArticleBlogCard1}
          headingTagLevel={headingTagLevel}
        />
        <ArticleBlogCard
          {...ArticleBlogCard2}
          headingTagLevel={headingTagLevel}
        />
      </Stack>
    </Flex>
  )
}

export default Section2ColCards
