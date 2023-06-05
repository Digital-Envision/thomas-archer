import { Button } from '@chakra-ui/react'
import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import { BlogListingCardProps } from 'components/modules/BlogListingCard'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import {
  getAllBlogs,
  getAllFloors,
  getAllGlobals,
  getAllPages,
  getAllPagesSlugs,
  getAllPosts,
  getSanityData,
  getSettings,
} from 'lib/sanity.client'
import { Blog, Post, Project, Settings, Floor } from 'lib/sanity.queries'
import { useStoreLink, Links as LinkStoreType } from 'lib/store/link'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'
import { setPropsForPage } from 'utils/page'
import separatePages from 'utils/separate-pages'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

export interface PageProps {
  posts?: Post[]
  pages: any[]
  globals: any[]
  settings: Settings
  preview: boolean
  token: string | null
  projects?: ProjectListingCardProps
  project?: ProjectListingCardProps['data'][0]
  awardedProjects?: ProjectListingCardProps
  blogs?: BlogListingCardProps
  floors?: Floor[]
  slugAndPages?: {
    pages: LinkStoreType
    slug: string[]
  }
}

export interface Query {
  [key: string]: string
}

export interface PreviewData {
  token?: string
}

export default function HomePage(props: PageProps) {
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
    slugAndPages,
  } = props
  const storeLink = useStoreLink((state) => state)

  useEffect(() => {
    storeLink.setLink(slugAndPages?.pages)
  }, [slugAndPages])

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
    />
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx
  let pages = []
  const [settings, globals = [], pagesSlug] = await Promise.all([
    getSettings(),
    getAllGlobals(),
    getAllPagesSlugs(),
  ])
  const slugAndPages = separatePages(globals?.Links, pagesSlug)

  // get index page reference from settings
  if (!_.isEmpty(settings)) {
    pages = [...(await getAllPages({ _id: settings?.indexPage?._ref }))]
  }

  // fetch universal data
  const pageProps = await setPropsForPage()
  // TODO fetch data based on page content, example: if there's SectionProjectLlisting, need to fetch projects

  return {
    props: {
      settings,
      pages,
      globals,
      preview,
      slugAndPages,
      token: previewData.token ?? null,
      ...pageProps,
    },
  }
}
