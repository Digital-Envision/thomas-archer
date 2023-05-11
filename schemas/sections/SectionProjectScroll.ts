import { fields } from "./SectionHeadingParagraphCTA"

export const isSelectedProjectFields = (props?) => ({
    name: 'isSelectedProject',
    title: 'Is Use Selected Project',
    type: 'boolean',
    description:
        'Toggled off: use latest project. Toggled on: selected project',
    ...props
})


export const selectedProjectsFields = (props?) => ({
    name: 'selectedProjects',
    title: 'Selected Project',
    hidden: ({ parent }) => !parent?.isSelectedProject,
    type: 'array',
    of: [
        {
            type: 'reference',
            to: [{ type: 'projects' }],
            options: {
                disableNew: true,
                filter: (props) => {
                    console.log('🔥', props)
                    const { document } = props
                    return {
                        filter: 'slug.current != $currentSlug && _id != $currentId',
                        params: {
                            currentId: document._id,
                            currentSlug: document.slug.current,
                            currentRev: document._rev
                        },
                    };
                },
            },
        },
    ],
    ...props
})

export default {
    name: 'SectionProjectScroll',
    title: 'Project Scroll',
    type: 'object',
    fields: [
        ...fields,
        isSelectedProjectFields()
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'label',
            disabled: 'disabled',
        },
        prepare({ title, disabled }) {
            return {
                title: `Project Scroll: ${disabled ? 'DISABLED' : title
                    }`,
            }
        },
    }
}
