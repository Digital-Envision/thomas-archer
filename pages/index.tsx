import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import { BlogListingCardProps } from 'components/modules/BlogListingCard'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import {
  getAllBlogs,
  getAllFloors,
  getAllGlobals,
  getAllPages,
  getAllPosts,
  getSanityData,
  getSettings,
} from 'lib/sanity.client'
import { Blog, Post, Project, Settings, Floor } from 'lib/sanity.queries'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'
import { setPropsForPage } from 'utils/page'

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
}

export interface Query {
  [key: string]: string
}

export interface PreviewData {
  token?: string
}

export default function HomePage(props: PageProps) {
  // console.log('✅pages/index', props)
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
  } = props

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
  const [settings, globals = []] = await Promise.all([
    getSettings(),
    getAllGlobals(),
  ])

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
      token: previewData.token ?? null,
      ...pageProps,
    },
  }
}
