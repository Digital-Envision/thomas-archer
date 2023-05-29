import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import _ from 'lodash'
import { FloorPlanDetails } from './sections/FloorPlanDetails'
import { SectionHeroImageDefaultFields } from './sections/SectionHeroImageDefault'

export default {
  type: 'document',
  title: 'Floor Plans',
  name: 'floors',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      fields: [
        ..._.filter(
          SectionHeroImageDefaultFields,
          (obj) => !['marginTop', 'marginBottom'].includes(obj.name)
        ),
        {
          name: 'marginTop',
          title: 'Margin Top',
          type: 'string',
          options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
          },
          hidden: true,
        },
        {
          name: 'marginBottom',
          title: 'Margin Bottom',
          type: 'string',
          options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
          },
          hidden: true,
        },
      ],
      initialValue: {
        marginTop: HeightVariants.none,
        marginBottom: HeightVariants.less,
      },
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
          validation: (Rule) => Rule.min(1).required(),
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
                  validation: (Rule) => Rule.required(),
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
                {
                  name: 'homeFlyer',
                  title: 'Home Flyer',
                  type: 'object',
                  options: {
                    collapsed: true,
                    collapsible: true,
                  },
                  fields: [
                    {
                      name: 'isExternalFile',
                      title: 'Use external link download',
                      type: 'boolean',
                    },
                    {
                      name: 'fileName',
                      title: 'File Name',
                      type: 'string',
                      description:
                        'If you not set the file name, the download file name should be the original file name, if there is no original file name, than the file name should an ID number. And make sure, the name should has an extension (.pdf , .xlsx, etc)',
                      hidden: ({ parent }) => parent?.isExternalFile,
                    },
                    {
                      name: 'externalFile',
                      title: 'External File Download',
                      type: 'url',
                      hidden: ({ parent }) => !parent?.isExternalFile,
                    },
                    {
                      name: 'file',
                      title: 'File',
                      type: 'file',
                      hidden: ({ parent }) => parent?.isExternalFile,
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  title: 'size',
                },
                prepare({ title }) {
                  return {
                    title,
                  }
                },
              },
            },
          ],
        },
        ...FloorPlanDetails,
      ],
    },
    {
      name: 'facades',
      title: 'Facades',
      type: 'reference',
      to: [{ type: 'facades' }],
    },
    {
      name: 'customPageSection',
      type: 'customPageSection',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
