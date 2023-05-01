import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionInclusions',
    title: 'SectionInclusions',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'headingTagLevel',
            title: 'Heading Tag Level',
            type: 'string',
            options: {
                list: [
                    'H1', 'H2', 'H3'
                ],
            },
        },
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
                            name: 'heading',
                            type: 'string'
                        },
                        {
                            name: 'paragraph',
                            type: 'string'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: false,
                            },
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
                title: `SectionInclusions`
            }
        }
    }
}