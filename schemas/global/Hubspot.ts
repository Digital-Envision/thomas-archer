import { defineField } from "sanity"

export const hubspotFields = [
    {
        name: 'region',
        title: 'Region',
        type: 'string',
        initialValue: 'na1',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'portalId',
        title: 'Portal ID',
        type: 'string',
        initialValue: '8929845',
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'formId',
        title: 'Form ID',
        type: 'string',
        validation: (Rule) => Rule.required(),
    },
]

const Hubspot = defineField({
    name: 'Hubspot',
    title: 'Hubspot Form',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'inclusionsBrochure',
            title: 'Inclusions Brochure',
            type: 'object',
            fields: hubspotFields,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'enquireFlyout',
            title: 'Enquire Flyout',
            type: 'object',
            fields: hubspotFields,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'priceList',
            title: 'Price List',
            type: 'object',
            fields: hubspotFields,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'contactForm',
            title: 'Contact Form',
            type: 'object',
            fields: hubspotFields,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'bookingSessionForm',
            title: 'Booking Session Form',
            type: 'object',
            fields: hubspotFields,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
})

export default Hubspot