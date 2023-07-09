import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { HeightVariants as ImageHeightVariants } from 'components/modules/SectionImageHeadingCTA'
import { enumToArrayOfObjects } from 'lib/utils'
import link from 'schemas/components/link'
import {
  ImageAltField,
  ImageField,
  ScrollAnchor,
} from 'schemas/components/fields'

export const name = 'SectionImageHeadingCTA'

export default defineType({
  name,
  title: 'SectionImageHeadingCTA',
  type: 'object',
  fields: [
    ScrollAnchor,
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
      fields: [...link],
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
      ...ImageField,
      options: {
        hotspot: true,
        metadata: ['lqip', 'blurhash'],
      },
      validation: (rule) => rule.required(),
    }),
    ImageAltField,
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
