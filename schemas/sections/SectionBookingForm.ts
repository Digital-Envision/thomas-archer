import _ from "lodash"
import { HubspotField, hubspotForms, ImageAltField, ImageField, MarginBottomField, MarginTopField, RTFField } from "schemas/components/fields"

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
        { ...HubspotField, fields: _.map(hubspotForms, (o) => _.omit(o, 'validation')) }, // remove validation in component scope hubspot
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