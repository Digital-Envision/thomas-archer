import _ from 'lodash'
import { Link } from './link'
import { FileType } from './file'
import { hubspotForms } from '../fields'

export default [
    {
        name: 'label',
        title: 'Name',
        type: 'string',
    },
    {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
            list: [
                { title: 'Link', value: 'link' },
                { title: 'Modal', value: 'modal' },
                { title: 'File', value: 'file' },
            ],
        },
        initialValue: 'link',
    },
    ...Link,
    ..._.map(hubspotForms, (field) => {
        return {
            ..._.omit(field, 'validation'),
            hidden: ({ parent }) => parent?.type !== 'modal',
            validation: (Rule) =>
                Rule.custom((val, { parent }) => {
                    if (parent?.type === 'modal' && _.isEmpty(val)) {
                        return 'Field is required'
                    }

                    return true
                }),
        }
    }),
    ...FileType,
]
