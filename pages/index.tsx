import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getAllPosts,
  getAllProjects,
  getSettings,
} from 'lib/sanity.client'
import { Post, Project, Settings } from 'lib/sanity.queries'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

export interface PageProps {
  posts: Post[]
  pages: any[]
  globals: any[]
  settings: Settings
  preview: boolean
  token: string | null
  projects: Project[]
}

export interface Query {
  [key: string]: string
}

export interface PreviewData {
  token?: string
}

export default function HomePage(props: PageProps) {
  // console.log('✅pages/index', props)
  const { posts, settings, preview, token, pages, globals, projects } = props

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
  const [settings, posts = [], globals = []] = await Promise.all([
    getSettings(),
    getAllPosts(), // can remove
    getAllGlobals(),
  ])

  // get index page reference from settings
  if (!_.isEmpty(settings)) {
    pages = [...(await getAllPages({ _id: settings?.indexPage?._ref }))]
  }

  const projects = await getAllProjects()

  return {
    props: {
      posts,
      projects,
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
