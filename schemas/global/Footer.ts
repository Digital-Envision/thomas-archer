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
