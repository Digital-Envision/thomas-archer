import _ from 'lodash'
import { ImageAltField, ImageField } from 'schemas/components/fields'
import link from 'schemas/components/link'
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
        ImageField,
        ImageAltField,
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
                ...link
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
