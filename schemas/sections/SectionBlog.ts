import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionBlog',
    title: 'SectionBlog',
    fields: [
        // {
        //     name: 'SectionHeadingParagraphCTA',
        //     title: 'SectionHeadingParagraphCTA',
        //     type: 'SectionHeadingParagraphCTA',
        // },
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'paragraph',
            type: 'text',
        },
        {
            name: 'ArticleBlogCard1',
            title: 'ArticleBlogCard - 1',
            type: 'ArticleBlogCard',
        },
        {
            name: 'ArticleBlogCard2',
            title: 'ArticleBlogCard - 2',
            type: 'ArticleBlogCard',
        },
        {
            name: 'ArticleBlogCard3',
            title: 'ArticleBlogCard - 3',
            type: 'ArticleBlogCard',
        },
        {
            name: 'Margin',
            title: 'Margin',
            type: 'Margin',
        }
        // {
        //     title: 'Margin Top',
        //     name: 'marginTop',
        //     type: 'string',
        //     options: {
        //         list: [
        //             ...enumToArrayOfObjects(HeightVariants)
        //         ],
        //     },

        //     layout: 'dropdown'
        // },
        // {
        //     title: 'Margin Bottom',
        //     name: 'marginBottom',
        //     type: 'string',
        //     options: {
        //         list: [
        //             ...enumToArrayOfObjects(HeightVariants)
        //         ],
        //     },

        //     layout: 'dropdown'
        // },
    ],
    preview: {
        select: {
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionBlog`
            }
        }
    }
}