import { SEOSchema } from "./components/fields";

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
            description:
                'page can be access: https://thomas-archer.netlify.app/[slug]',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) =>
                    context.defaultIsUnique(value, context),
            },
        },
        {
            name: 'isSubNav',
            description: 'to set if the page is the subpage of page',
            type: 'boolean',
            title: 'Is SubPage',
        },
        {
            name: 'subPage',
            title: 'SubPage of',
            type: 'reference',
            to: [{ type: 'page' }],
            hidden: ({ parent }) => !parent.isSubNav,
        },
        {
            name: 'content',
            type: 'customPageSection',
            title: 'Page sections',
            description: 'Add, edit, and reorder sections',
        },
        SEOSchema
    ],
}
