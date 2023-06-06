import { SEOSchema } from './components/fields';
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
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'image',
            title: 'Feature Image',
            type: 'image',
            validation: (rule) => rule.required(),
        },
        {
            //only support video -> image should just use featured image
            name: 'video',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            description: 'If filled, it will replace Feature Image',
            fields: [
                isVideoField(),
                isExternalVideoField(),
                externalVideoField(),
                bannerVideoField({ title: 'Video' })
            ]
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
            name: 'SectionHeadingParagraphCTA',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
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
                // paragraphField(),
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
        SEOSchema
    ],
}