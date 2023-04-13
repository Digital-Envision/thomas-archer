import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getAllPosts,
  getSettings,
} from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { getAllPagesSlugs } from 'lib/sanity.client'
import { useRouter } from 'next/router'
import _ from 'lodash'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  pages: any[]
  globals: any[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function DynamicPage({
  posts,
  settings,
  preview,
  token,
  pages,
  globals,
}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage
            loading
            preview
            posts={posts}
            settings={settings}
            pages={pages}
            globals={globals}
          />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return (
    <IndexPage
      posts={posts}
      settings={settings}
      pages={pages}
      globals={globals}
    />
  )
}

export async function getStaticPaths() {
  const slugsPages = (await getAllPagesSlugs()) || []
  const paths = slugsPages.map((slug) => ({ params: { slug } }))

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
  const { preview = false, previewData = {}, params } = ctx

  const [settings, posts = [], pages = [], globals = []] = await Promise.all([
    getSettings(),
    getAllPosts(), // can remove
    getAllPages(params?.slug),
    getAllGlobals(),
  ])

  if (_.isEmpty(pages)) {
    return { notFound: true }
  }

  return {
    props: {
      posts,
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
