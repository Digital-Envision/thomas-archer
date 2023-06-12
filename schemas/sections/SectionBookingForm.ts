import { ImageAltField, ImageField, MarginBottomField, MarginTopField, RTFField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'SectionBookingForm',
    title: 'SectionBookingForm',
    fields: [
        ImageField,
        ImageAltField,
        {
            ...RTFField,
            name: 'tnc',
            title: 'Terms and Conditions',
        },
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