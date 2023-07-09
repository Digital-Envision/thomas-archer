import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'
import { ImageAltField, ImageField } from 'schemas/components/fields'

export const name = 'SectionHeroImageDefault'

export const SectionHeroImageDefaultFields = [
    {
        ...ImageField,
        options: {
            hotspot: true,
        },
    },
    ImageAltField,
    {
        name: 'isOverlay',
        title: 'Use Overlay',
        type: 'boolean',
        initialValue: true,
        description: 'It will make a little dark about a half of the top image',
    },
    {
        name: 'marginTop',
        title: 'Margin Top',
        type: 'string',
        options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
        },
        initialValue: HeightVariants.none,
    },
    {
        name: 'marginBottom',
        title: 'Margin Bottom',
        type: 'string',
        options: {
            list: [...enumToArrayOfObjects(HeightVariants)],
        },
        initialValue: HeightVariants.none,
    },
]

export default {
    name,
    title: 'SectionHeroImageDefault',
    type: 'object',
    fields: SectionHeroImageDefaultFields,
    preview: {
        prepare() {
            return { title: `SectionHeroImageDefault` }
        },
    },
}
