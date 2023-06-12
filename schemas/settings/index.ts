import { CogIcon } from '@sanity/icons'
import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { ImageField } from 'schemas/components/fields'

import OpenGraphInput from './OpenGraphInput'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Used for the <meta> description tag for SEO and Social Sharing',
      title: 'Description',
      type: 'text',
    }),
    {
      ...ImageField,
      description:
        'Used for social media previews when linking to the index page.',
      validation: (rule) => rule.required(),
    },
    // defineField({
    //   name: 'ogImage',
    //   title: 'Open Graph Image',
    //   description:
    //     'Used for social media previews when linking to the index page.',
    //   type: 'object',
    //   components: {
    //     input: OpenGraphInput as any,
    //   },
    //   fields: [
    //     defineField({
    //       name: 'title',
    //       title: 'Title',
    //       type: 'string',
    //       initialValue: demo.ogImageTitle,
    //     }),
    //   ],
    // }),
    defineField({
      name: 'indexPage',
      title: 'Index Page',
      description: 'Select the page to be used as the index page',
      type: 'reference',
      to: [{ type: 'page' }],
    }),
  ],
})
