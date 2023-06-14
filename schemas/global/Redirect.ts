import { defineField } from "sanity"

export const redirectFields = {
    name: 'item',
    title: 'Item',
    type: 'object',
    fields: [
        {
            name: 'source',
            type: 'string',
            description: 'start with /'
        },
        {
            name: 'destination',
            type: 'string',
            description: 'start with /'
        },
        {
            name: 'permanent',
            title: 'Is permanent redirect?',
            type: 'boolean',
            description: 'toggled off (307 temporary), toggled on (308 permanent)'
        },
    ]
}


const Redirect = defineField({
    name: 'Redirect',
    title: 'Redirect',
    type: 'array',
    of: [redirectFields],
})

export default Redirect