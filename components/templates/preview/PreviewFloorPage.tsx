import { usePreview } from 'lib/sanity.preview'
import _ from 'lodash'
import FloorPageTemplate from '../FloorPage'

const PreviewFloorPage = (props) => {
  const { token, floors, routeDetail, pages } = props
  const detailSlug = routeDetail?.detailPathId
  const floor = usePreview(
    token,
    `*[_type == "floors" && slug.current == "${detailSlug}"][0]`,
    floors
  )

  return <FloorPageTemplate {...props} floors={floor} preview />
}

export default PreviewFloorPage
