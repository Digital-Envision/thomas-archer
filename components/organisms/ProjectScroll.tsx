import React from 'react'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { HeadingTagSemantic } from 'components/base/Heading1'

const ProjectScroll = () => {
  return (
    <>
      <SectionHeadingParagraphCTA
        isOffset={false}
        heading={'Explore our portofolios'}
        headingTagLevel={HeadingTagSemantic.H1}
        paragraph={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis orci viverra, efficitur nunc in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        buttonText="Why Thomas Archer"
        buttonLink="#"
      />
    </>
  )
}

export default ProjectScroll
