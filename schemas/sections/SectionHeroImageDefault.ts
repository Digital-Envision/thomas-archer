import { HeightVariants } from 'components/base/Divider'
import { enumToArrayOfObjects } from 'lib/utils'

export const SectionHeroImageDefaultFields = [
    {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
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
    name: 'SectionHeroImageDefault',
    title: 'SectionHeroImageDefault',
    type: 'object',
    fields: SectionHeroImageDefaultFields,
    preview: {
        prepare() {
            return { title: `SectionHeroImageDefault` }
        },
    },
}
