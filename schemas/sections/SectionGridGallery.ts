import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects, getImagesMetaData } from 'lib/utils'
import { ImageAltField, ImageField, ScrollAnchor } from 'schemas/components/fields'
import { TagsField } from '../components/fields'

const name = 'SectionGridGallery'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      items[]{
        ...,
        "imageMetaData": image.asset->{
          ${getImagesMetaData}
        },
      }
   }
`

export default {
    type: 'object',
    name,
    title: 'SectionGridGallery',
    fields: [
        {
            name: 'items',
            type: 'array',
            of: [
                {
                    name: 'item',
                    title: 'Item',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                        },
                        {
                            name: 'location',
                            type: 'string',
                        },
                        { ...ScrollAnchor, title: 'ItemId' },
                        {
                            name: 'product',
                            type: 'string',
                        },
                        TagsField,
                        {
                            ...ImageField,
                            description:
                                'This image will be displayed on the right section.',
                        },
                        ImageAltField,
                    ],
                },
            ],
        },
        {
            name: 'filters',
            type: 'array',
            of: [
                {
                    name: 'filter',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                        },
                        {
                            name: 'filterItems',
                            type: 'array',
                            of: [
                                {
                                    name: 'filterItem',
                                    type: 'string',
                                },
                            ],
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
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionGridGallery`,
            }
        },
    },
}
