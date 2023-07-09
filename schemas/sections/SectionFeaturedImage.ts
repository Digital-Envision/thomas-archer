import { getImagesMetaData } from 'lib/utils'
import { ImageAltField } from 'schemas/components/fields'
import { MarginBottomField, MarginTopField } from '../components/fields'

const name = 'SectionFeaturedImage'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "mobileImageMetaData": mobileImage.asset->{
          ${getImagesMetaData}
      },
      "desktopImageMetaData": desktopImage.asset->{
          ${getImagesMetaData}
      },
   }
`

export default {
    type: 'object',
    name,
    title: 'SectionFeaturedImage',
    fields: [
        { ...ImageAltField },
        {
            name: 'mobileImage',
            title: 'Mobile Image',
            type: 'image',
            options: {
                hotspot: false,
            },
            description: 'It will showing only on mobile screen size',
        },
        {
            name: 'desktopImage',
            title: 'Desktop Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        { ...MarginTopField },
        { ...MarginBottomField },
    ],
    preview: {
        prepare() {
            return {
                title: 'Section Featured Image',
            }
        },
    },
}
