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
