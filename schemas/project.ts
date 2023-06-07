import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { CaptionField, HeadingField, ImageField, SEOField, SlugField, SubHeadingField, TextField } from './components/fields';
import { DOCUMENT_TYPE_SCHEMA_NAME } from './global/DetailsPage';
import { listImagesFields } from './sections/SectionGalleryScroll';
import { bannerVideoField, externalVideoField, isExternalVideoField, isVideoField } from "./sections/SectionHeroImageBig"
import { isSelectedProjectFields, selectedProjectsFields } from './sections/SectionProjectScroll';

export default {
    type: 'document',
    title: 'Projects',
    name: DOCUMENT_TYPE_SCHEMA_NAME.Projects,
    orderings: [orderRankOrdering],
    // orderings: [{
    //     title: 'Ordered',
    //     name: 'ordered',
    //     by: [{ field: 'orderRank', direction: 'desc' }]
    // }],
    fields: [
        {
            ...HeadingField,
            title: 'Title',
            validation: (rule) => rule.required(),
        },
        SlugField,
        {
            ...SubHeadingField,
            title: 'Suburb',
        },
        {
            ...CaptionField,
            title: 'Product Name',
            type: 'string'
        },
        {
            ...TextField,
            title: 'Paragraph',
        },
        {
            ...ImageField,
            title: 'Feature Image',
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
        SEOField,
        orderRankField({ type: DOCUMENT_TYPE_SCHEMA_NAME.Projects }),
    ],
}
