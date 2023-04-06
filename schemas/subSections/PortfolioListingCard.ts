export default {
    type: 'object',
    name: 'ProjectListingCard',
    title: 'ProjectListingCard',
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
                title: `ProjectListingCard: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
