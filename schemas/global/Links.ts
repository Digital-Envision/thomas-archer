import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'externalLink',
      title: 'New Tabl Link',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'children',
      title: 'Sub Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'url',
              validation: (UrlRule) => UrlRule.required(),
            },
            {
              name: 'externalLink',
              title: 'New Tabl Link',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare({ title }) {
      return {
        title: `${title ? title : 'Link'}`,
      }
    },
  },
})
