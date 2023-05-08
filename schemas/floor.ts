import _ from 'lodash'
import { SectionHeroImageDefaultFields } from './sections/SectionHeroImageDefault'

export default {
  type: 'document',
  title: 'Floors',
  name: 'floors',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      description:
        'page can be access: https://thomas-archer.netlify.app/<route-name>/[slug]',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'heading',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: SectionHeroImageDefaultFields,
    },
    {
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'listSizes',
          title: 'List Sizes',
          type: 'array',
          of: [
            {
              name: 'sizes',
              title: 'Sizes',
              type: 'object',
              fields: [
                {
                  name: 'size',
                  title: 'Size',
                  type: 'number',
                },
                {
                  name: 'roomDetails',
                  title: 'Room Details',
                  type: 'object',
                  options: {
                    collapsible: true,
                    collapsed: true,
                  },
                  fields: [
                    {
                      name: 'bedRoom',
                      title: 'Bedroom',
                      type: 'number',
                    },
                    {
                      name: 'bathRoom',
                      title: 'Bathroom',
                      type: 'number',
                    },
                    {
                      name: 'carPort',
                      title: 'Carport',
                      type: 'number',
                    },
                  ],
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                },
                {
                  name: 'options',
                  title: 'Options',
                  type: 'object',
                  options: {
                    collapsible: true,
                    collapsed: true,
                  },
                  fields: [
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    },
                    {
                      name: 'listOptions',
                      title: 'List Options',
                      type: 'array',
                      of: [
                        {
                          name: 'name',
                          title: 'Name',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'listImages',
                  title: 'Floor List Images',
                  type: 'array',
                  of: [
                    {
                      name: 'images',
                      title: 'Images',
                      type: 'object',
                      fields: [
                        {
                          name: 'name',
                          title: 'Name',
                          type: 'string',
                        },
                        {
                          name: 'image',
                          title: 'Image',
                          type: 'image',
                          options: {
                            hotspot: true,
                          },
                        },
                      ],
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
      name: 'facades',
      title: 'Facades',
      type: 'reference',
      to: [{ type: 'facades' }],
    },
  ],
}
