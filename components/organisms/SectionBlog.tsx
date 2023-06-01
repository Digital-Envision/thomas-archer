import { Box } from '@chakra-ui/react'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import _ from 'lodash'
import { blockToPlainText } from 'lib/utils'
import { useRouter } from 'next/router'
import { BlogListingCardProps } from 'components/modules/BlogListingCard'
import SectionColCards from './SectionColCards'
import { LinksInterface } from 'components/base/Link'

type SectionBlogProps = {
  heading: string
  paragraph: string
  width?: string
  height?: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
  blogs: BlogListingCardProps
  button: LinksInterface
}

// data is pulled from 3 latest blogs documents
const SectionBlog: React.FC<SectionBlogProps> = ({
  heading,
  headingTagLevel,
  paragraph,
  marginTop,
  marginBottom,
  blogs: _blogs,
  button,
  ...rest
}) => {
  const { asPath } = useRouter()
  const sortedBlogs = _.slice(
    _.orderBy(_blogs?.data, ['createdAt'], ['desc']),
    0,
    3
  )

  // convert blogs to compatible with SectionColCards
  const blogs = _.map(sortedBlogs, (blog) => {
    return {
      ...blog,
      paragraph: blockToPlainText(blog?.content),
      headingTagLevel: HeadingTagSemantic.H1,
      button: {
        label: 'Read More',
        useInternal: true,
        internalHref: `${asPath}/blog/${blog.slug?.current}`,
        externalHref: '',
        isExternal: false,
        mobileOnly: false,
      },
      isClickable: true,
    }
  })

  return (
    <Box
      marginTop={marginTop}
      marginBottom={marginBottom}
      px={{ md: sortedBlogs.length > 2 ? '0px' : '76px' }}
    >
      <SectionHeadingParagraphCTA
        isOffset={false}
        heading={heading}
        headingTagLevel={headingTagLevel}
        paragraph={paragraph}
        button={button}
      />

      <Box pt={{ base: HeightVariants.less, md: HeightVariants.default }} />

      <SectionColCards ListArticleBlogCards={blogs} />
    </Box>
  )
}

export default SectionBlog
