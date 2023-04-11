import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
export default {
    type: 'object',
    name: 'SectionProjectListing',
    title: 'SectionProjectListing',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
                {
                    name: 'project',
                    title: 'Project',
                    type: 'PortfolioListingCard',
                },
            ]
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
            title: 'placeholder',
            subtitle: 'label',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `SectionProjectListing`
            }
        }
    }
}