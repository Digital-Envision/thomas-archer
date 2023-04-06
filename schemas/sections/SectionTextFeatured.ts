import { HeightVariants } from "components/base/Divider"
import { enumToArrayOfObjects } from "lib/utils"

export default {
    type: 'object',
    name: 'SectionTextFeatured',
    title: 'SectionTextFeatured',
    fields: [
        {
            name: 'leftHeading',
            type: 'text',
        },
        {
            name: 'rightHeading',
            type: 'text',
        },
        {
            name: 'postedBy',
            type: 'string',
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
            title: 'leftHeading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionTextFeatured`
            }
        }
    }
}
