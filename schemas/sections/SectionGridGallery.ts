import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionGridGallery',
    title: 'SectionGridGallery',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    name: 'image',  // TODO should be reference from images document
                    title: 'Image',
                    description:
                        'This image will be displayed on the right section.',
                    type: 'image',
                    options: {
                        hotspot: false,
                    },
                },
            ]
        },
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionGridGallery`
            }
        }
    }
}