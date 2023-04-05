import { PreviewSuspense } from '@sanity/preview-kit'
import GalleryPage from 'components/GalleryPage'
import { getAllPages, getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

interface PageProps {
  posts: Post[]
  pages: any[]
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

export default function Gallery(props: PageProps) {
  console.log('✅pages/GalleryPage', props)
  const { posts, settings, preview, token, pages } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <GalleryPage loading preview settings={settings} pages={pages} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <GalleryPage settings={settings} pages={pages} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = [], pages = []] = await Promise.all([
    getSettings(),
    getAllPosts(), // can remove
    getAllPages('Gallery'),
  ])

  return {
    props: {
      posts,
      settings,
      pages,
      preview,
      token: previewData.token ?? null,
    },
  }
}
