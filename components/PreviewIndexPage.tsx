import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'

const PreviewIndexPage = (props) => {
  const { token, pages } = props

  const page =
    usePreview(
      token,
      `*[_type == "page" && slug.current=="${pages?.[0]?.slug?.current}"][]`
    ) || []

  return <IndexPage preview {...props} pages={page} />
}

export default PreviewIndexPage
