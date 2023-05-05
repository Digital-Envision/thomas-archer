import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import {
  getAllGlobals,
  getAllPages,
  getAllProjects,
  getAllProjectSlugs,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import { getAllPagesSlugs } from 'lib/sanity.client'
import { useRouter } from 'next/router'
import _ from 'lodash'
import IndexPageHead from 'components/IndexPageHead'
import Navbar from 'components/organisms/Navbar'
import PageBuilder from 'components/templates/PageBuilder'
import Footer from 'components/organisms/Footer'
import SectionHeroImageBig from 'components/modules/SectionHeroImageBig'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import { PageProps, PreviewData, Query } from 'pages'
import { Box } from '@chakra-ui/react'

const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))

export default function DynamicPage({
  posts,
  settings,
  preview,
  token,
  pages,
  globals,
  projects,
  id,
  project,
}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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
    <Box bgColor="white">
      <IndexPageHead settings={settings} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />

      <SectionHeroImageBig {...project?.page?.SectionHeroImageBig} />
      <SectionBreadcrumbs {...project?.page?.SectionBreadcrumbs} />
      <SectionHeadingParagraphCTA
        {...project?.page?.SectionHeadingParagraphCTA}
      />
      {/* TODO SectionImageGalleryScroll */}
      <PageBuilder pages={[{ content: project?.page?.customPageSection }]} />
      {/* TODO SectionProjectScroll */}
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

export async function getStaticPaths() {
  // const slugsPages = (await getAllPagesSlugs()) || []
  const slugsPages = ['dev', 'portfolio', 'all-component'] // restrict to this
  const slugsProjects = (await getAllProjectSlugs()) || []

  const paths = []

  slugsPages.forEach((slug) => {
    slugsProjects.forEach((id) => {
      paths.push({ params: { slug, id } })
    })
  })

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
    [],
    getAllPages(params?.slug),
    getAllGlobals(),
  ])

  if (_.isEmpty(pages)) {
    return { notFound: true }
  }

  const projects = await getAllProjects('')
  const currentProject = await getAllProjects(params?.id as string)

  return {
    props: {
      id: params?.id,
      posts,
      project: currentProject?.[0],
      projects,
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
