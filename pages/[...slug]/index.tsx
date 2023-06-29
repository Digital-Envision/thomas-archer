import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getAllPagesSlugs,
  getDocumentTypeSlugs,
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
import separatePages, {
  checkLinkType,
  structuredDocumentTypes,
} from 'utils/separate-pages'
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
  // console.log('Dynamic page props', props)

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
    documentTypesPage,
  } = props
  const router = useRouter()
  const storeLink = useStoreLink((state) => state)

  useEffect(() => {
    storeLink.setLink('pages', slugAndPages?.pages)
    storeLink.setLink('floorPlans', documentTypesPage?.floorPlansRef)
    storeLink.setLink('projects', documentTypesPage?.projectsRef)
    storeLink.setLink('blogs', documentTypesPage?.blogRef)
    storeLink.setLink('detailsPage', globals?.DetailsPage)
  }, [slugAndPages])

  if (router.isFallback) {
    return <div></div>
  }

  if (!_.isEmpty(routeDetail?.detailsPage) && !_.isEmpty(storeLink?.pages)) {
    switch (routeDetail?.detailsPage) {
      case DOCUMENT_TYPES_PAGE_NAME.Projects:
        if (preview) {
          return (
            <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
              <PreviewProjectPage {...props} />
            </PreviewSuspense>
          )
        }

        return (
          <ProjectPageTemplate
            {...props}
            blogs={blogs}
            floors={floors}
            awardedProjects={awardedProjects}
          />
        )
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

        return (
          <FloorPageTemplate
            {...props}
            projects={projects}
            blogs={blogs}
            awardedProjects={awardedProjects}
          />
        )
    }
  }

  if (preview && !_.isEmpty(storeLink?.pages)) {
    return (
      <PreviewSuspense fallback={<div>Loading Preview Page</div>}>
        <PreviewIndexPage {...props} />
      </PreviewSuspense>
    )
  }

  if (!_.isEmpty(storeLink?.pages))
    //applied to other page
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

  return <div />
}

export const getStaticPaths = async () => {
  const links = await getAllGlobals()
  const pagesSlug = await getAllPagesSlugs()
  const separated = separatePages({
    navLinks: links?.Links,
    footerNavLinks: links?.Footer?.NavLinks,
    pages: pagesSlug,
  })

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

  // return { props: {} }

  const { preview = false, previewData = {}, params } = ctx
  let pages = []
  let pageProps: any = {}

  const [settings, globals = []] = await Promise.all([
    getSettings(),
    getAllGlobals(),
  ])
  const pagesSlug = await getAllPagesSlugs()
  const slugAndPages = separatePages({
    navLinks: globals?.Links,
    footerNavLinks: globals?.Footer?.NavLinks,
    pages: pagesSlug,
  })

  const routeDetail = getRouteDetail(
    params?.slug,
    slugAndPages.pages,
    globals?.DetailsPage
  )
  let documentTypeRef = {}
  let documentTypeSlugs = {}
  let restructuredDocumentType = {}

  if (_.isEmpty(routeDetail)) {
    return { notFound: true }
  } else {
    // fetch page based on route or details page
    if (routeDetail.detailsPage) {
      pageProps = await setPropsForDetailPage({ routeDetail })

      // set detail slugs for RTF or customPageSection for detailed page
      if (pageProps?.blog?.content) {
        documentTypeRef = checkLinkType([
          ...pageProps?.blog?.content,
          ...(!_.isEmpty(pageProps?.blog?.customPageSection)
            ? pageProps?.blog?.customPageSection
            : []),
        ])
        documentTypeSlugs = await getDocumentTypeSlugs(documentTypeRef)
        restructuredDocumentType = structuredDocumentTypes(documentTypeSlugs)
      } else if (pageProps?.project?.content) {
        documentTypeRef = checkLinkType([
          ...pageProps?.project?.content,
          ...(!_.isEmpty(pageProps?.project?.customPageSection)
            ? pageProps?.project?.customPageSection
            : []),
        ])
        documentTypeSlugs = await getDocumentTypeSlugs(documentTypeRef)
        restructuredDocumentType = structuredDocumentTypes(documentTypeSlugs)
      } else if (pageProps?.floors?.content) {
        documentTypeRef = checkLinkType([
          ...pageProps?.floors?.content,
          ...(!_.isEmpty(pageProps?.floors?.customPageSection)
            ? pageProps?.floors?.customPageSection
            : []),
        ])

        documentTypeSlugs = await getDocumentTypeSlugs(documentTypeRef)
        restructuredDocumentType = structuredDocumentTypes(documentTypeSlugs)
      }

      if (_.isEmpty(pageProps)) {
        return { notFound: true }
      }
    } else {
      pages = [...(await getAllPages(routeDetail.page))]
      documentTypeRef = checkLinkType(pages[0].content)
      documentTypeSlugs = await getDocumentTypeSlugs(documentTypeRef)
      restructuredDocumentType = structuredDocumentTypes(documentTypeSlugs)

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
      documentTypesPage: { ...restructuredDocumentType },
      ...pageProps,
    },
  }
}
