import { defineField } from 'sanity'

export const specialButtonFieldset = {
  name: 'SpecialButtons',
  title: 'Special Buttons Collapsable',
  options: {
    collapsible: true,
    collapsed: true,
  },
}

export default defineField({
  name: 'SpecialButtons',
  title: 'Special Buttons',
  type: 'object',
  description: 'You can put client login and telephone icon for navbar header',
  fieldset: 'SpecialButtons',
  fields: [
    {
      name: 'specialButtonOne',
      title: 'Special Button One',
      type: 'object',
      description: 'Phone navbar button',
      fields: [
        {
          name: 'showButton',
          title: 'Show button',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
    {
      name: 'specialButtonTwo',
      title: 'Special Button Two',
      type: 'object',
      description: 'User client login navbar button',
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
        {
          name: 'showButton',
          title: 'Show button',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
  ],
})
