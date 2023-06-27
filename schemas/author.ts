import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { getImagesMetaData } from 'lib/utils'

const name = 'author'

export const queryImageMetaData = `
  _type == '${name}' => {
     ...,
     "pictureMetaData": picture.asset->{
       ${getImagesMetaData}
     },
  }
`

export default defineType({
  name,
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})
