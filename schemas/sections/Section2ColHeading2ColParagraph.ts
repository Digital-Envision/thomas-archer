import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"
import { ImageAltField, ImageField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'Section2ColHeading2ColParagraph',
    title: 'Section2ColHeading2ColParagraph',
    fields: [
        {
            name: 'leftHeading',
            type: 'text',
        },
        {
            name: 'rightHeading1',
            type: 'text',
        },
        {
            name: 'rightParagraph1',
            type: 'text',
        },
        {
            name: 'rightHeading2',
            type: 'text',
        },
        {
            name: 'rightParagraph2',
            type: 'text',
        },
        {
            name: 'rightHeading3',
            type: 'text',
        },
        {
            name: 'rightParagraph3',
            type: 'text',
        },
        {
            name: 'rightHeading4',
            type: 'text',
        },
        {
            name: 'rightParagraph4',
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
            ...ImageField,
            description:
                'This image will be displayed on the right section.',
        },
        ImageAltField,
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
                title: `Section2ColHeading2ColParagraph`
            }
        }
    }
}
