export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTA',
    title: 'SectionHeadingParagraphCTA',
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'paragraph',
            type: 'text',
        },
        // TODO add isOffset 
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionHeadingParagraphCTA: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
