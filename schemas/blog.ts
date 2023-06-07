import { CreatedDateField, HeadingField, ImageField, RTFField, SEOField, SlugField } from "./components/fields";
import { DOCUMENT_TYPE_SCHEMA_NAME } from "./global/DetailsPage";
import { listImagesFields } from "./sections/SectionGalleryScroll";

export default {
    type: 'document',
    title: 'Blog',
    name: DOCUMENT_TYPE_SCHEMA_NAME.Blog,
    fields: [
        CreatedDateField,
        SlugField,
        HeadingField,
        RTFField,
        ImageField,
        {
            name: 'page',
            title: 'Detail Page',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'SectionGalleryScroll',
                    type: 'object',
                    options: {
                        collapsible: true,
                        collapsed: true,
                    },
                    fields: [
                        listImagesFields()
                    ]
                },
            ]
        },
        SEOField,
    ],
}
