import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import { ImageAltField, ImageField } from 'schemas/components/fields'
export default defineType({
    name: 'Carousel',
    title: 'Carousel',
    type: 'object',
    fields: [
        defineField({
            name: 'autoSlide',
            title: 'Auto Slide',
            type: 'boolean',
            description: 'The slide will changes every 4 seconds',
            initialValue: false,
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    name: 'img',
                    title: "Image Object",
                    type: 'object',
                    fields: [
                        ImageField,
                        ImageAltField,
                    ]
                }
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'marginTop',
            title: 'Margin Top',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },
            initialValue: HeightVariants.none,
        }),
        defineField({
            name: 'marginBottom',
            title: 'Margin Bottom',
            type: 'string',
            options: {
                list: [...enumToArrayOfObjects(HeightVariants)],
            },
            initialValue: HeightVariants.none,
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Carousel',
            }
        },
    },
})
