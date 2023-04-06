import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionBlog',
    title: 'SectionBlog',
    fields: [
        {
            name: 'SectionHeadingParagraphCTA',
            title: 'SectionHeadingParagraphCTA',
            type: 'SectionHeadingParagraphCTA',
        },
        {
            name: 'Section3ColsCards',
            title: 'Section3ColsCards',
            type: 'Section3ColsCards',
        },
        {
            title: 'Margin Top',
            name: 'marginTop',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
        {
            title: 'Margin Bottom',
            name: 'marginBottom',
            type: 'string',
            options: {
                list: [
                    ...enumToArrayOfObjects(HeightVariants)
                ],
            },

            layout: 'dropdown'
        },
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