import { defineField } from 'sanity'

export const contactFieldset = {
  name: 'Contact',
  title: 'Contact',
  options: {
    collapsible: true,
    collapsed: true,
  },
}

export default defineField({
  name: 'Contact',
  title: 'Contact',
  type: 'object',
  fieldset: 'Contact',
  fields: [
    {
      name: 'phone',
      title: 'Phone',
      type: 'object',
      fields: [
        {
          name: 'code',
          title: 'Code',
          type: 'string',
          initialValue: '03',
        },
        {
          name: 'number',
          title: 'Number',
          type: 'string',
          initialValue: '9999 5967',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      initialValue: 'info@thomasarcher.com.au',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'streetName',
          title: 'Street Name',
          type: 'string',
          initialValue: '11 Corporate Dr,',
        },
        {
          name: 'suburb',
          title: 'Suburb',
          type: 'string',
          initialValue: 'Heatherton VIC',
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          initialValue: '3202',
        },
      ],
    },
  ],
})
