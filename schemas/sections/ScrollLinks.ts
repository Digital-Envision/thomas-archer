
export default {
    type: 'object',
    name: 'ScrollLinks',
    title: 'Scroll Links',
    fields: [
        {
            name: 'placeholder',
            type: 'string',
            description: 'Links will be auto popolated from Scroll Anchor field'
        },

    ],
    preview: {
        select: {
            title: 'variant',
            subtitle: 'label', // unused
            disabled: 'disabled',
            selected: 'variant'
        },
        prepare({ title, subtitle, disabled, selected }) {
            return {
                title: `Scroll Links`
            }
        }
    }
}

