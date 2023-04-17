import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'SectionHeadingParagraphCTA',
    title: 'SectionHeadingParagraphCTA',
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
            name: 'isOffset',
            type: 'boolean'
        },
        {
            name: 'buttonText',
            type: 'string',
        },
        {
            name: 'buttonLink',
            type: 'string',
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
                title: `SectionHeadingParagraphCTA: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
