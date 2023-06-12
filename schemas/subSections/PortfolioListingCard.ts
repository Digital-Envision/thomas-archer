import { ImageAltField, ImageField } from "schemas/components/fields"

export default {
    type: 'object',
    name: 'PortfolioListingCard',
    title: 'PortfolioListingCard',
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'subHeading',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'link',
            type: 'text',
        },
        ImageField,
        ImageAltField
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `PortfolioListingCard: ${disabled ? 'DISABLED' : title}`
            }
        }
    }
}
