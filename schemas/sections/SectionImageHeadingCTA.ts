import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { HeightVariants as ImageHeightVariants } from 'components/modules/SectionImageHeadingCTA'
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
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'headingTagLevel',
            title: 'Heading Tag Level',
            type: 'string',
            options: {
                list: ['H1', 'H2', 'H3'],
            },
        }),
        defineField({
            type: 'object',
            name: 'button',
            title: 'Button',
            options: {
                collapsed: true,
                collapsible: true,
            },
            fields: [
                {
                    name: 'label',
                    title: 'Name',
                    type: 'string',
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
            name: 'height',
            title: 'Height',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(ImageHeightVariants)],
            },
            initialValue: HeightVariants.none,
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
    ],
    preview: {
        prepare() {
            return { title: `SectionImageHeadingCTA` }
        },
    },
})
