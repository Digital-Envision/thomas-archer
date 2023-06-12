import _ from 'lodash'
import { hubspotFields } from 'schemas/global/Hubspot'

export const LINK_TYPE_NAME = {
    pages: 'internalHref',
    project: 'projectLinkHref',
    floorPlans: 'floorPlansHref',
    blog: 'blogHref',
}

const linkTypes = [
    {
        name: LINK_TYPE_NAME.pages,
        title: 'Internal Link',
        type: 'reference',
        to: [{ type: 'page' }],
        hidden: ({ parent }) => {
            return (
                !parent?.useInternal ||
                parent?.linkType !== LINK_TYPE_NAME.pages ||
                parent?.useModalHubspot
            )
        },
    },
    {
        name: LINK_TYPE_NAME.project,
        title: 'Project Link',
        type: 'reference',
        to: [{ type: 'projects' }],
        hidden: ({ parent }) => {
            return (
                !parent?.useInternal ||
                parent?.linkType !== LINK_TYPE_NAME.project ||
                parent?.useModalHubspot
            )
        },
    },
    {
        name: LINK_TYPE_NAME.floorPlans,
        title: 'Floor Plans Link',
        type: 'reference',
        to: [{ type: 'floors' }],
        hidden: ({ parent }) => {
            return (
                !parent?.useInternal ||
                parent?.linkType !== LINK_TYPE_NAME.floorPlans ||
                parent?.useModalHubspot
            )
        },
    },
    {
        name: LINK_TYPE_NAME.blog,
        title: 'Blog Link',
        type: 'reference',
        to: [{ type: 'blogs' }],
        hidden: ({ parent }) => {
            return (
                !parent?.useInternal ||
                parent?.linkType !== LINK_TYPE_NAME.blog ||
                parent?.useModalHubspot
            )
        },
    },
]

const Link = [
    {
        name: 'useInternal',
        title: 'Use Internal Link Pages',
        type: 'boolean',
        hidden: ({ parent }) => parent?.useModalHubspot,
    },
    {
        name: 'externalHref',
        title: 'External Link',
        type: 'url',
        hidden: ({ parent }) => parent?.useInternal || parent?.useModalHubspot,
    },
    {
        name: 'linkType',
        title: 'Link Options',
        type: 'string',
        options: {
            list: [
                { title: 'Internal Link Pages', value: LINK_TYPE_NAME.pages },
                { title: 'Project Link Pages', value: LINK_TYPE_NAME.project },
                {
                    title: 'Floor Plans Pages',
                    value: LINK_TYPE_NAME.floorPlans,
                },
                { title: 'Blog Pages', value: LINK_TYPE_NAME.blog },
            ],
        },
        hidden: ({ parent }) => !parent?.useInternal || parent?.useModalHubspot,
    },
    ...linkTypes,
    {
        name: 'isExternal',
        title: 'New Tab Link',
        type: 'boolean',
        initialValue: false,
        hidden: ({ parent }) => parent?.useModalHubspot,
    },
]

export default [
    {
        name: 'label',
        title: 'Name',
        type: 'string',
    },
    {
        name: 'useModalHubspot',
        title: 'Use PopUp Hubspot',
        type: 'boolean',
        initialValue: false,
    },
    ...Link,
    ..._.map(hubspotFields, (field) => {
        return {
            ..._.omit(field, 'validation'),
            hidden: ({ parent }) => !parent?.useModalHubspot,
            validation: (Rule) =>
                Rule.custom((val, { parent }) => {
                    if (parent?.useModalHubspot && _.isEmpty(val)) {
                        return 'Field is required'
                    }

                    return true
                }),
        }
    }),
]
