import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import { ImageAltField, ImageField } from 'schemas/components/fields'
import link from 'schemas/components/link'

export default {
    type: 'object',
    name: 'Section2ColImageTextFeaturedImageLeftRight',
    title: 'Section2ColImageTextFeaturedImageLeftRight',
    fields: [
        {
            name: 'quotes',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'postedBy',
            type: 'string',
        },
        {
            name: 'IsImageRight',
            title: 'Image on the right?',
            description:
                'Position of the image, if toggled on will be on the right',
            type: 'boolean',
        },
        ImageField,
        ImageAltField,
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [...link],
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
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `Section2ColImageTextFeaturedImageLeftRight`,
            }
        },
    },
}
