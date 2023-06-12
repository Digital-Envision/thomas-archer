import { ImageAltField, ImageField } from "./components/fields";

export default {
  type: 'document',
  title: 'Facades',
  name: 'facades',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'listImages',
      title: 'List Images',
      type: 'array',
      of: [
        {
          name: 'images',
          title: 'Images',
          type: 'object',
          fields: [
            {
              ...ImageField,
              description:
                'For better result, Landscape Image: 1024x683px; Portrait Image: 480x720px.',
            },
            ImageAltField,
            {
              name: 'description',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
