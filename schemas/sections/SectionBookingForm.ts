import { getImagesMetaData } from 'lib/utils'
import _ from 'lodash'
import {
    HubspotField,
    hubspotForms,
    ImageAltField,
    ImageField,
    MarginBottomField,
    MarginTopField,
    RTFField,
} from 'schemas/components/fields'

const name = 'SectionBookingForm'

export const queryImageMetaData = `
   _type == '${name}' => {
      ...,
      "imageMetaData": image.asset->{
          ${getImagesMetaData}
      },
   }
`

export default {
    type: 'object',
    name,
    title: 'SectionBookingForm',
    fields: [
        ImageField,
        ImageAltField,
        {
            ...RTFField,
            name: 'tnc',
            title: 'Terms and Conditions',
        },
        {
            ...HubspotField,
            fields: _.map(hubspotForms, (o) => _.omit(o, 'validation')),
        }, // remove validation in component scope hubspot
        MarginTopField,
        MarginBottomField,
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionBookingForm`,
            }
        },
    },
}
