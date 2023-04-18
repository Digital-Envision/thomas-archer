import { defineField } from 'sanity'

export const socialMediaFieldset = {
  name: 'SocialMedia',
  title: 'Social Media',
  options: {
    collapsible: true,
    collapsed: true,
  },
}

export default defineField({
  name: 'SocialMedia',
  title: 'Social Media Links',
  type: 'array',
  fieldset: 'SocialMedia',
  of: [
    {
      name: 'SocialMediaLink',
      title: 'Social Media Link',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Name',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: {
            hotspot: true,
            accept: '.svg',
          },
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
})