import { queryImageMetaData as authorQueryImageMetaData } from 'schemas/author'
import { queryImageMetaData as facadeQueryImageMetaData } from 'schemas/facade'
import { queryImageMetaData as blogQueryImageMetaData } from 'schemas/blog'
import { queryImageMetaData as CarouselImageMetaData } from 'schemas/sections/Carousel'
import { queryImageMetaData as Section2ColHeading2ColParagraphImageMetaData } from 'schemas/sections/Section2ColHeading2ColParagraph'
import { queryImageMetaData as Section2ColImageTextFeaturedImageLeftRightImageMetaData } from 'schemas/sections/Section2ColImageTextFeaturedImageLeftRight'
import { queryImageMetaData as Section2ColImageTextMosaicType2ImageMetaData } from 'schemas/sections/Section2ColImageTextMosaicType2'
import { queryImageMetaData as SectionAwardsImageMetaData } from 'schemas/sections/SectionAwards'
import { queryImageMetaData as SectionBookingFormImageMetaData } from 'schemas/sections/SectionBookingForm'
import { queryImageMetaData as SectionFeaturedImageImageMetaData } from 'schemas/sections/SectionFeaturedImage'
import { queryImageMetaData as SectionGalleryScrollImageMetaData } from 'schemas/sections/SectionGalleryScroll'
import { queryImageMetaData as SectionGridGalleryImageMetaData } from 'schemas/sections/SectionGridGallery'
import { queryImageMetaData as SectionHeadingParagraphCTAImageImageMetaData } from 'schemas/sections/SectionHeadingParagraphCTAImage'
import { queryImageMetaData as SectionHeroImageBigMetaData } from 'schemas/sections/SectionHeroImageBig'
import { queryImageMetaData as SectionHeroImageDefaultMetaData } from 'schemas/sections/SectionHeroImageDefault'
import { queryImageMetaData as SectionHeroVideoBigMetaData } from 'schemas/sections/SectionHeroVideoBig'
import { queryImageMetaData as SectionImageAwardsMetaData } from 'schemas/sections/SectionImageAwards'
import { queryImageMetaData as SectionImageHeadingCTAMetaData } from 'schemas/sections/SectionImageHeadingCTA'
import { queryImageMetaData as SectionImageTextMosaicType1MetaData } from 'schemas/sections/SectionImageTextMosaicType1'
import { queryImageMetaData as SectionInclusionsMetaData } from 'schemas/sections/SectionInclusions'
import { queryImageMetaData as SectionVideoParagraphCTAMetaData } from 'schemas/sections/SectionVideoParagraphCTA'
import { queryImageMetaData as floorMetaData } from 'schemas/floor'

export const imageMetaData = `
  ${authorQueryImageMetaData},
  ${facadeQueryImageMetaData},
  ${blogQueryImageMetaData},
  ${CarouselImageMetaData},
  ${Section2ColHeading2ColParagraphImageMetaData},
  ${Section2ColImageTextFeaturedImageLeftRightImageMetaData},
  ${Section2ColImageTextMosaicType2ImageMetaData},
  ${SectionAwardsImageMetaData},
  ${SectionBookingFormImageMetaData},
  ${SectionFeaturedImageImageMetaData},
  ${SectionGalleryScrollImageMetaData},
  ${SectionGridGalleryImageMetaData},
  ${SectionHeadingParagraphCTAImageImageMetaData},
  ${SectionHeroImageBigMetaData},
  ${SectionHeroImageDefaultMetaData},
  ${SectionHeroVideoBigMetaData},
  ${SectionImageAwardsMetaData},
  ${SectionImageHeadingCTAMetaData},
  ${SectionImageTextMosaicType1MetaData},
  ${SectionInclusionsMetaData},
  ${SectionVideoParagraphCTAMetaData},
  ${floorMetaData}
`
