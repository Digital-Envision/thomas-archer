
import _ from "lodash"
import { HeadingField, HeadingTagLevel, HubspotField, hubspotForms, MarginBottomField, MarginTopField, RTFField, TextField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'SectionHeadingParagraphContactForm',
    title: 'SectionHeadingParagraphContactForm',
    fields: [
        HeadingField,
        HeadingTagLevel,
        {
            ...TextField,
            title: 'Paragraph',
        },
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
        prepare({ title, disabled }) {
            return {
                title: `SectionHeadingParagraphContactForm`
            }
        }
    }
}