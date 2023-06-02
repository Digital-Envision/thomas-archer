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
import separatePages from 'utils/separate-pages'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

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
      case 'view-range':
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
  let pageProps

  const routeDetail = getRouteDetail(params?.slug)

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

  if (
    _.isEmpty(pages) ||
    (!_.isEmpty(routeDetail?.detail) && routeDetail?.detail?.length < 2)
  ) {
    return { notFound: true }
  }

  // if detail page, fetch customized data based on document type and params

  if (routeDetail.isDetailPage) {
    pageProps = await setPropsForDetailPage({ routeDetail, page: pages?.[0] })
  } else {
    // else, fetch universal data
    pageProps = await setPropsForPage()
    // TODO fetch data based on page content, example: if there's SectionProjectLlisting, need to fetch projects
  }

  return {
    props: {
      settings,
      // isDetailPage,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
      routeDetail,
      // routeDetail: { ...routeDetail, isDetailPage },
      ...pageProps,
    },
  }
}
