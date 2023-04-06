export default {
    type: 'object',
    name: 'SectionBlog',
    title: 'SectionBlog',
    fields: [
        {
            name: 'SectionHeadingParagraphCTA',
            title: 'SectionHeadingParagraphCTA',
            type: 'SectionHeadingParagraphCTA',
        },
        {
            name: 'Section3ColsCards',
            title: 'Section3ColsCards',
            type: 'Section3ColsCards',
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
                title: `SectionBlog`
            }
        }
    }
}