import type { Floor } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'
import { Box } from '@chakra-ui/react'
import SectionHeroImageDefault from 'components/modules/SectionHeroImageDefault'
import FloorPlanDetails from 'components/organisms/FloorPlanDetails/index'
import GalleryScroll from 'components/organisms/GalleryScroll'
import { HeightVariants } from 'components/base/Divider'
import { RouteDetail } from 'utils/interfaces'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import IndexPageHead from 'components/IndexPageHead'
import ExitPreviewButton from 'components/ExitPreviewButton'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import { BlogListingCardProps } from 'components/modules/BlogListingCard'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeadingTagSemantic } from 'components/base/Heading1'

export interface FloorPageProps {
  settings: any
  preview?: boolean
  loading?: boolean
  pages?: any[]
  globals?: any
  //settings: Settings
  floors?: Floor
  projects?: ProjectListingCardProps
  blogs?: BlogListingCardProps
  awardedProjects?: ProjectListingCardProps
  routeDetail: RouteDetail
}

export default function FloorPageTemplate(props: FloorPageProps) {
  const { settings, preview, pages, globals, floors, routeDetail } = props // rest should be projects..etc

  return (
    <Box bgColor="#FFFFFF">
      {preview && <ExitPreviewButton />}
      <IndexPageHead settings={settings} pageData={floors} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
        hubspot={globals.Hubspot}
      />
      <Box flex={1}>
        {floors?.bannerImage?.image && (
          <SectionHeroImageDefault
            image={floors?.bannerImage?.image}
            isOverlay={floors?.bannerImage?.isOverlay}
            marginTop={HeightVariants.none}
            marginBottom={HeightVariants.less}
          />
        )}
        <SectionBreadcrumbs
          marginTop={HeightVariants.less}
          marginBottom={HeightVariants.more}
        />
        <FloorPlanDetails
          {...floors}
          marginTop={HeightVariants.more}
          marginBottom={HeightVariants.extra}
          hubspot={globals?.Hubspot}
        />
        {floors?.facades && floors?.facades?.listImages?.length > 0 && (
          <Box
            marginTop={HeightVariants.extra}
            marginBottom={HeightVariants.extra}
          >
            <SectionHeadingParagraphCTA
              isOffset={false}
              heading={'Facade Options'}
              headingTagLevel={HeadingTagSemantic.H2}
            />
            <Box mt={'66px'}>
              <GalleryScroll listImages={floors?.facades?.listImages} />
            </Box>
          </Box>
        )}
      </Box>

      <PageBuilder
        pages={[{ content: floors?.customPageSection }]}
        projects={props.projects}
        blogs={props.blogs}
        awardedProjects={props.awardedProjects}
      />

      <Footer
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        footer={globals.Footer}
        hubspot={globals?.Hubspot}
      />
    </Box>
  )
}
