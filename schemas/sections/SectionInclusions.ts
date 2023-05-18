import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionInclusions',
    title: 'SectionInclusions',
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
                            name: 'heading',
                            type: 'string'
                        },
                        {
                            name: 'paragraph',
                            type: 'text'
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
            name: 'brochure',
            title: 'Brochure',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'file',
                    title: 'File',
                    type: 'file',
                    options: {
                        accept: '.pdf',
                        // accept: '.png,.jpeg,.jpg,.pdf,.doc,.docx,.xls,.xlsx',
                        storeOriginalFilename: true
                    },
                },
                {
                    name: 'isFileDownloadable',
                    title: 'Is File Downloadable?',
                    type: 'boolean',
                    hidden: ({ parent }) => !parent?.file,
                    description: 'if toggled off, download button will be hidden',
                },
            ]
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'label',
                    title: 'Name',
                    type: 'string',
                },
            ],
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