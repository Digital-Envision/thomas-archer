import moment from "moment"
import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"
import { externalLink, isExternalTab, Link, linkOptions, linkTypeBlogs, linkTypeFloorPlans, linkTypePages, linkTypeProjects, LINK_TYPE_NAME, useInternalLink } from 'schemas/components/link/link'
import _ from "lodash"

export const SEOField = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'isUseNoIndex',
            title: 'Use meta noindex',
            type: 'boolean',
        },
    ]
}

export const SlugField = {
    name: 'slug',
    description: 'page can be access: https://thomas-archer.netlify.app/<route-name>/[slug]',
    type: 'slug',
    title: 'Slug',
    options: {
        source: 'heading',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
    },
}

export const TitleField = {
    name: 'title',
    type: 'string'
}

export const HeadingField = {
    name: 'heading',
    type: 'string'
}

export const SubHeadingField = {
    name: 'subHeading',
    type: 'string'
}

export const CaptionField = {
    name: 'caption',
    type: 'string'
}

export const TextField = {
    name: 'paragraph',
    type: 'text',
    options: {
        collapsible: true,
        collapsed: true,
    }
}

export const HeadingTagLevel = {
    name: 'headingTagLevel',
    title: 'Heading Tag Level',
    type: 'string',
    options: {
        list: [
            'H1', 'H2', 'H3'
        ],
    },
}

export const RTFAnnotationLink = {
    name: 'link',
    type: 'object',
    title: 'link',
    fields: [
        {
            ...useInternalLink, // return parent?.useInternal
            hidden: false
        },
        {
            ...externalLink,
            hidden: ({ parent }) => parent?.useInternal
        },
        {
            ...isExternalTab,
            hidden: ({ parent }) => parent?.useInternal
        },
        {
            ...linkOptions,
            hidden: ({ parent }) => !parent?.useInternal
        },
        {
            ...linkTypePages,
            hidden: ({ parent }) => !parent?.useInternal || parent?.linkType !== LINK_TYPE_NAME.pages,
        },
        {
            ...linkTypeProjects,
            hidden: ({ parent }) => !parent?.useInternal || parent?.linkType !== LINK_TYPE_NAME.project,
        },
        {
            ...linkTypeFloorPlans,
            hidden: ({ parent }) => !parent?.useInternal || parent?.linkType !== LINK_TYPE_NAME.floorPlans,
        },
        {
            ...linkTypeBlogs,
            hidden: ({ parent }) => !parent?.useInternal || parent?.linkType !== LINK_TYPE_NAME.blog,
        }

    ]
}

export const RTFField = {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [{
        type: 'block',
        styles: [],
        marks: {
            annotations: [
                RTFAnnotationLink
            ]
        },
    }]
}

export const ImageField = {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: false,
    },
}

export const ImageAltField = {
    name: 'alt',
    title: 'Image Alt',
    type: 'string',
}

export const CreatedDateField = {
    name: 'createdDate',
    type: 'date',
    validation: (rule) => rule.required(),
    initialValue: moment(),
}

export const MarginTopField = {
    title: 'Margin Top',
    name: 'marginTop',
    type: 'string',
    options: {
        list: [
            ...enumToArrayOfObjects(HeightVariants)
        ],
    },
    layout: 'dropdown'
}

export const MarginBottomField = {
    title: 'Margin Bottom',
    name: 'marginBottom',
    type: 'string',
    options: {
        list: [
            ...enumToArrayOfObjects(HeightVariants)
        ],
    },
    layout: 'dropdown'
}


export const hubspotForms = [
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
    }
]

export const HubspotField = {
    name: 'hubspot',
    title: 'Hubspot Form',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: hubspotForms
}
