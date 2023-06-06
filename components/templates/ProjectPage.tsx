import _ from 'lodash'
import IndexPageHead from 'components/IndexPageHead'
import Navbar from 'components/organisms/Navbar'
import PageBuilder from 'components/templates/PageBuilder'
import Footer from 'components/organisms/Footer'
import SectionHeroImageBig from 'components/modules/SectionHeroImageBig'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
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
import ExitPreviewButton from 'components/ExitPreviewButton'
import { Variants } from 'components/base/Button'

// TODO FIX page props
export default function ProjectPageTemplate(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { settings, preview, globals, projects, project, routeDetail } = props

  return (
    <Box bgColor="white">
      {preview && <ExitPreviewButton variant={Variants.black} />}
      <IndexPageHead settings={settings} seo={project?.seo} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />

      <SectionHeroImageBig
        bannerImage={project?.image}
        isVideo={project?.video?.bannerVideo || project?.video?.isExternalVideo}
        isExternalVideo={!!project?.video?.externalVideo}
        externalVideo={project?.video?.externalVideo}
        bannerVideo={project?.video?.bannerVideo}
        {...project?.SectionHeroImageBig}
      />

      <SectionBreadcrumbs
        routeDetail={routeDetail}
        marginTop={HeightVariants.less}
        marginBottom={HeightVariants.less}
      />

      {(project?.heading ||
        project?.paragraph ||
        project?.SectionHeadingParagraphCTA?.embeddedVideo) && (
        <SectionHeadingParagraphCTA
          heading={project?.heading}
          paragraph={project?.paragraph}
          // if embeddedVideo exist, show view
          {...(project?.SectionHeadingParagraphCTA?.embeddedVideo && {
            customButton: {
              label: 'View Video',
              fn: () => {
                onOpen()
              },
            },
          })}
          marginBottom={HeightVariants.more}
        />
      )}

      {!_.isEmpty(project?.SectionGalleryScroll) && (
        <GalleryScroll {...project?.SectionGalleryScroll} />
      )}

      <PageBuilder pages={[{ content: project?.customPageSection }]} />

      {!_.isEmpty(project?.award) && (
        <SectionImageAwards
          image={project?.award?.awardImage}
          awards={project?.award?.awards}
          marginTop={HeightVariants.extra}
          marginBottom={HeightVariants.more}
        />
      )}

      {!_.isEmpty(projects) && (
        <ProjectScroll
          {...project?.SectionProjectScroll}
          heading="Related Projects"
          projects={projects}
          marginTop={HeightVariants.extra}
          marginBottom={HeightVariants.more}
        />
      )}
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
              externalVideo={project?.SectionHeadingParagraphCTA?.embeddedVideo}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
