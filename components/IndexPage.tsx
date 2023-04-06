import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  pages?: any[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  // console.log('🔥IndexPage props', props)

  const { preview, loading, posts, settings, pages } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <PageBuilder {...pages} />
        </Container>
      </Layout>
    </>
  )
}
