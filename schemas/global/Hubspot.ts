import { defineField } from "sanity"
import { hubspotForms } from "schemas/components/fields"

const GlobalHubspot = defineField({
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
            fields: hubspotForms,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'enquireFlyout',
            title: 'Enquire Flyout',
            type: 'object',
            fields: hubspotForms,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'priceList',
            title: 'Price List',
            type: 'object',
            fields: hubspotForms,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'contactForm',
            title: 'Contact Form',
            type: 'object',
            fields: hubspotForms,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            name: 'bookingSessionForm',
            title: 'Booking Session Form',
            type: 'object',
            fields: hubspotForms,
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
})

export default GlobalHubspot