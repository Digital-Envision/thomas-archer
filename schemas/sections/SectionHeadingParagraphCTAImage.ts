export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTAImage',
    title: 'SectionHeadingParagraphCTAImage',
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
            description:
                'This image will be displayed on the right section.',
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
                title: `SectionHeadingParagraphCTAImage: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
