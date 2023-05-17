import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getSanityData,
  getSanityDataById,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
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

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

export default function DynamicPage(props) {
  console.log('🔥 newpage props', props)

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
  } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div></div>
  }

  // if /[project/floor/blog]/[id], render one these
  if (!_.isEmpty(routeDetail?.detail)) {
    switch (_.first(routeDetail?.detail)) {
      case 'project':
        return <ProjectPageTemplate {...props} />
      case 'blog':
        return <BlogPageTemplate {...props} />
      case 'floor':
        return <FloorPageTemplate {...props} />
    }
  }

  // if (preview) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <IndexPage
  //           loading
  //           preview
  //           posts={posts}
  //           settings={settings}
  //           pages={pages}
  //           globals={globals}
  //           projects={projects}
  //         />
  //       }
  //     >
  //       <PreviewIndexPage token={token} />
  //     </PreviewSuspense>
  //   )
  // }

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
  const parentPages = ['gallery', 'home-design', 'custom-design'] // todo fetch list from sanity
  const subPages = ['portfolio', 'inspiration-moodboards', 'upcoming-projects'] // todo fetch list from sanity

  const paths = []

  parentPages.forEach((slug) => {
    subPages.forEach((sub) => {
      paths.push({ params: { slug: [slug, sub] } })
    })
  })

  return {
    paths: [{ params: { slug: ['gallery', 'whateverpage'] } }],
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

  console.log('getStaticProps ctx', ctx)
  const { preview = false, previewData = {}, params } = ctx
  let pages = []
  let pageProps

  const routeDetail = getRouteDetail(params?.slug)
  console.log('getStaticProps routeDetail', routeDetail)

  const [settings, globals = []] = await Promise.all([
    getSettings(),
    getAllGlobals(),
  ])

  // fetch page based on route, or else fetch configured page from settings.indexPage
  if (!_.isEmpty(settings)) {
    pages = [
      ...(await getAllPages(
        _.last(routeDetail?.route) || { _id: settings?.indexPage?._ref }
      )),
    ]
  }

  // if detail page, fetch customized data based on document type and params
  const isDetailPage = !_.isEmpty(routeDetail?.detail)
  if (isDetailPage) {
    pageProps = await setPropsForDetailPage({ routeDetail, page: pages?.[0] })
  } else {
    // else, fetch universal data
    pageProps = await setPropsForPage()
    // TODO fetch data based on page content, example: if there's SectionProjectLlisting, need to fetch projects
  }

  return {
    props: {
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
      routeDetail,
      ...pageProps,
    },
  }
}
