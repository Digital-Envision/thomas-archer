import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'SectionHeadingParagraphContactForm',
    title: 'SectionHeadingParagraphContactForm',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        },
        {
            name: 'tnc',
            title: 'Terms and Conditions',
            type: 'text',
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
                title: `SectionHeadingParagraphContactForm`
            }
        }
    }
}