import _ from 'lodash'
import { validateVimeoUrl } from 'utils/checkVideoResource'

export default {
    type: 'object',
    name: 'ArticleBlogCard',
    title: 'ArticleBlogCard',
    fields: [
        {
            name: 'heading',
            type: 'string',
        },
        {
            name: 'paragraph',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'isVideoMode',
            title: 'Use Video Mode',
            type: 'boolean',
            validation: (Rule) =>
                Rule.custom((value, { parent }) => {
                    if (!value && !_.isEmpty(parent?.video)) {
                        return 'Please remove the video url first'
                    }

                    return true
                }),
        },
        {
            name: 'video',
            title: 'Video',
            type: 'url',
            description: 'Please input vimeo url',
            validation: (Rule) =>
                Rule.custom((url, { parent }) =>
                    validateVimeoUrl(url, !parent?.isVideoMode)
                ),
            hidden: ({ parent }) => !parent.isVideoMode,
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'label',
                    title: 'Name',
                    type: 'string',
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
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `ArticleBlogCard: ${disabled ? 'DISABLED' : title}`,
            }
        },
    },
}
