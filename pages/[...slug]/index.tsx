import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getAllPagesSlugs,
  getSanityData,
  getSanityDataById,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { PageProps, PreviewData, Query } from 'pages'
import ProjectPageTemplate from 'components/templates/ProjectPage'
import BlogPageTemplate from 'components/templates/BlogPage'
import FloorPageTemplate from 'components/templates/FloorPage'
import {
  getRouteDetail,
  setPropsForDetailPage,
  setPropsForPage,
} from 'utils/page'
import separatePages from 'utils/separate-pages'
import { useStoreLink } from 'lib/store/link'
import { DOCUMENT_TYPES_PAGE_NAME } from 'schemas/global/DetailsPage'
import { PreviewSuspense } from 'components/PreviewSuspense'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))
const PreviewProjectPage = lazy(
  () => import('components/templates/preview/PreviewProjectPage')
)
const PreviewBlogPage = lazy(
  () => import('components/templates/preview/PreviewBlogPage')
)
const PreviewFloorPage = lazy(
  () => import('components/templates/preview/PreviewFloorPage')
)

export default function DynamicPage(props) {
  //console.log('Dynamic page props', props)

  const {
    posts,
    settings,
    preview,
    token,
    pages,
    globals,
    projects,
    blogs,
    floors,
    awardedProjects,
    routeDetail,
    slugAndPages,
  } = props
  const router = useRouter()
  const storeLink = useStoreLink((state) => state)

  useEffect(() => {
    storeLink.setLink(slugAndPages?.pages)
  }, [slugAndPages])

  if (router.isFallback) {
    return <div></div>
  }

  if (!_.isEmpty(routeDetail?.detailsPage) && !_.isEmpty(storeLink?.links)) {
    switch (routeDetail?.detailsPage) {
      case DOCUMENT_TYPES_PAGE_NAME.Projects:
        if (preview) {
          return (
            <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
              <PreviewProjectPage {...props} />
            </PreviewSuspense>
          )
        }

        return <ProjectPageTemplate {...props} />
      case DOCUMENT_TYPES_PAGE_NAME.Blog:
        if (preview) {
          return (
            <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
              <PreviewBlogPage {...props} />
            </PreviewSuspense>
          )
        }

        return <BlogPageTemplate {...props} />
      case DOCUMENT_TYPES_PAGE_NAME.FloorPlan:
        if (preview) {
          return (
            <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
              <PreviewFloorPage {...props} />
            </PreviewSuspense>
          )
        }

        return <FloorPageTemplate {...props} />
    }
  }

  if (preview && !_.isEmpty(storeLink?.links)) {
    return (
      <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
        <PreviewIndexPage {...props} />
      </PreviewSuspense>
    )
  }

  return (
    <IndexPage
      {...props}
      posts={posts}
      settings={settings}
      pages={pages}
      globals={globals}
      projects={projects}
      blogs={blogs}
      floors={floors}
      awardedProjects={awardedProjects}
    />
  )
}

export const getStaticPaths = async () => {
  const links = await getAllGlobals()
  const pagesSlug = await getAllPagesSlugs()
  const separated = separatePages(links?.Links, pagesSlug)

  const paths = separated.slug.map((slug) => {
    return { params: { slug: [`${slug}`] } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  /**
   * pseudo:
   * 1. check route if it contained document type keyword (project/blog/floor)
   * 2. return particular document id and required data
   */

  const { preview = false, previewData = {}, params } = ctx
  let pages = []
  let pageProps = {}

  const [settings, globals = []] = await Promise.all([
    getSettings(),
    getAllGlobals(),
  ])
  const pagesSlug = await getAllPagesSlugs()
  const slugAndPages = separatePages(globals?.Links, pagesSlug)

  const routeDetail = getRouteDetail(
    params?.slug,
    slugAndPages.pages,
    globals?.DetailsPage
  )

  if (_.isEmpty(routeDetail)) {
    return { notFound: true }
  } else {
    // fetch page based on route or details page
    if (routeDetail.detailsPage) {
      pageProps = await setPropsForDetailPage({ routeDetail })
      if (_.isEmpty(pageProps)) {
        return { notFound: true }
      }
    } else {
      pages = [...(await getAllPages(routeDetail.page))]
      pageProps = await setPropsForPage()
    }
  }

  return {
    props: {
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
      routeDetail,
      slugAndPages,
      ...pageProps,
    },
  }
}
