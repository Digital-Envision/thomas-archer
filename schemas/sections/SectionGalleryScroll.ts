import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import { ImageAltField, ImageField } from 'schemas/components/fields'

export const listImagesFields = () => ({
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
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'string',
                },
                {
                    name: 'isVertical',
                    title: 'Vertical Image',
                    type: 'boolean',
                },
            ],
        },
    ],
})

export default {
    name: 'SectionGalleryScroll',
    title: 'Gallery Scroll',
    type: 'object',
    fields: [
        listImagesFields(),
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
    ],
    preview: {
        prepare() {
            return {
                title: `Gallery Scroll`,
            }
        },
    },
}
