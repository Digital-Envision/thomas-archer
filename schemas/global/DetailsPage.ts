import { defineField } from 'sanity'

export const DOCUMENT_TYPES_PAGE_NAME = {
  FloorPlan: 'floorPlan',
  Projects: 'projects',
  Blog: 'blog',
}

const documentDetailsPage = [
  {
    name: DOCUMENT_TYPES_PAGE_NAME.FloorPlan,
    title: 'Floor Plan',
  },
  {
    name: DOCUMENT_TYPES_PAGE_NAME.Projects,
    title: 'Projects',
  },
  {
    name: DOCUMENT_TYPES_PAGE_NAME.Blog,
    title: 'Blog',
  },
]

export default defineField({
  name: 'DetailsPage',
  title: 'Details Page',
  type: 'object',
  description:
    'To set the parent of the details page, if there is no parent, the page should be 404',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: documentDetailsPage.map((doc) => {
    return {
      ...doc,
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'parentPage',
          title: 'Parent Page',
          type: 'reference',
          to: [{ type: 'page' }],
        },
      ],
    }
  }),
})
