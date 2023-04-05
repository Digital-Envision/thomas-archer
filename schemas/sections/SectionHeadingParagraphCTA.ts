export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTA',
    title: 'SectionHeadingParagraphCTA',
    fields: [
        {
            name: 'heading',
            type: 'string'
        },
        {
            name: 'paragraph',
            type: 'string'
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
