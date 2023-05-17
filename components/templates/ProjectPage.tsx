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

export default function ProjectPageTemplate(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { settings, preview, pages, globals, projects, project } = props // rest should be projects..etc

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
