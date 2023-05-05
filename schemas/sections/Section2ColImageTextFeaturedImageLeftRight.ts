import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"


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
            type: 'boolean'
        },
        {
            name: 'image',
            title: 'Image',
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
                {
                    name: 'label',
                    title: 'Name',
                    type: 'string',
                },
                {
                    name: 'useInternal',
                    title: 'Use Internal Link Pages',
                    type: 'boolean',
                },
                {
                    name: 'externalHref',
                    title: 'External Link',
                    type: 'url',
                    hidden: ({ parent }) => parent?.useInternal,
                },
                {
                    name: 'internalHref',
                    title: 'Internal Link',
                    type: 'reference',
                    to: [{ type: 'page' }],
                    hidden: ({ parent }) => !parent?.useInternal,
                },
                {
                    name: 'isExternal',
                    title: 'New Tab Link',
                    type: 'boolean',
                    initialValue: false,
                },
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
                title: `Section2ColImageTextFeaturedImageLeftRight`
            }
        }
    }
}
