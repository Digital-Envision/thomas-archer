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
        }
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
