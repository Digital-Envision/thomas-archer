import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
export default {
    name: 'SectionGalleryScroll',
    title: 'Gallery Scroll',
    type: 'object',
    fields: [
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
                            name: 'image',
                            title: 'Image',
                            description:
                                'For better result, Landscape Image: 1024x683px; Portrait Image: 480x720px.',
                            type: 'image',
                            options: {
                                hotspot: false,
                            },
                        },
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
        },
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
