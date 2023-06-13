import _ from 'lodash'

export const FileType = [
  {
    name: 'isExternalFile',
    title: 'Use external link download',
    type: 'boolean',
    hidden: ({ parent }) => parent?.type !== 'file'
  },
  {
    name: 'fileName',
    title: 'File Name',
    type: 'string',
    description:
      'If you not set the file name, the download file name should be the original file name, if there is no original file name, than the file name should an ID number. And make sure, the name should has an extension (.pdf , .xlsx, etc)',
    hidden: ({ parent }) => parent?.isExternalFile || parent?.type !== 'file',
  },
  {
    name: 'externalFile',
    title: 'External File Download',
    type: 'url',
    hidden: ({ parent }) => !parent?.isExternalFile || parent?.type !== 'file',
    validation: (Rule) => Rule.custom((val, { parent }) => {
        if (parent?.type === 'file' && parent?.isExternalFile && _.isEmpty(val)) {
            return 'Field is required'
        }
        return true
    })
  },
  {
    name: 'file',
    title: 'File',
    type: 'file',
    hidden: ({ parent }) => parent?.isExternalFile || parent?.type !== 'file',
    validation: (Rule) => Rule.custom((val, { parent }) => {
        if (parent?.type === 'file' && !parent?.isExternalFile && _.isEmpty(val)) {
            return 'Field is required'
        }
        return true
    })
  },
]
