import { usePreview } from 'lib/sanity.preview'
import _ from 'lodash'
import BlogPageTemplate from '../BlogPage'

const PreviewBlogPage = (props) => {
  const { token, blog: _blog, routeDetail, pages } = props
  const detailSlug = routeDetail?.detailPathId

  const blog =
    usePreview(
      token,
      `*[_type == "blogs" && slug.current == "${detailSlug}"][0]`,
      {}
    ) || _blog

  return <BlogPageTemplate {...props} blog={blog} preview />
}

export default PreviewBlogPage
