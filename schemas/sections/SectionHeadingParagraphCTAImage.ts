import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"


export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTAImage',
    title: 'SectionHeadingParagraphCTAImage',
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
            name: 'image',
            title: 'Image',
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
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionHeadingParagraphCTAImage: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
