import { defineField } from 'sanity'
import link from 'schemas/components/link'

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
        ...link,
        {
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [...link],
        },
        {
          name: 'children',
          title: 'Sub Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                ...link,
                {
                  name: 'mobileOnly',
                  title: 'Mobile Only',
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
