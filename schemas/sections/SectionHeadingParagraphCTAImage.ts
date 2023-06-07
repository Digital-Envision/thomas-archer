import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"
import link from "schemas/components/link"


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
            name: 'headingTagLevel',
            title: 'Heading Tag Level',
            type: 'string',
            options: {
                list: [
                    'H1', 'H2', 'H3'
                ],
            },
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
            name: 'button',
            title: 'Button',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                ...link
            ],
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
