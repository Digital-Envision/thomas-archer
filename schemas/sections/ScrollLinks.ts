import { MarginBottomField, MarginTopField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'ScrollLinks',
    title: 'Scroll Links',
    fields: [
        MarginTopField,
        MarginBottomField,
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
                title: `Scroll Links`
            }
        }
    }
}

