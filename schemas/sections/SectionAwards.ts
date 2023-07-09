import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import {
  ImageAltField,
  ImageField,
  ScrollAnchor,
} from 'schemas/components/fields'
import link from 'schemas/components/link'

export const name = 'SectionAwards'

export default {
  type: 'object',
  name,
  title: 'SectionAwards',
  fields: [
    ScrollAnchor,
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'headingTagLevel',
      title: 'Heading Tag Level',
      type: 'string',
      options: {
        list: ['H1', 'H2', 'H3'],
      },
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    },
    ImageField,
    ImageAltField,
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
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [...link],
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
    select: {
      title: 'placeholder',
      subtitle: 'label',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `SectionAwards`,
      }
    },
  },
}
