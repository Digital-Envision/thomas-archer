export default {
    type: 'object',
    name: 'ArticleBlogCard',
    title: 'ArticleBlogCard',
    fields: [
        {
            name: 'heading',
            type: 'string',
        },
        {
            name: 'paragraph',
            type: 'text',
        },
        {
            name: 'createdAt',
            type: 'date',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
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
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `ArticleBlogCard: ${disabled ? 'DISABLED' : title}`,
            }
        },
    },
}
