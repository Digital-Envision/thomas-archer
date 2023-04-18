import { defineField } from 'sanity'

export const linkFieldset = {
  name: 'NavLinks',
  title: 'Navigation Links',
  options: {
    collapsible: true,
    collapsed: true,
  },
}

export default defineField({
  name: 'Links',
  title: 'Links',
  type: 'array',
  validation: (rule) => rule.max(6),
  description: 'Maximum link is 6',
  fieldset: 'NavLinks',
  of: [
    {
      name: 'Link',
      title: 'Link',
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
          hidden: ({ parent }) => parent.useInternal,
        },
        {
          name: 'internalHref',
          title: 'Internal Link',
          type: 'reference',
          to: [{ type: 'page' }],
          hidden: ({ parent }) => !parent.useInternal,
        },
        {
          name: 'isExternal',
          title: 'New Tab Link',
          type: 'boolean',
          initialValue: false,
        },
        {
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
                  name: 'useInternal',
                  title: 'Use Internal Link Pages',
                  type: 'boolean',
                },
                {
                  name: 'externalHref',
                  title: 'External Link',
                  type: 'url',
                  hidden: ({ parent }) => parent.useInternal,
                },
                {
                  name: 'internalHref',
                  title: 'Internal Link',
                  type: 'reference',
                  to: [{ type: 'page' }],
                  hidden: ({ parent }) => !parent.useInternal,
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
    },
  ],
})
