import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'SectionBreadcrumbs',
    title: 'SectionBreadcrumbs',
    fields: [
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
            title: 'variant',
            subtitle: 'label', // unused
            disabled: 'disabled',
            selected: 'variant'
        },
        prepare({ title, subtitle, disabled, selected }) {
            return {
                title: `SectionBreadcrumbs`
            }
        }
    }
}
