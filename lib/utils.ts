import _ from 'lodash'
import { SanityFiles, SanityImage } from 'utils/interfaces'
import { dataset, projectId } from './sanity.api'
import { urlForImage } from './sanity.image'

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

export const getImageUrl = (image: SanityImage | SanityFiles) => {
    return (!_.isEmpty(image) && urlForImage(image)?.url()) || ''
}

export const origin =
    typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : ''

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

export const getUrlFromSanityFile = (file) => {
    const ref = file?.asset?._ref
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split('-')
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}
