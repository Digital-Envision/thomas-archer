import Divider from 'components/base/Divider'
import SectionAwards from 'components/modules/SectionAwards'
import SectionHeadingParagraphContactForm from 'components/modules/SectionHeadingParagraphContactForm'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionHeadingParagraphCTAImage from 'components/modules/SectionHeadingParagraphCTAImage'
import SectionImageTextMosaicType1 from 'components/modules/SectionImageTextMosaicType1'
import SectionTextFeatured from 'components/modules/SectionTextFeatured'
import Footer from 'components/organisms/Footer'
import Navbar from 'components/organisms/Navbar'
import Section3ColsCards from 'components/organisms/Section3ColsCards'
import SectionBlog from 'components/organisms/SectionBlog'
import React, { useState } from 'react'

const PageBuilder = (props) => {
  // console.log('🔥PageBuilder props', props)

  const content = (props?.[0]?.content || [])
    .filter((c) => !c.disabled)
    .map((c) => {
      let el = null
      switch (c._type) {
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
        case 'Navbar':
          el = <Navbar {...c} />
          break
        case 'Footer':
          el = <Footer {...c} />
          break
        case 'SectionAwards':
          el = <SectionAwards {...c} />
          break
        // case 'SectionBlog':
        //   el = <SectionBlog {...c} />
        //   break
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
