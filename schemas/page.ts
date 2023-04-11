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
                { type: 'SectionHeroImageDefault' },
                { type: 'SectionHeroImageBig' },
                { type: 'SectionHeadingParagraphCTA' },
                { type: 'SectionHeadingParagraphCTAImage' },
                { type: 'Divider' },
                { type: 'Section3ColsCards' },
                // { type: 'SectionBlog' }, //TODO LATER SPRINT 3
                { type: 'SectionProjectListing' },
                { type: 'SectionHeadingParagraphContactForm' },
                { type: 'SectionAwards' },
                { type: 'SectionTextFeatured' },
                { type: 'SectionImageTextMosaicType1' },
                { type: 'SectionImageAwards' },
                // { type: 'fixedComponent' },
            ],
        },
    ],
}
