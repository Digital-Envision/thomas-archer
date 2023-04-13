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
            name: 'slug',
            description: 'page can be access: https://thomas-archer.netlify.app/[slug]',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
        },
        {
            name: 'content',
            type: 'array',
            title: 'Page sections',
            description: 'Add, edit, and reorder sections',
            of: [
                { type: 'SectionHeroImageDefault' },
                { type: 'SectionHeroImageBig' },
                { type: 'Carousel' },
                { type: 'SectionImageHeadingCTA' },
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
                { type: 'SectionGridGallery' },
                // { type: 'fixedComponent' },
            ],
        },
    ],
}
