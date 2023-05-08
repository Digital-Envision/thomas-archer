import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

export default {
    name: 'CTAs',
    title: 'CTAs',
    type: 'object',
    fields: [
        {
            name: 'listButtons',
            title: 'List Buttons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'button',
                    fields: [
                        {
                            name: 'label',
                            title: 'Name',
                            type: 'string',
                            validation: (rule) => rule.required(),
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
            ],
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
        prepare() {
            return {
                title: 'CTAs',
            }
        },
    },
}
