import { Box, Image, Flex, HStack, Stack } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import ArticleBlogCard from 'components/modules/ArticleBlogCard'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import Divider, { HeightVariants } from 'components/base/Divider'

type SectionBlogProps = {
  imageUrl: string
  createdAt?: string
  heading: string
  paragraph: string
  width?: string
  height?: string
  buttonText: string
  buttonOnClick: () => void
}

/**
 * usage:
 * <ArticleCard
    imageUrl="https://via.placeholder.com/500x500"
    createdAt={'01/01/2023'}
    heading="Article Card"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel."
    buttonText="Find Out More"
    buttonOnClick={() => alert('Button clicked!')}
  />
 */

// TODO from dynamic component later

const SectionBlog: React.FC<SectionBlogProps> = (
  {
    //   imageUrl,
    //   createdAt,
    //   heading,
    //   description,
    //   width = '470px',
    //   height = '730px',
    //   buttonText,
    //   buttonOnClick, // TODO
  }
) => {
  return (
    <Flex
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      maxWidth={'1440px'}
      px={'1rem'}
      direction={'column'}
    >
      <SectionHeadingParagraphCTA
        isOffset={false}
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat,
          lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum
          arcu ipsum vel risus."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
          et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
          efficitur nunc in. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla
          dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis
          orci viverra, efficitur nunc in. Sed feugiat, lectus et viverra
          ullamcorper, nulla dui ullamcorper quam."
        showButton={false}
        marginTop={HeightVariants.less}
        marginBottom={HeightVariants.less}
      />

      <Divider
        variant={{ base: HeightVariants.none, md: HeightVariants.less }}
      />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={'1rem'}>
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonOnClick={() => alert('Button clicked!')}
        />
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonOnClick={() => alert('Button clicked!')}
        />
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonOnClick={() => alert('Button clicked!')}
        />
      </Stack>
    </Flex>
  )
}

export default SectionBlog
