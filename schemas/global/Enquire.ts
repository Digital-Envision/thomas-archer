import { defineField } from 'sanity'

export const enquireFieldset = {
  name: 'Enquire',
  title: 'Enquire Flyout',
  options: {
    collapsible: true,
    collapsed: true,
  },
}

export default defineField({
  name: 'Enquire',
  title: 'Enquire',
  type: 'object',
  fieldset: 'Enquire',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {
          name: 'name',
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
      ],
    },
    {
      name: 'privacyAndPolicy',
      title: 'Privacy and Policy',
      type: 'object',
      fields: [
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
})
