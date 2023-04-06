export default {
    type: 'object',
    name: 'PortfolioCard',
    title: 'PortfolioCard',
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'subHeading',
            type: 'text',
        },
        {
            name: 'description',
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
                title: `PortfolioCard: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
