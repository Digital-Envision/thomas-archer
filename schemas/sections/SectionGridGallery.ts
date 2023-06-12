import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
import { ImageAltField, ImageField } from 'schemas/components/fields';
export default {
    type: 'object',
    name: 'SectionGridGallery',
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
                            type: 'string'
                        },
                        {
                            name: 'location',
                            type: 'string'
                        },
                        {
                            name: 'product',
                            type: 'string'
                        },

                        {   // should a dependencies from parent filterItems, at least can search the existing filterItems.
                            name: 'tags',
                            type: 'array',
                            options: {
                                layout: 'tags'
                            },
                            of: [
                                {
                                    name: 'tag',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            ...ImageField,
                            description:
                                'This image will be displayed on the right section.',
                        },
                        ImageAltField,
                    ]
                }
            ]
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
                            type: 'string'
                        },
                        {
                            name: 'filterItems',
                            type: 'array',
                            of: [
                                {
                                    name: 'filterItem',
                                    type: 'string'
                                }
                            ]
                        },

                    ]
                }
            ]
        },
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionGridGallery`
            }
        }
    }
}