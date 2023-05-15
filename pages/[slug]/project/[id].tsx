import {
  getAllGlobals,
  getAllPages,
  getAllProjects,
  getAllProjectSlugs,
  getSanityData,
  getSettings,
} from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
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
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import GalleryScroll from 'components/organisms/GalleryScroll'
import ProjectScroll from 'components/organisms/ProjectScroll'
import { EmbeddedVideoPlayer } from 'components/modules/SectionHeroVideoBig'
import { HeightVariants } from 'components/base/Divider'
import SectionImageAwards from 'components/modules/SectionImageAwards'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <SectionBreadcrumbs
        {...project?.page?.SectionBreadcrumbs}
        marginTop={HeightVariants.less}
        marginBottom={HeightVariants.less}
      />
      <SectionHeadingParagraphCTA
        {...project?.page?.SectionHeadingParagraphCTA}
        // if embeddedVideo exist, show view
        {...(project?.page?.SectionHeadingParagraphCTA?.embeddedVideo && {
          customButton: {
            label: 'View Video',
            fn: () => {
              onOpen()
            },
          },
        })}
        marginBottom={HeightVariants.less}
      />
      <GalleryScroll {...project?.page?.SectionGalleryScroll} />
      <PageBuilder pages={[{ content: project?.page?.customPageSection }]} />

      {!_.isEmpty(project?.award) && (
        <SectionImageAwards
          image={project?.award?.awardImage}
          awards={project?.award?.awards}
          marginTop={HeightVariants.extra}
          marginBottom={HeightVariants.more}
        />
      )}

      <ProjectScroll
        {...project?.page?.SectionProjectScroll}
        heading="Related Projects"
        projects={projects}
        marginTop={HeightVariants.extra}
        marginBottom={HeightVariants.more}
      />
      <Footer
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        footer={globals.Footer}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="56rem">
          <ModalHeader pb={'2rem'}>
            <Box>
              <ModalCloseButton />
            </Box>
          </ModalHeader>
          <ModalBody p={0} m={0} borderRadius="md">
            <EmbeddedVideoPlayer
              externalVideo={
                project?.page?.SectionHeadingParagraphCTA?.embeddedVideo
              }
            />
          </ModalBody>
        </ModalContent>
      </Modal>
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

  const currentProject = (
    await getAllProjects({ slug: params?.id as string })
  )[0]

  // if isSelectedProject toggled, get 3 selected projects
  const selectedProjectsRef =
    currentProject?.page?.SectionProjectScroll?.isSelectedProject &&
    _.map(currentProject?.page?.SectionProjectScroll?.selectedProjects, '_ref')

  // if toggled: selected projects, or else get latest 12 projects
  const projects = !_.isEmpty(selectedProjectsRef)
    ? ((await getSanityData({
        type: 'projects',
        condition: `&& slug.current != null && _id != "${currentProject?._id}" && _id in $ids`,
        params: { ids: selectedProjectsRef },
      })) as any)
    : ((await getSanityData({
        type: 'projects',
        condition: `&& slug.current != null && _id != "${currentProject?._id}"`,
        limit: 12,
      })) as any)

  const selectedProjectsKeys =
    currentProject.page?.SectionProjectScroll?.isSelectedProject &&
    currentProject.page?.SectionProjectScroll?.selectedProjects

  const sortedProjects = !_.isEmpty(selectedProjectsKeys)
    ? _.sortBy(projects, (project) => {
        // this will sort fetched projects, according to configured on selectedProjects array
        const ref = selectedProjectsKeys.find(
          (selected) => selected._ref === project._id
        )
        return selectedProjectsKeys.indexOf(ref)
      })
    : projects // projects already sorted on groq level

  return {
    props: {
      id: params?.id,
      posts,
      project: currentProject,
      projects: sortedProjects,
      settings,
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
