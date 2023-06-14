import _ from 'lodash'
import { hubspotFields } from 'schemas/global/Hubspot'
import { Link } from './link'
import { FileType } from './file'

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
    ..._.map(hubspotFields, (field) => {
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
