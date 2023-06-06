import _ from 'lodash'
import { defineField } from 'sanity'
import link from 'schemas/components/link'

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
        ..._.filter(link, (obj) => !['label'].includes(obj.name)),
        {
          name: 'label',
          title: 'Name',
          type: 'string',
        },
      ],
    },
    {
      name: 'privacyAndPolicy',
      title: 'Privacy and Policy',
      type: 'object',
      fields: [..._.filter(link, (obj) => !['label'].includes(obj.name))],
    },
  ],
})
