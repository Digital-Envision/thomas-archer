import type { Floor } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'
import { Box } from '@chakra-ui/react'
import SectionHeroImageDefault from 'components/modules/SectionHeroImageDefault'
import FloorPlanDetails from 'components/organisms/FloorPlanDetails'
import GalleryScroll from 'components/organisms/GalleryScroll'
import { HeightVariants } from 'components/base/Divider'
import { RouteDetail } from 'utils/interfaces'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import IndexPageHead from 'components/IndexPageHead'

export interface FloorPageProps {
  settings: any
  preview?: boolean
  loading?: boolean
  pages?: any[]
  globals?: any
  //settings: Settings
  floors?: Floor
  routeDetail: RouteDetail
}

export default function FloorPageTemplate(props: FloorPageProps) {
  const { settings, pages, globals, floors, routeDetail } = props // rest should be projects..etc

  return (
    <>
      <IndexPageHead settings={settings} seo={floors?.seo} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
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
        />
        {floors?.facades && floors?.facades?.listImages?.length > 0 && (
          <GalleryScroll
            listImages={floors?.facades?.listImages}
            marginTop={HeightVariants.extra}
            marginBottom={HeightVariants.extra}
          />
        )}
      </Box>

      <PageBuilder pages={[{ content: floors?.customPageSection }]} />

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
