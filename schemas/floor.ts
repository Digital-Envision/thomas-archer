import { DOCUMENT_TYPE_SCHEMA_NAME } from './global/DetailsPage'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects, getImagesMetaData } from 'lib/utils'
import _ from 'lodash'
import {
  ImageAltField,
  ImageField,
  RTFField,
  SEOField,
  SlugField,
} from './components/fields'
import { FloorPlanDetails } from './sections/FloorPlanDetails'
import { SectionHeroImageDefaultFields } from './sections/SectionHeroImageDefault'
import { orderRankField } from '@sanity/orderable-document-list'

const name = DOCUMENT_TYPE_SCHEMA_NAME['Floor Plans']

//export const queryImageMetaData = `
//   _type == '${name}' => {
//     ...,
//     floorPlan{
//       ...,
//       listSizes[]{
//         listImages[]{
//           "imageMetaData": image.asset->{
//             ${getImagesMetaData}
//           },
//         }
//       }
//     }
//   }
//`

export const queryImageMetaData = `
  _type == '${name}' => {
    ...,
    bannerImage {
      ...,
      "imageMetaData": image.asset->{
        ${getImagesMetaData}
      },
    },
    floorPlan {
      ...,
      listSizes[] {
        ...,
        listImages[] {
          ...,
          "imageMetaData": image.asset->{
            ${getImagesMetaData}
          },
        }
      }
    }
  }
`

export default {
  type: 'document',
  title: 'Floor Plans',
  name,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    SlugField,
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
                          ...ImageField,
                          options: {
                            hotspot: true,
                          },
                        },
                        ImageAltField,
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
      ..._.omit(RTFField, 'title'),
      title: 'Contact Description',
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
    SEOField,
    orderRankField({ type: DOCUMENT_TYPE_SCHEMA_NAME['Floor Plans'] }),
  ],
}
