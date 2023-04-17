import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'Section3ColsCards',
    title: 'Section3ColsCards',
    fields: [
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
            name: 'headingTagLevel',
            title: 'Heading Tag Level',
            type: 'string',
            options: {
                list: [
                    'H1', 'H2', 'H3'
                ],
            },
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
                title: `Section3ColsCards`
            }
        }
    }
}
