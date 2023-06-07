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
                parent?.linkType !== LINK_TYPE_NAME.pages
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
                parent?.linkType !== LINK_TYPE_NAME.project
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
                parent?.linkType !== LINK_TYPE_NAME.floorPlans
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
                !parent?.useInternal || parent?.linkType !== LINK_TYPE_NAME.blog
            )
        },
    },
]

export default [
    {
        name: 'label',
        title: 'Name',
        type: 'string',
        validation: (rule) => rule.required(),
    },
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
        hidden: ({ parent }) => !parent?.useInternal,
    },
    ...linkTypes,
    {
        name: 'isExternal',
        title: 'New Tab Link',
        type: 'boolean',
        initialValue: false,
    },
]
