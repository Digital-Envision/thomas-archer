import IndexPageHead from 'components/IndexPageHead'
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
  const { settings, pages } = props

  return (
    <>
      <IndexPageHead settings={settings} />
      <PageBuilder {...pages} />
    </>
  )
}
