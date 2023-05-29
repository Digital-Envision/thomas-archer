import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

export const FloorPlanDetails = [
    {
        name: 'priceList',
        title: 'Price List',
        type: 'object',
        description: 'Input embedded specific code from hubspot',
        options: {
            collapsed: true,
            collapsible: true,
        },
        fields: [
            {
                name: 'region',
                title: 'Region',
                type: 'string',
                validation: (Rule) => Rule.required(),
                initialValue: 'na1',
            },
            {
                name: 'portalId',
                title: 'Portal ID',
                type: 'string',
                validation: (Rule) => Rule.required(),
                initialValue: '8929845',
            },
            {
                name: 'formId',
                title: 'Form ID',
                type: 'string',
                validation: (Rule) => Rule.required(),
            },
        ],
    },
    {
        name: 'inclusionsBrochure',
        title: 'Inclusions Brochure',
        type: 'object',
        description: 'Input embedded specific code from hubspot',
        options: {
            collapsed: true,
            collapsible: true,
        },
        fields: [
            {
                name: 'region',
                title: 'Region',
                type: 'string',
                validation: (Rule) => Rule.required(),
                initialValue: 'na1',
            },
            {
                name: 'portalId',
                title: 'Portal ID',
                type: 'string',
                validation: (Rule) => Rule.required(),
                initialValue: '8929845',
            },
            {
                name: 'formId',
                title: 'Form ID',
                type: 'string',
                validation: (Rule) => Rule.required(),
            },
        ],
    },
    {
        name: 'contactConsultant',
        title: 'Consulant Contact',
        type: 'object',
        options: {
            collapsed: true,
            collapsible: true,
        },
        fields: [
            {
                name: 'useInternal',
                title: 'Use Internal Link Pages',
                type: 'boolean',
            },
            {
                name: 'externalHref',
                title: 'External Link',
                type: 'url',
                hidden: ({ parent }) => parent?.useInternal,
            },
            {
                name: 'internalHref',
                title: 'Internal Link',
                type: 'reference',
                to: [{ type: 'page' }],
                hidden: ({ parent }) => !parent?.useInternal,
            },
            {
                name: 'isExternal',
                title: 'New Tab Link',
                type: 'boolean',
                initialValue: false,
            },
        ],
    },
    {
        name: 'marginTop',
        title: 'Margin Top',
        type: 'string',
        options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
        },
        hidden: true,
        initialValue: HeightVariants.more,
    },
    {
        name: 'marginBottom',
        title: 'Margin Bottom',
        type: 'string',
        options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
        },
        hidden: true,
        initialValue: HeightVariants.extra,
    },
]
