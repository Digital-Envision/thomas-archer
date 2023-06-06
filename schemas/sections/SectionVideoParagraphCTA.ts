import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import link from 'schemas/components/link'
import { validateVimeoUrl } from 'utils/checkVideoResource'

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
                ...link,
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
