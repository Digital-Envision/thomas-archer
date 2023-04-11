export default {
    type: 'object',
    name: 'ArticleBlogCard',
    title: 'ArticleBlogCard',
    fields: [
        {
            name: 'heading',
            type: 'text',
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
            options: {
                hotspot: false,
            },
        },
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `ArticleBlogCard: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
