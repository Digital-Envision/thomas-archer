import { Box, Flex, Stack } from '@chakra-ui/react'
import ArticleBlogCard from 'components/modules/ArticleBlogCard'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'

type SectionBlogProps = {
  heading: string
  paragraph: string
  width?: string
  height?: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
}

// TODO from dynamic component later

const SectionBlog: React.FC<SectionBlogProps> = ({
  heading,
  headingTagLevel,
  paragraph, // TODO
  marginTop,
  marginBottom,
}) => {
  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      direction="column"
      maxWidth={'1440px'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <SectionHeadingParagraphCTA
        isOffset={false}
        showButton={false}
        heading={heading}
        paragraph={paragraph}
        headingTagLevel={headingTagLevel}
        // heading={'Blog'}
        // paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis orci viverra, efficitur nunc in."
        // headingTagLevel={HeadingTagSemantic.H1}
      />

      <Box pt={{ base: HeightVariants.less, md: HeightVariants.default }} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={'1rem'}>
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          createdAt="22 April 2022"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonLink={HeadingTagSemantic.H2}
          headingTagLevel={HeadingTagSemantic.H1}
        />
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          createdAt="22 April 2022"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonLink={HeadingTagSemantic.H2}
          headingTagLevel={HeadingTagSemantic.H1}
        />
        <ArticleBlogCard
          imageUrl="https://via.placeholder.com/500x500"
          createdAt="22 April 2022"
          heading="Article Card"
          paragraph="Our extensive range of pre-designed homes in our Expressions Series capture a refined modern aesthetic and have been developed to suit a variety of block sizes and lifestyles."
          buttonText="Find Out More"
          buttonLink={HeadingTagSemantic.H2}
          headingTagLevel={HeadingTagSemantic.H1}
        />
      </Stack>
    </Flex>
  )
}

export default SectionBlog
