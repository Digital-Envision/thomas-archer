export default {
    type: 'document',
    name: 'page',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Page sections',
            description: 'Add, edit, and reorder sections',
            of: [
                { type: 'SectionHeadingParagraphCTA' },
                { type: 'SectionHeadingParagraphCTAImage' },
                { type: 'Divider' },
                { type: 'Section3ColsCards' },
                // { type: 'SectionBlog' }, //TODO LATER
                { type: 'SectionHeadingParagraphContactForm' },
                { type: 'SectionAwards' },
                { type: 'SectionTextFeatured' },
                { type: 'SectionImageTextMosaicType1' },
                // { type: 'fixedComponent' },
            ],
        },
    ],
}
