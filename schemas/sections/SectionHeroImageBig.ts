import _ from 'lodash'
import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
export default defineType({
    name: 'SectionHeroImageBig',
    title: 'SectionHeroImageBig',
    type: 'object',
    fields: [
        defineField({
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isVideo',
            title: 'Use Video',
            type: 'boolean',
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.isVideo,
            description:
                'You only can choose one, using Video or Image as a banner image',
        }),
        defineField({
            name: 'bannerVideo',
            title: 'Banner Video',
            type: 'file',
            options: {
                accept: 'video/*',
            },
            hidden: ({ parent }) => !parent?.isVideo,
            description:
                'You only can choose one, using Video or Image as a banner image',
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
            return { title: `SectionHeroImageBig` }
        },
    },
})
