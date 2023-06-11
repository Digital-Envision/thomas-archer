export default {
    type: 'object',
    name: 'SectionFeaturedImage',
    title: 'SectionFeaturedImage',
    fields: [
        {
            name: 'listSketches',
            title: 'List of Sketches',
            type: 'array',
            validation: (Rule) => Rule.max(2),
            of: [
                {
                    name: 'sketch',
                    title: 'Sketch',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                        {
                            name: 'listImages',
                            title: 'List Images',
                            type: 'object',
                            fields: [
                                {
                                    name: 'mobileImage',
                                    title: 'Mobile Image',
                                    type: 'object',
                                    description:
                                        'It will showing only on mobile screen size',
                                    fields: [
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                            options: {
                                                hotspot: false,
                                            },
                                        },
                                        {
                                            name: 'alt',
                                            title: 'Image Alternative Text',
                                            type: 'string',
                                        },
                                    ],
                                },
                                {
                                    name: 'desktopImage',
                                    title: 'Desktop Image',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'image',
                                            title: 'Image',
                                            type: 'image',
                                            options: {
                                                hotspot: false,
                                            },
                                        },
                                        {
                                            name: 'alt',
                                            title: 'Image Alternative Text',
                                            type: 'string',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Section Featured Image',
            }
        },
    },
}
