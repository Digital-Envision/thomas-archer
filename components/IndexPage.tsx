import IndexPageHead from 'components/IndexPageHead'
import type { Floor, Blog, Post, Project, Settings } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from './organisms/Navbar'
import Footer from './organisms/Footer'
import { Box } from '@chakra-ui/react'
import { ProjectListingCardProps } from './modules/ProjectListingCard'
import { BlogListingCardProps } from './modules/BlogListingCard'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  pages?: any[]
  globals?: any
  settings: Settings
  projects?: ProjectListingCardProps
  awardedProjects?: ProjectListingCardProps
  blogs?: BlogListingCardProps
  floors?: Floor[]
}

export default function IndexPage(props: IndexPageProps) {
  const { settings, pages, globals, ...rest } = props // rest should be projects..etc

  return (
    <Box bgColor="#FFFFFF">
      <IndexPageHead settings={settings} seo={pages?.[0]?.seo} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />
      <Box flex={1}>
        <PageBuilder pages={pages} {...rest} />
      </Box>
      <Footer
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        footer={globals.Footer}
      />
    </Box>
  )
}
