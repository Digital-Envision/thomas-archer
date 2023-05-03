import { dataset, projectId } from './sanity.api'

export const enumToArrayOfObjects = (e: any) => {
    return Object.keys(e).map((key) => ({ title: key, value: e[key] }))
}

export const getVideoUrl = (fileObject) => {
    const pattern = /^file-(.+?)-(\w+)$/
    const fileName = fileObject?.options?.source?.asset?._ref

    const match = fileName.match(pattern)
    if (match) {
        const newFileName = match[1] + '.' + match[2]
        return `https://cdn.sanity.io/files/${projectId}/${dataset}/${newFileName}`
    } else {
        return ''
    }
}


// for previewing the sanity block type
export const blockToPlainText = (blocks = []) => {
    return (
        blocks
            // loop through each block
            .map((block) => {
                // if it's not a text block with children,
                // return nothing
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                // loop through the children spans, and join the
                // text strings
                return block.children.map((child) => child.text).join('')
            })
            // join the paragraphs leaving split by two linebreaks
            .join('\n\n')
    )
}
