export const LINK_TYPE_NAME = {
    pages: 'internalHref',
    project: 'projectLinkHref',
    floorPlans: 'floorPlansHref',
    blog: 'blogHref',
}

export const linkTypePages = {
    name: LINK_TYPE_NAME.pages,
    title: 'Internal Link',
    type: 'reference',
    to: [{ type: 'page' }],
    hidden: ({ parent }) => {
        return (
            !parent?.useInternal ||
            parent?.linkType !== LINK_TYPE_NAME.pages ||
            parent?.type !== 'link'
        )
    },
}

export const linkTypeProjects = {
    name: LINK_TYPE_NAME.project,
    title: 'Project Link',
    type: 'reference',
    to: [{ type: 'projects' }],
    hidden: ({ parent }) => {
        return (
            !parent?.useInternal ||
            parent?.linkType !== LINK_TYPE_NAME.project ||
            parent?.type !== 'link'
        )
    },
}

export const linkTypeFloorPlans = {
    name: LINK_TYPE_NAME.floorPlans,
    title: 'Floor Plans Link',
    type: 'reference',
    to: [{ type: 'floors' }],
    hidden: ({ parent }) => {
        return (
            !parent?.useInternal ||
            parent?.linkType !== LINK_TYPE_NAME.floorPlans ||
            parent?.type !== 'link'
        )
    },
}

export const linkTypeBlogs = {
    name: LINK_TYPE_NAME.blog,
    title: 'Blog Link',
    type: 'reference',
    to: [{ type: 'blogs' }],
    hidden: ({ parent }) => {
        return (
            !parent?.useInternal ||
            parent?.linkType !== LINK_TYPE_NAME.blog ||
            parent?.type !== 'link'
        )
    },
}

const linkTypes = [
    linkTypePages,
    linkTypeProjects,
    linkTypeFloorPlans,
    linkTypeBlogs,
]

export const useInternalLink = {
    name: 'useInternal',
    title: 'Use Internal Link Pages',
    type: 'boolean',
    hidden: ({ parent }) => parent?.type !== 'link',
}

export const externalLink = {
    name: 'externalHref',
    title: 'External Link',
    type: 'url',
    hidden: ({ parent }) => parent?.useInternal || parent?.type !== 'link',
}

export const linkOptions = {
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
    hidden: ({ parent }) => !parent?.useInternal || parent?.type !== 'link',
}

export const isExternalTab = {
    name: 'isExternal',
    title: 'New Tab Link',
    type: 'boolean',
    initialValue: false,
    hidden: ({ parent }) => parent?.type !== 'link',
}

export const Link = [
    useInternalLink,
    externalLink,
    linkOptions,
    ...linkTypes,
    isExternalTab,
]

