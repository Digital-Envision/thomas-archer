import { Box } from '@chakra-ui/react'
import Divider from 'components/base/Divider'
import Carousel from 'components/modules/Carousel'
import CTAs from 'components/modules/CTAs'
import Section2ColHeading2ColParagraph from 'components/modules/Section2ColHeading2ColParagraph'
import Section2ColImageTextFeaturedImageLeftRight from 'components/modules/Section2ColImageTextFeaturedImageLeftRight'
import Section2ColImageTextMosaicType2 from 'components/modules/Section2ColImageTextMosaicType2'
import SectionAwards from 'components/modules/SectionAwards'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import SectionHeadingParagraphContactForm from 'components/modules/SectionHeadingParagraphContactForm'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionHeadingParagraphCTAImage from 'components/modules/SectionHeadingParagraphCTAImage'
import SectionHeroImageBig from 'components/modules/SectionHeroImageBig'
import SectionHeroImageDefault from 'components/modules/SectionHeroImageDefault'
import SectionHeroVideoBig from 'components/modules/SectionHeroVideoBig'
import SectionImageAwards from 'components/modules/SectionImageAwards'
import SectionImageHeadingCTA from 'components/modules/SectionImageHeadingCTA'
import SectionImageTextMosaicType1 from 'components/modules/SectionImageTextMosaicType1'
import SectionTextFeatured from 'components/modules/SectionTextFeatured'
import FloorPlanListing from 'components/organisms/FloorPlanListing'
import Footer from 'components/organisms/Footer'
import GalleryScroll from 'components/organisms/GalleryScroll'
import Navbar from 'components/organisms/Navbar'
import ProjectScroll from 'components/organisms/ProjectScroll'
import SectionColCards from 'components/organisms/SectionColCards'
import SectionAwardsListing from 'components/organisms/SectionAwardsListing'
import SectionBlog from 'components/organisms/SectionBlog'
import SectionBlogListing from 'components/organisms/SectionBlogListing'
import SectionGridGallery from 'components/organisms/SectionGridGallery'
import SectionInclusions from 'components/organisms/SectionInclusions'
import SectionProjectListing from 'components/organisms/SectionProjectListing'
import SectionVideoParagraphCTA from 'components/organisms/SectionVideoParagraphCTA'
import Steps from 'components/organisms/Steps'
import _ from 'lodash'
import React from 'react'

const PageBuilder = ({ pages, ...rest }) => {
  const page = pages?.[0] //current  page documents
  const content = (page?.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case 'Carousel':
          el = <Carousel {...c} key={i} />
          break
        case 'CTAs':
          el = <CTAs {...c} key={i} />
          break
        case 'Steps':
          el = <Steps {...c} key={i} />
          break
        case 'FloorPlanListing':
          el = <FloorPlanListing floors={rest.floors} key={i} />
          break
        case 'SectionGalleryScroll':
          el = <GalleryScroll {...c} key={i} />
          break
        case 'SectionProjectScroll':
          el = <ProjectScroll {...c} projects={rest.projects} key={i} />
          break
        case 'SectionVideoParagraphCTA':
          el = <SectionVideoParagraphCTA {...c} key={i} />
          break
        case 'SectionHeroImageDefault':
          el = <SectionHeroImageDefault {...c} key={i} />
          break
        case 'SectionBreadcrumbs':
          el = <SectionBreadcrumbs {...c} {...rest} page={page} key={i} />
          break
        case 'SectionHeroImageBig':
          el = <SectionHeroImageBig {...c} key={i} />
          break
        case 'SectionHeroVideoBig':
          el = <SectionHeroVideoBig {...c} key={i} />
          break
        case 'SectionImageHeadingCTA':
          el = <SectionImageHeadingCTA {...c} key={i} />
          break
        case 'SectionHeadingParagraphCTA':
          el = <SectionHeadingParagraphCTA {...c} key={i} />
          break
        case 'Section2ColImageTextFeaturedImageLeftRight':
          el = <Section2ColImageTextFeaturedImageLeftRight {...c} key={i} />
          break
        case 'SectionHeadingParagraphCTAImage':
          el = <SectionHeadingParagraphCTAImage {...c} key={i} />
          break
        case 'SectionImageTextMosaicType1':
          el = <SectionImageTextMosaicType1 {...c} key={i} />
          break
        case 'SectionTextFeatured':
          el = <SectionTextFeatured {...c} key={i} />
          break
        case 'Divider':
          el = <Divider {...c} key={i} />
          break
        case 'SectionColCards':
          el = <SectionColCards {...c} key={i} />
          break
        case 'Section2ColHeading2ColParagraph':
          el = <Section2ColHeading2ColParagraph {...c} key={i} />
          break
        case 'Section2ColImageTextMosaicType2':
          el = <Section2ColImageTextMosaicType2 {...c} key={i} />
          break
        case 'Navbar':
          el = <Navbar {...c} key={i} />
          break
        case 'Footer':
          el = <Footer {...c} key={i} />
          break
        case 'SectionAwards':
          el = <SectionAwards {...c} key={i} />
          break
        case 'SectionImageAwards':
          el = <SectionImageAwards {...c} key={i} />
          break
        case 'SectionGridGallery':
          el = <SectionGridGallery {...c} key={i} />
          break
        case 'SectionAwardsListing':
          el = <SectionAwardsListing {...c} {...rest} key={i} />
          break
        case 'SectionBlog':
          el = <SectionBlog {...c} {...rest} key={i} />
          break
        case 'SectionBlogListing':
          el = <SectionBlogListing {...c} {...rest} key={i} />
          break
        case 'SectionProjectListing':
          el = <SectionProjectListing {...c} {...rest} key={i} />
          break
        case 'SectionInclusions':
          el = <SectionInclusions {...c} key={i} />
          break
        case 'SectionHeadingParagraphContactForm':
          el = <SectionHeadingParagraphContactForm {...c} key={i} />
          break
        case 'fixedComponent':
          switch (c.name) {
            case 'customComponent1':
              el = <div>test fixed customComponent1</div>
              break
            default:
              el = <div>{c?.name}</div>
              break
          }
          break
        default:
          el = null
      }
      return el
    })

  return <Box bgColor="#FFFFFF">{content}</Box>
}

export default PageBuilder
