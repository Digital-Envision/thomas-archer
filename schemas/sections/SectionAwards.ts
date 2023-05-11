import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionAwards',
    title: 'SectionAwards',
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
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
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
                        }
                    ]
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
                {
                    name: 'useInternal',
                    title: 'Use Internal Link Pages',
                    type: 'boolean',
                },
                {
                    name: 'externalHref',
                    title: 'External Link',
                    type: 'url',
                    hidden: ({ parent }) => parent?.useInternal,
                },
                {
                    name: 'internalHref',
                    title: 'Internal Link',
                    type: 'reference',
                    to: [{ type: 'page' }],
                    hidden: ({ parent }) => !parent?.useInternal,
                },
                {
                    name: 'isExternal',
                    title: 'New Tab Link',
                    type: 'boolean',
                    initialValue: false,
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
                title: `SectionAwards`
            }
        }
    }
}