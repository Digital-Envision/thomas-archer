import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'Divider',
    title: 'Divider',
    fields: [
        {
            title: 'Variant',
            name: 'variant',
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
            const variantLabel = selected && enumToArrayOfObjects(HeightVariants).flatMap(option => option.value === selected ? [option.title] : [])
            return {
                title: selected ? `Divider: ${variantLabel}` : 'No variant selected',
            }
        }
    }
}
