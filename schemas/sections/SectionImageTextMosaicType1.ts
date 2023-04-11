import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'SectionImageTextMosaicType1',
    title: 'SectionImageTextMosaicType1',
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'paragraph',
            type: 'text',
        },
        {
            name: 'leftImage',
            title: 'Left Image',
            description:
                'This image will be displayed on the left section.',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        {
            name: 'rightImage',
            title: 'Right Image',
            description:
                'This image will be displayed on the right section.',
            type: 'image',
            options: {
                hotspot: false,
            },
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
            title: 'leftHeading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionImageTextMosaicType1`
            }
        }
    }
}