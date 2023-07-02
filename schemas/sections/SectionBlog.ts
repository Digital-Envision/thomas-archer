import { HeightVariants } from 'components/base/Divider';
import { enumToArrayOfObjects } from 'lib/utils';
import { HeadingTagLevel, RTFField } from 'schemas/components/fields';
import link from 'schemas/components/link';
export default {
    type: 'object',
    name: 'SectionBlog',
    title: 'SectionBlog',
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        {
            ...HeadingTagLevel, options: {
                list: [
                    'H2', 'H3', 'H4'
                ],
            },
        },
        {
            ...RTFField,
            title: 'RTF Paragraph'
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                ...link,
            ],
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
                title: `SectionBlog`
            }
        }
    }
}
