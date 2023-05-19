import { listImagesFields } from "./sections/SectionGalleryScroll";

export default {
    type: 'document',
    title: 'Blog',
    name: 'blogs',
    fields: [
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
            name: 'heading',
            type: 'string'
        },
        {
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
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
                    name: 'SectionGalleryScroll',
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    fields: [
                        listImagesFields()
                    ]
                },
            ]
        }
    ],
}