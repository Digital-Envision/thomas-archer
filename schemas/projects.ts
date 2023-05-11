import { listImagesFields } from './sections/SectionGalleryScroll';
import { headingField, paragraphField } from './sections/SectionHeadingParagraphCTA';
import { bannerImageField, bannerVideoField, externalVideoField, isExternalVideoField, isVideoField } from "./sections/SectionHeroImageBig"
import { isSelectedProjectFields, selectedProjectsFields } from './sections/SectionProjectScroll';

export default {
    type: 'document',
    title: 'Projects',
    name: 'projects',
    fields: [
        {
            name: 'heading',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        },
        {
            name: 'slug',
            description: 'page can be access: https://thomas-archer.netlify.app/<route-name>/[slug]',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
                isUnique: (value, context) => context.defaultIsUnique(value, context),
            },
        },
        {
            name: 'subHeading',
            title: 'Suburb',
            type: 'string'
        },
        {
            name: 'caption',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Feature Image',
            type: 'image',
            options: {
                hotspot: false,
            },
            validation: (rule) => rule.required(),
        },
        {
            name: 'award',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'awardImage',
                    type: 'image',
                },
                {
                    name: 'awardLogo',
                    type: 'image',
                },
                {
                    name: 'awards',
                    title: 'Awards',
                    type: 'array',
                    of: [
                        {
                            name: 'award',
                            title: 'Award',
                            type: 'object',
                            fields: [
                                {
                                    name: 'name',
                                    title: 'Name',
                                    type: 'string',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                }
                            ]

                        },
                    ]
                },
            ]
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
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },

                    fields: [
                        isVideoField(),
                        isExternalVideoField(),
                        externalVideoField(),
                        bannerImageField({ title: 'Image' }),
                        bannerVideoField({ title: 'Video' })
                    ]
                },
                {
                    name: 'SectionBreadcrumbs',
                    type: 'string',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    description: 'Fix in development',
                },
                {
                    name: 'SectionHeadingParagraphCTA',
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    fields: [
                        headingField('Caption'),
                        paragraphField(),
                        {
                            name: 'embeddedVideo',
                            title: 'Embedded Video',
                            type: 'url',
                            description: 'Make sure you copied VIMEO embed video url.',
                        },
                    ]
                },
                {
                    name: 'SectionGalleryScroll',
                    type: 'object',
                    fields: [
                        listImagesFields()
                    ],
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
                {
                    name: 'SectionProjectScroll',
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    fields: [
                        // headingField(),
                        paragraphField(),
                        isSelectedProjectFields(),
                        selectedProjectsFields()
                    ]
                },
                {
                    name: 'customPageSection',
                    type: 'customPageSection',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                },
            ]
        }
    ],
}