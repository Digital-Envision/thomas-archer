import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import { validateVimeoUrl } from 'utils/checkVideoResource'

export default {
    name: 'SectionVideoParagraphCTA',
    title: 'SectionVideoParagraphCTA',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'object',
            fields: [
                {
                    name: 'cover',
                    title: 'Cover Image',
                    type: 'image',
                    options: {
                        hotspot: false,
                    },
                },
                {
                    name: 'video',
                    title: 'Video',
                    type: 'url',
                    description: 'Please input vimeo url',
                    validation: (Rule) =>
                        Rule.custom((url) => validateVimeoUrl(url)),
                },
            ],
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [
                {
                    name: 'label',
                    title: 'Name',
                    type: 'string',
                    validation: (rule) => rule.required(),
                },
                {
                    name: 'useInternal',
                    title: 'Use Internal Link Pages',
                    type: 'boolean',
                },
                {
                    name: 'externalHref',
                    title: 'External Link',
                    type: 'url',
                    hidden: ({ parent }) => parent?.useInternal,
                },
                {
                    name: 'internalHref',
                    title: 'Internal Link',
                    type: 'reference',
                    to: [{ type: 'page' }],
                    hidden: ({ parent }) => !parent?.useInternal,
                },
                {
                    name: 'isExternal',
                    title: 'New Tab Link',
                    type: 'boolean',
                    initialValue: false,
                },
            ],
        },
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'SectionVideoParagraphCTA',
            }
        },
    },
}
