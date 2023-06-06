import _ from 'lodash'
import { defineField } from 'sanity'
import link from 'schemas/components/link'

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
  type: 'object',
  fields: [
    {
      name: 'connectWithUs',
      title: 'Connect with us',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [..._.filter(link, (obj) => !['label'].includes(obj.name))],
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      options: {
        collapsible: true,
        collapsed: true,
      },
      of: [
        {
          name: 'SocialMediaLink',
          title: 'Social Media Link',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
                accept: '.svg',
              },
            },
            ...link,
          ],
        },
      ],
    },
  ],
})
