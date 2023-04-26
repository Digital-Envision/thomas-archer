import { getYear } from 'date-fns'
import { defineField } from 'sanity'

export default defineField({
  name: 'Footer',
  title: 'Footer',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      initialValue: `${getYear(Date.now())}`,
    },
    {
      name: 'links',
      title: 'Links',
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
      ],
    },
  ],
})
