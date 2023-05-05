import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import moment from 'moment'
import {
  getAllBioSlugs,
  getAllBlogs,
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
import { PortableText } from '@portabletext/react'
import Heading3 from 'components/base/Heading3'
import Text from 'components/base/Text'
import { Box, Flex } from '@chakra-ui/react'
import Heading1 from 'components/base/Heading1'

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
  blog,
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
    <Box bgColor="#FFFFFF">
      <IndexPageHead settings={settings} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />
      <SectionBreadcrumbs {...blog?.page?.SectionBreadcrumbs} />

      <Box pb={'4rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
      >
        <Heading1>{blog?.heading}</Heading1>
      </Flex>

      <Box pb={'2rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
      >
        <Text mb="4" fontSize={'10px'} color={'#898989'}>
          {moment(blog?.createdAt).format('DD MMMM YYYY')}
        </Text>
      </Flex>

      <Box pb={'1.5rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
        direction={'column'}
      >
        <PortableText value={blog?.content} />
      </Flex>
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
  const slugsPages = ['dev', 'all-component', 'blog'] // restrict to this
  const slugsBlogs = (await getAllBioSlugs()) || []

  const paths = []

  slugsPages.forEach((slug) => {
    slugsBlogs.forEach((id) => {
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

  const currentBlog = await getAllBlogs(params?.id as string)

  return {
    props: {
      id: params?.id,
      posts,
      blog: currentBlog?.[0],
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
