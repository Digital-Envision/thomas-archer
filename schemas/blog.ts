import { getImagesMetaData } from 'lib/utils'
import {
    CreatedDateField,
    HeadingField,
    ImageAltField,
    ImageField,
    RTFAnnotationLink,
    RTFField,
    SEOField,
    SlugField,
    TagsField,
} from './components/fields'
import { DOCUMENT_TYPE_SCHEMA_NAME } from './global/DetailsPage'
import { listImagesFields } from './sections/SectionGalleryScroll'

const name = DOCUMENT_TYPE_SCHEMA_NAME.Blog

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "imageMetaData": image.asset->{
          ${getImagesMetaData}
      },
   }
`

export default {
    type: 'document',
    title: 'Blog',
    name,
    fields: [
        CreatedDateField,
        SlugField,
        HeadingField,
        {
            ...RTFField,
            of: [
                {
                    type: 'block',
                    marks: {
                        annotations: [RTFAnnotationLink],
                    },
                },
                {
                    type: 'image',
                },
                {
                    name: 'externalVideo',
                    type: 'object',
                    title: 'Vimeo/YouTube Embed Url',
                    fields: [
                        {
                            name: 'url',
                            type: 'url',
                        },
                    ],
                },
            ],
        },
        TagsField,
        ImageField,
        ImageAltField,
        {
            name: 'page',
            title: 'Detail Page',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'SectionGalleryScroll',
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    fields: [listImagesFields()],
                },
            ],
        },
        SEOField
    ],
}
