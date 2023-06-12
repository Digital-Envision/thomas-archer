import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"
import { ImageAltField } from "schemas/components/fields"
import link from "schemas/components/link"

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
            ...ImageAltField,
            name: 'leftImageAlt'
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
            ...ImageAltField,
            name: 'rightImageAlt'
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
                ...link,
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
