import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { HeightVariants as BannerHeight } from 'components/modules/SectionImageHeadingCTA'
import { enumToArrayOfObjects } from 'lib/utils'
export default defineType({
    name: 'SectionImageHeadingCTA',
    title: 'SectionImageHeadingCTA',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'object',
            name: 'button',
            validation: (rule) => rule.required(),
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
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isOverlay',
            title: 'Use Overlay',
            type: 'boolean',
            initialValue: true,
            description: 'It will make a little dark for the cover image',
        }),
        defineField({
            name: 'marginTop',
            title: 'Margin Top',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },
            initialValue: HeightVariants.none,
        }),
        defineField({
            name: 'marginBottom',
            title: 'Margin Bottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },
            initialValue: HeightVariants.none,
        }),
        defineField({
            name: 'height',
            title: 'Heights',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(BannerHeight)],
            },
            initialValue: BannerHeight.large,
        }),
    ],
    preview: {
        prepare() {
            return { title: `SectionImageHeadingCTA` }
        },
    },
})
