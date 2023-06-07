import moment from "moment"

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

export const RTFField = {
    name: 'content',
    type: 'array',
    of: [{ type: 'block' }]
}

export const ImageField = {
    name: 'image',
    type: 'image',
    options: {
        hotspot: false,
    },
}

export const CreatedDateField = {
    name: 'createdDate',
    type: 'date',
    validation: (rule) => rule.required(),
    initialValue: moment(),
}
