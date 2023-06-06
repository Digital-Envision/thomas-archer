import { defineField } from 'sanity'
import link from 'schemas/components/link'

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
        ...link,
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
