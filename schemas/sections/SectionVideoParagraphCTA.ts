import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

// Define a custom validation function for a Vimeo video URL
function validateVimeoUrl(url) {
    // Extract the video ID from the URL
    const match = url.match(/^https?:\/\/player\.vimeo\.com\/video\/(\d+)/i)
    const videoId = match && match[1]

    // Check that the URL matches the expected format and that the video ID is valid
    if (!videoId) {
        return 'Please enter a valid Vimeo video URL in the format https://player.vimeo.com/video/{ID}'
    }

    return true
}

export default {
    name: 'SectionVideoParagraphCTA',
    title: 'SectionVideoParagraphCTA',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'object',
            fields: [
                {
                    name: 'cover',
                    title: 'Cover Image',
                    type: 'image',
                    options: {
                        hotspot: false,
                    },
                },
                {
                    name: 'video',
                    title: 'Video',
                    type: 'url',
                    description: 'Please input vimeo url',
                    validation: (Rule) =>
                        Rule.custom((url) => validateVimeoUrl(url)),
                },
            ],
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [
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
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },

            layout: 'dropdown',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'SectionVideoParagraphCTA',
            }
        },
    },
}
