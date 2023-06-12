import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"
import { RTFField } from "schemas/components/fields"

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
            title: 'Paragraph',
            type: 'text',
        },
        {
            ...RTFField,
            name: 'tnc',
            title: 'Terms and Conditions',
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