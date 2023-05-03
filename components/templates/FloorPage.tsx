import IndexPageHead from 'components/IndexPageHead'
import type { Floor, Post, Project, Settings } from 'lib/sanity.queries'
import PageBuilder from 'components/templates/PageBuilder'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'
import { Box } from '@chakra-ui/react'
import SectionHeroImageDefault from 'components/modules/SectionHeroImageDefault'
import { useEffect } from 'react'
import FloorPlanDetails from 'components/organisms/FloorPlanDetails'
import GalleryScroll from 'components/organisms/GalleryScroll'
import { HeightVariants } from 'components/base/Divider'

export interface FloorPageProps {
  preview?: boolean
  loading?: boolean
  pages?: any[]
  globals?: any
  //settings: Settings
  floors?: Floor
}

export default function FloorPageTemplate(props: FloorPageProps) {
  const { pages, globals, floors } = props // rest should be projects..etc

  return (
    <>
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
            marginTop={floors?.bannerImage?.marginTop}
            marginBottom={
              floors?.bannerImage?.marginBottom
                ? floors?.bannerImage?.marginBottom
                : HeightVariants.less
            }
          />
        )}
        <FloorPlanDetails floors={floors?.floorPlan?.listSizes[0]} />
        {floors?.facades && (
          <GalleryScroll listImages={floors?.facades?.listImages} />
        )}
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
