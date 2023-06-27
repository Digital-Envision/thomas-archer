import { ImageAltField } from './../components/fields'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects, getImagesMetaData } from 'lib/utils'
import { ImageField } from 'schemas/components/fields'

const name = 'SectionImageAwards'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "imageMetaData": image.asset->{
          ${getImagesMetaData}
      },
   }
`

export default {
    type: 'object',
    name,
    title: 'SectionImageAwards',
    fields: [
        ImageField,
        ImageAltField,
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [
                {
                    name: 'award',
                    title: 'Award',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
    ],
    preview: {
        select: {
            title: 'leftHeading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionImageAwards`,
            }
        },
    },
}
