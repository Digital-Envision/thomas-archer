export default {
    type: 'document',
    title: 'Projects',
    name: 'projects',
    fields: [
        {
            name: 'heading',
            type: 'string'
        },
        {
            name: 'slug',
            description: 'page can be access: https://thomas-archer.netlify.app/<route-name>/[slug]',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'heading',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
        },
        {
            name: 'subHeading',
            type: 'string'
        },
        {
            name: 'caption',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        {
            name: 'page',
            title: 'Detail Page',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'SectionHeroImageBig',
                    type: 'SectionHeroImageBig',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
                {
                    name: 'SectionBreadcrumbs',
                    type: 'SectionBreadcrumbs',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
                {
                    name: 'SectionHeadingParagraphCTA',
                    type: 'SectionHeadingParagraphCTA',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
                {
                    name: 'SectionImageGalleryScroll',
                    type: 'string',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    description: 'In development',
                    readonly: true
                },
                {
                    name: 'customPageSection',
                    type: 'customPageSection',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
                {
                    name: 'SectionProjectScroll',
                    type: 'string',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    description: 'In development',
                    readonly: true
                },
            ]
        }
    ],
}