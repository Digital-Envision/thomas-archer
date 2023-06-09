import { MarginBottomField, MarginTopField, RTFField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'SectionParagraph',
    title: 'SectionParagraph',
    fields: [
        RTFField,
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
                title: `SectionParagraph`
            }
        }
    }
}
