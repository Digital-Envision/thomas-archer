import { Flex, Stack } from '@chakra-ui/react'
import ArticleBlogCard, {
  ArticleBlogCardProps,
} from 'components/modules/ArticleBlogCard'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'

type Section3ColsCardsProps = {
  ArticleBlogCard1: ArticleBlogCardProps
  ArticleBlogCard2: ArticleBlogCardProps
  ArticleBlogCard3: ArticleBlogCardProps
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
}

const Section3ColsCards: React.FC<Section3ColsCardsProps> = ({
  ArticleBlogCard1,
  ArticleBlogCard2,
  ArticleBlogCard3,
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
      maxWidth={'1800px'}
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
        <ArticleBlogCard
          {...ArticleBlogCard3}
          headingTagLevel={headingTagLevel}
        />
      </Stack>
    </Flex>
  )
}

export default Section3ColsCards
