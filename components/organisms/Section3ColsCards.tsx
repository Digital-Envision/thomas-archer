import { Box, Image, Flex, HStack, Stack } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import ArticleBlogCard, {
  ArticleBlogCardProps,
} from 'components/modules/ArticleBlogCard'

type Section3ColsCardsProps = {
  ArticleBlogCard1: ArticleBlogCardProps
  ArticleBlogCard2: ArticleBlogCardProps
  ArticleBlogCard3: ArticleBlogCardProps
}

const Section3ColsCards: React.FC<Section3ColsCardsProps> = ({
  ArticleBlogCard1,
  ArticleBlogCard2,
  ArticleBlogCard3,
}) => {
  return (
    <Flex
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      maxWidth={'1440px'}
      px={'1rem'}
    >
      <Stack direction={{ base: 'column', md: 'row' }} spacing={'1rem'}>
        <ArticleBlogCard {...ArticleBlogCard1} />
        <ArticleBlogCard {...ArticleBlogCard2} />
        <ArticleBlogCard {...ArticleBlogCard3} />
      </Stack>
    </Flex>
  )
}

export default Section3ColsCards
