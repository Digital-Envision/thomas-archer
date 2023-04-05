import Divider from 'components/base/Divider'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionHeadingParagraphCTAImage from 'components/modules/SectionHeadingParagraphCTAImage'
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
        case 'Divider':
          el = <Divider {...c} />
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
