import _ from 'lodash'
import { getYear } from 'date-fns'
import { defineField } from 'sanity'
import link from 'schemas/components/link'

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
      name: 'NavLinks',
      title: 'Links',
      type: 'array',
      validation: (rule) => rule.max(6),
      description: 'Maximum link is 6',
      of: [
        {
          name: 'Link',
          title: 'Link',
          type: 'object',
          fields: [
            ...link,
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
    },
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
          fields: [...link],
        },
      ],
    },
  ],
})
