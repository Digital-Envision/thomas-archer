import { Box } from '@chakra-ui/react'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import _ from 'lodash'
import { blockToPlainText } from 'lib/utils'
import { BlogListingCardProps } from 'components/modules/BlogListingCard'
import SectionColCards from './SectionColCards'
import { LinksInterface } from 'components/base/Link'
import { LINK_TYPE_NAME } from 'schemas/components/link/link'
import { PortableTextBlock } from '@portabletext/types'

type SectionBlogProps = {
  heading: string
  content: PortableTextBlock
  width?: string
  height?: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
  headingTagLevelBlog: HeadingTagSemantic
  blogs: BlogListingCardProps
  button: LinksInterface
  createdDate: string
}

// data is pulled from 3 latest blogs documents
const SectionBlog: React.FC<SectionBlogProps> = ({
  heading,
  headingTagLevel,
  headingTagLevelBlog,
  content,
  marginTop,
  marginBottom,
  blogs: _blogs,
  button,
  createdDate,
  ...rest
}) => {
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
        linkType: LINK_TYPE_NAME.blog,
        blogHref: {
          _type: 'reference',
          slug: blog?.slug?.current,
        },
        externalHref: '',
        isExternal: false,
        mobileOnly: false,
      },
      isClickable: true,
      isShowCreatedAt: true,
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
        content={content}
        button={button}
        {...rest}
      />

      <Box pt={{ base: HeightVariants.less, md: HeightVariants.default }} />

      {blogs && (
        <SectionColCards
          headingTagLevel={headingTagLevelBlog}
          ListArticleBlogCards={blogs}
        />
      )}
    </Box>
  )
}

export default SectionBlog
