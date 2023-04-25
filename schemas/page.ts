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
            type: 'customPageSection',
            title: 'Page sections',
            description: 'Add, edit, and reorder sections',

        },
    ],
}
