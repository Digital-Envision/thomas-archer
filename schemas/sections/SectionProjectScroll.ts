import { fields } from "./SectionHeadingParagraphCTA"

export default{
    name: 'SectionProjectScroll',
    title: 'Project Scroll',
    type: 'object',
    fields,
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `Project Scroll: ${
                    disabled ? 'DISABLED' : title
                }`,
            }
        },
    }
}
