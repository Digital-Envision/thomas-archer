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
import SectionBookingForm from 'components/organisms/SectionBookingForm'
import SectionParagraph from 'components/modules/SectionParagraph'
import _ from 'lodash'
import React from 'react'
import SectionFeaturedImage from 'components/modules/SectionFeaturedImage'
import CodeEmbed from 'components/base/CodeEmbed'
import ScrollLinks from 'components/modules/ScrollLinks'

const PageBuilder = (props) => {
  const { pages: _page, ...pageProps } = props
  const page = _page?.[0] //current  page documents

  const content = (page?.content || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case 'Carousel':
          el = <Carousel {...c} {...pageProps} key={c?._key} />
          break
        case 'CTAs':
          el = <CTAs {...c} {...pageProps} key={c?._key} />
          break
        case 'Steps':
          el = <Steps {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionFeaturedImage':
          el = <SectionFeaturedImage {...c} {...pageProps} key={c?._key} />
          break
        case 'FloorPlanListing':
          el = (
            <FloorPlanListing
              {...c}
              {...pageProps}
              floors={pageProps.floors}
              key={c?._key}
            />
          )
          break
        case 'SectionGalleryScroll':
          el = <GalleryScroll {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionProjectScroll':
          el = (
            <ProjectScroll
              {...c}
              {...pageProps}
              projects={pageProps.projects}
              key={c?._key}
            />
          )
          break
        case 'SectionVideoParagraphCTA':
          el = <SectionVideoParagraphCTA {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionHeroImageDefault':
          el = <SectionHeroImageDefault {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionBreadcrumbs':
          el = (
            <SectionBreadcrumbs
              {...c}
              {...pageProps}
              page={page}
              key={c?._key}
            />
          )
          break
        case 'SectionHeroImageBig':
          el = <SectionHeroImageBig {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionHeroVideoBig':
          el = <SectionHeroVideoBig {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionImageHeadingCTA':
          el = <SectionImageHeadingCTA {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionHeadingParagraphCTA':
          el = (
            <SectionHeadingParagraphCTA {...c} {...pageProps} key={c?._key} />
          )
          break
        case 'Section2ColImageTextFeaturedImageLeftRight':
          el = (
            <Section2ColImageTextFeaturedImageLeftRight
              {...c}
              {...pageProps}
              key={c?._key}
            />
          )
          break
        case 'SectionHeadingParagraphCTAImage':
          el = (
            <SectionHeadingParagraphCTAImage
              {...c}
              {...pageProps}
              key={c?._key}
            />
          )
          break
        case 'SectionImageTextMosaicType1':
          el = (
            <SectionImageTextMosaicType1 {...c} {...pageProps} key={c?._key} />
          )
          break
        case 'SectionTextFeatured':
          el = <SectionTextFeatured {...c} {...pageProps} key={c?._key} />
          break
        case 'Divider':
          el = <Divider {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionColCards':
          el = <SectionColCards {...c} {...pageProps} key={c?._key} />
          break
        case 'Section2ColHeading2ColParagraph':
          el = (
            <Section2ColHeading2ColParagraph
              {...c}
              {...pageProps}
              key={c?._key}
            />
          )
          break
        case 'Section2ColImageTextMosaicType2':
          el = (
            <Section2ColImageTextMosaicType2
              {...c}
              {...pageProps}
              key={c?._key}
            />
          )
          break
        case 'Navbar':
          el = <Navbar {...c} {...pageProps} key={c?._key} />
          break
        case 'Footer':
          el = <Footer {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionAwards':
          el = <SectionAwards {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionImageAwards':
          el = <SectionImageAwards {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionGridGallery':
          el = <SectionGridGallery {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionAwardsListing':
          el = <SectionAwardsListing {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionBlog':
          el = <SectionBlog {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionBlogListing':
          el = <SectionBlogListing {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionProjectListing':
          el = <SectionProjectListing {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionInclusions':
          el = <SectionInclusions {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionHeadingParagraphContactForm':
          el = (
            <SectionHeadingParagraphContactForm
              {...c}
              {...pageProps}
              key={c?._key}
            />
          )
          break
        case 'SectionBookingForm':
          el = <SectionBookingForm {...c} {...pageProps} key={c?._key} />
          break
        case 'SectionParagraph':
          el = <SectionParagraph {...c} {...pageProps} key={c?._key} />
          break
        case 'CodeEmbed':
          el = <CodeEmbed {...c} {...pageProps} key={c?._key} />
          break
        case 'ScrollLinks':
          el = <ScrollLinks {...c} {...pageProps} page={page} key={c?._key} />
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
