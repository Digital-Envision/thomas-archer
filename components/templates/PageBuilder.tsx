import { Flex } from '@chakra-ui/react'
import Divider from 'components/base/Divider'
import Carousel from 'components/modules/Carousel'
import Section2ColHeading2ColParagraph from 'components/modules/Section2ColHeading2ColParagraph'
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
import Footer from 'components/organisms/Footer'
import Navbar from 'components/organisms/Navbar'
import Section2ColCards from 'components/organisms/Section2ColCards'
import Section3ColsCards from 'components/organisms/Section3ColsCards'
import SectionBlog from 'components/organisms/SectionBlog'
import SectionGridGallery from 'components/organisms/SectionGridGallery'
import SectionInclusions from 'components/organisms/SectionInclusions'
import SectionProjectListing from 'components/organisms/SectionProjectListing'
import React from 'react'

const PageBuilder = ({ pages, ...rest }) => {
  const content = (pages?.[0]?.content || [])
    .filter((c) => !c.disabled)
    .map((c) => {
      let el = null
      switch (c._type) {
        case 'Carousel':
          el = <Carousel {...c} />
          break
        case 'SectionHeroImageDefault':
          el = <SectionHeroImageDefault {...c} />
          break
        case 'SectionBreadcrumbs':
          el = <SectionBreadcrumbs {...c} />
          break
        case 'SectionHeroImageBig':
          el = <SectionHeroImageBig {...c} />
          break
        case 'SectionHeroVideoBig':
          el = <SectionHeroVideoBig {...c} />
          break
        case 'SectionImageHeadingCTA':
          el = <SectionImageHeadingCTA {...c} />
          break
        case 'SectionHeadingParagraphCTA':
          el = <SectionHeadingParagraphCTA {...c} />
          break
        case 'SectionHeadingParagraphCTAImage':
          el = <SectionHeadingParagraphCTAImage {...c} />
          break
        case 'SectionImageTextMosaicType1':
          el = <SectionImageTextMosaicType1 {...c} />
          break
        case 'SectionTextFeatured':
          el = <SectionTextFeatured {...c} />
          break
        case 'Divider':
          el = <Divider {...c} />
          break
        case 'Section3ColsCards':
          el = <Section3ColsCards {...c} />
          break
        case 'Section2ColCards':
          el = <Section2ColCards {...c} />
          break
        case 'Section2ColHeading2ColParagraph':
          el = <Section2ColHeading2ColParagraph {...c} />
          break
        case 'Section2ColImageTextMosaicType2':
          el = <Section2ColImageTextMosaicType2 {...c} />
          break
        case 'Navbar':
          el = <Navbar {...c} />
          break
        case 'Footer':
          el = <Footer {...c} />
          break
        case 'SectionAwards':
          el = <SectionAwards {...c} />
          break
        case 'SectionImageAwards':
          el = <SectionImageAwards {...c} />
          break
        case 'SectionGridGallery':
          el = <SectionGridGallery {...c} />
          break
        case 'SectionBlog':
          el = <SectionBlog {...c} />
          break
        case 'SectionProjectListing':
          el = <SectionProjectListing {...c} {...rest} />
          break
        case 'SectionInclusions':
          el = <SectionInclusions {...c} />
          break
        case 'SectionHeadingParagraphContactForm':
          el = <SectionHeadingParagraphContactForm {...c} />
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

  return <div>{content}</div>
}

export default PageBuilder
