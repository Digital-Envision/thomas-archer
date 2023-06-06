import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import link from 'schemas/components/link'

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
                        ...link
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
