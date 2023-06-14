import { ImageAltField } from 'schemas/components/fields'
import { MarginBottomField, MarginTopField } from '../components/fields'

export default {
    type: 'object',
    name: 'SectionFeaturedImage',
    title: 'SectionFeaturedImage',
    fields: [
        { ...ImageAltField },
        {
            name: 'mobileImage',
            title: 'Mobile Image',
            type: 'image',
            options: {
                hotspot: false,
            },
            description: 'It will showing only on mobile screen size',
        },
        {
            name: 'desktopImage',
            title: 'Desktop Image',
            type: 'image',
            options: {
                hotspot: false,
            },
        },
        { ...MarginTopField },
        { ...MarginBottomField },
    ],
    preview: {
        prepare() {
            return {
                title: 'Section Featured Image',
            }
        },
    },
}
