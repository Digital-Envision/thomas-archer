import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

export const headingField = (title?) => ({
    name: 'heading',
    type: 'text',
    ...(title && { title: title }),
})

export const paragraphField = (title?) => ({
    name: 'paragraph',
    type: 'text',
    ...(title && { title: title }),
})

export const fields = [
    headingField(),
    {
        name: 'headingTagLevel',
        title: 'Heading Tag Level',
        type: 'string',
        options: {
            list: ['H1', 'H2', 'H3'],
        },
    },
    paragraphField(),
    {
        name: 'isOffset',
        type: 'boolean',
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
        name: 'button2',
        title: 'Button 2',
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
]

export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTA',
    title: 'SectionHeadingParagraphCTA',
    fields,
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionHeadingParagraphCTA: ${disabled ? 'DISABLED' : title
                    }`,
            }
        },
    },
}
