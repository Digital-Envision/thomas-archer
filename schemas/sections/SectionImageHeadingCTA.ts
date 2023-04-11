import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
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
                    name: 'buttonName',
                    title: 'Name',
                    type: 'string',
                    validation: (rule) => rule.required(),
                },
                {
                    name: 'buttonLink',
                    title: 'Link',
                    type: 'url',
                    validation: (rule) => rule.required(),
                },
                {
                    name: 'isExternal',
                    title: 'New tab link',
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
    ],
    preview: {
        prepare() {
            return { title: `SectionImageHeadingCTA` }
        },
    },
})
