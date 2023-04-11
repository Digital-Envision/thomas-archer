import IndexPageHead from 'components/IndexPageHead'
import type { Post, Settings } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from './organisms/Navbar'
import Footer from './organisms/Footer'
import { Box } from '@chakra-ui/react'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  pages?: any[]
  globals?: any[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { settings, pages, globals } = props

  return (
    <>
      <IndexPageHead settings={settings} />
      <Navbar links={globals} />
      <Box flex={1}>
        <PageBuilder {...pages} />
      </Box>
      <Footer links={globals} />
    </>
  )
}
