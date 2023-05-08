import { Box, Flex, Stack } from '@chakra-ui/react'
import ArticleBlogCard from 'components/modules/ArticleBlogCard'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import _ from 'lodash'
import { Blog } from 'lib/sanity.queries'
import { blockToPlainText } from 'lib/utils'
import { useRouter } from 'next/router'

type SectionBlogProps = {
  heading: string
  paragraph: string
  width?: string
  height?: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
  blogs: Blog[]
}

// data is pulled from 3 latest blogs documents
const SectionBlog: React.FC<SectionBlogProps> = ({
  heading,
  headingTagLevel,
  paragraph, // TODO
  marginTop,
  marginBottom,
  blogs,
  ...rest
}) => {
  const { asPath } = useRouter()
  const sortedBlogs = _.slice(_.orderBy(blogs, ['createdAt'], ['desc']), 0, 3)

  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      direction="column"
      maxWidth={'1800px'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex
        mx={'auto'}
        width={'100%'}
        maxWidth={'1800px'}
        direction={{ base: 'column', md: 'row' }}
        px={{ base: '1rem', md: '4rem' }}
      >
        <SectionHeadingParagraphCTA
          heading={heading}
          paragraph={paragraph}
          isOffset={false}
          headingTagLevel={headingTagLevel}
          showButton={false}
          isEmbed
        />
      </Flex>

      <Box pt={{ base: HeightVariants.less, md: HeightVariants.default }} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={'1rem'}>
        {sortedBlogs.map(
          ({ image, content, createdAt, heading, slug, ...rest }) => (
            <ArticleBlogCard
              image={image}
              createdAt={createdAt}
              heading={heading}
              paragraph={blockToPlainText(content)}
              buttonText="Read More"
              buttonLink={`${asPath}/blog/${slug?.current}`}
              headingTagLevel={HeadingTagSemantic.H1}
              // internalButton={}
              {...rest}
            />
          )
        )}
      </Stack>
    </Flex>
  )
}

export default SectionBlog
