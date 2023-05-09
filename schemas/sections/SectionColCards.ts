import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

export default {
    type: 'object',
    name: 'SectionColCards',
    title: 'SectionColCards',
    fields: [
        {
            name: 'ListArticleBlogCards',
            title: 'List Article Blog Cards',
            type: 'array',
            of: [
                {
                    name: 'ArticleBlogCard',
                    title: 'Article Blog Card',
                    type: 'ArticleBlogCard',
                },
            ],
            validation: (Rule) => Rule.max(3).min(2),
        },
        {
            name: 'headingTagLevel',
            title: 'Heading Tag Level',
            type: 'string',
            options: {
                list: ['H1', 'H2', 'H3'],
            },
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
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionColCards`,
            }
        },
    },
}
