// using for custom fixed component, that dont have any data on sanity.io 

export default {
    type: 'object',
    name: 'fixedComponent',
    title: 'Fixed component reference',
    fields: [
        {
            type: 'string',
            name: 'name'
        }
    ],
    preview: {
        select: {
            title: 'name'
        },
        prepare({ title }) {
            return {
                title: `Fixed component: ${title}`
            }
        }
    }
}
