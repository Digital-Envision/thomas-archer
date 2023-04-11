import { defineField, defineType } from 'sanity'
import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
export default defineType({
    name: 'Carousel',
    title: 'Carousel',
    type: 'object',
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                },
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
                title: 'Carousel'
            }
        }
    }
})
