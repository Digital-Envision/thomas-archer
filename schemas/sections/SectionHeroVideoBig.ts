import _ from 'lodash'
import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects, getImagesMetaData } from 'lib/utils'

const name = 'SectionHeroVideoBig'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "coverMetaData": cover.asset->{
          ${getImagesMetaData}
      },
   }
`

export default defineType({
    name,
    title: 'SectionHeroVideoBig',
    type: 'object',
    fields: [
        defineField({
            name: 'cover',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        }),
        defineField({
            name: 'isExternalVideo',
            title: 'Use External Video',
            type: 'boolean',
        }),
        defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                accept: 'video/*',
            },
            hidden: ({ parent }) => parent?.isExternalVideo,
        }),
        defineField({
            name: 'externalVideo',
            title: 'URL External Video',
            type: 'url',
            hidden: ({ parent }) => !parent?.isExternalVideo,
            description: 'Make sure you copied the embed video url.',
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
            return { title: `SectionHeroVideoBig` }
        },
    },
})
