import IndexPageHead from 'components/IndexPageHead'
import type { Post, Project, Settings } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from './organisms/Navbar'
import Footer from './organisms/Footer'
import { Box } from '@chakra-ui/react'
import FloorPlanListing from './organisms/FloorPlanListing'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  pages?: any[]
  globals?: any
  settings: Settings
  projects?: Project[]
}

export default function IndexPage(props: IndexPageProps) {
  const { settings, pages, globals, ...rest } = props // rest should be projects..etc

  return (
    <>
      <IndexPageHead settings={settings} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />
      <Box flex={1}>
        <PageBuilder pages={pages} {...rest} />
        <FloorPlanListing />
      </Box>
      <Footer
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        footer={globals.Footer}
      />
    </>
  )
}
