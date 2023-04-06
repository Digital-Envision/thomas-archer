export default {
    type: 'object',
    name: 'SectionHeadingParagraphContactForm',
    title: 'SectionHeadingParagraphContactForm',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        }
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionHeadingParagraphContactForm`
            }
        }
    }
}