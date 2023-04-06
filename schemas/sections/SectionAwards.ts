export default {
    type: 'object',
    name: 'SectionAwards',
    title: 'SectionAwards',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'paragraph',
            title: 'Paragraph',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [
                {
                    name: 'award',
                    title: 'Award',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }
                    ]
                },
            ]
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
                title: `SectionAwards`
            }
        }
    }
}