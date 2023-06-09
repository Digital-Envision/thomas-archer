import { ImageField, MarginBottomField, MarginTopField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'SectionBookingForm',
    title: 'SectionBookingForm',
    fields: [
        ImageField,
        MarginTopField,
        MarginBottomField,
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionBookingForm`
            }
        }
    }
}