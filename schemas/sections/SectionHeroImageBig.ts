import _ from 'lodash'
import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects, getImagesMetaData } from 'lib/utils'

const name = 'SectionHeroImageBig'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "bannerImageMetaData": bannerImage.asset->{
          ${getImagesMetaData}
      },
   }
`

export const quotesField = (props?) =>
    defineField({
        name: 'quotes',
        title: 'Quotes',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (rule) => rule.required(),
        ...props,
    })

export const isVideoField = (props?) =>
    defineField({
        name: 'isVideo',
        title: 'Use Video',
        type: 'boolean',
        ...props,
    })

export const bannerImageField = (props?) =>
    defineField({
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
        description:
            'You only can choose one, using Video or Image as a banner image',
        ...props,
    })

export const isExternalVideoField = (props?) =>
    defineField({
        name: 'isExternalVideo',
        title: 'Use External Video',
        type: 'boolean',
        hidden: ({ parent }) => !parent?.isVideo,
        ...props,
    })

export const bannerVideoField = (props?) =>
    defineField({
        name: 'bannerVideo',
        title: 'Banner Video',
        type: 'file',
        options: {
            accept: 'video/*',
        },
        hidden: ({ parent }) => !(parent?.isVideo && !parent?.isExternalVideo),
        description:
            'You only can choose one, using Video or Image as a banner image',
        ...props,
    })

export const externalVideoField = (props?) =>
    defineField({
        name: 'externalVideo',
        title: 'URL External Video',
        type: 'url',
        hidden: ({ parent }) => !(parent?.isExternalVideo && parent?.isVideo),
        description:
            'Make sure you copied the embed video url without the query',
        ...props,
    })

export default defineType({
    name,
    title: 'SectionHeroImageBig',
    type: 'object',
    fields: [
        quotesField(),
        isVideoField(),
        bannerImageField(),
        isExternalVideoField(),
        externalVideoField(),
        bannerVideoField(),
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
