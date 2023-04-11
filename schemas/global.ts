export default {
  type: 'document',
  name: 'global',
  title: 'Global',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Global sections',
      description: 'Add, edit, and reorder sections',
      of: [{ type: 'Link' }],
    },
  ],
}
