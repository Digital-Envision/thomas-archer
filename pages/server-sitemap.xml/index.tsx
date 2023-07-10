import { client } from 'lib/sanity.client'
import _ from 'lodash'
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { DOCUMENT_TYPES_PAGE_NAME } from 'schemas/global/DetailsPage'

export const getServerSideProps = async (ctx) => {
  const global = await client.fetch(`*[_type == "global"][0]{
    'DetailsPage': DetailsPage{
      'blog': blog.parentPage->.slug.current,
      'projects': projects.parentPage->.slug.current,
      'floorPlan': floorPlan.parentPage->.slug.current
    },
    Links[]{
        'parentSlug': internalHref -> slug.current,
        children[] {
          'slug':  select(
            ^.internalHref->slug.current != internalHref -> slug.current =>  internalHref->slug.current,
            ^.internalHref->slug.current == internalHref -> slug.current => null
          ),       
        },
    }
  }
  `)

  const blogs = await client.fetch(
    `*[_type == "blogs" && (seo.isUseNoIndex==null || seo.isUseNoIndex==false) ] | order(slug.current asc) {'slug': slug.current }`
  )
  const projects = await client.fetch(
    `*[_type == "projects" && (seo.isUseNoIndex==null || seo.isUseNoIndex==false) ] | order(slug.current asc) {'slug': slug.current }`
  )
  const floors = await client.fetch(
    `*[_type == "floors" && (seo.isUseNoIndex==null || seo.isUseNoIndex==false)  ] | order(slug.current asc) {'slug': slug.current }`
  )

  const dataset = {
    projects,
    floorPlan: floors,
    blog: blogs,
  }

  const getParents = (parentSlug, dataset) => {
    const isOnParents = _.keys(dataset).includes(parentSlug)

    if (parentSlug === global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.Projects]) {
      return {
        isOnParents,
        slugs: [
          parentSlug,
          ..._.map(dataset.projects, (o) => `${parentSlug}/${o.slug}`),
        ],
      }
    } else if (
      parentSlug === global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.Blog]
    ) {
      return {
        isOnParents,
        slugs: [
          parentSlug,
          ..._.map(dataset.blog, (o) => `${parentSlug}/${o.slug}`),
        ],
      }
    } else if (
      parentSlug === global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.FloorPlan]
    ) {
      return {
        isOnParents,
        slugs: [
          parentSlug,
          ..._.map(dataset.floorPlan, (o) => `${parentSlug}/${o.slug}`),
        ],
      }
    }

    return { isOnParents, slugs: [parentSlug] }
  }

  const getChildren = (parentSlug, dataset, children) => {
    return {
      slugs: _.map(children, ({ slug }) => {
        if (slug === global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.Projects]) {
          return [
            `${parentSlug}/${slug}`,
            ..._.map(
              dataset.projects,
              (o) => `${parentSlug}/${slug}/${o.slug}`
            ),
          ]
        } else if (
          slug === global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.Blog]
        ) {
          return [
            `${parentSlug}/${slug}`,
            ..._.map(dataset.blog, (o) => `${parentSlug}/${slug}/${o.slug}`),
          ]
        } else if (
          `${parentSlug}/${slug}` ===
          global?.DetailsPage[DOCUMENT_TYPES_PAGE_NAME.FloorPlan]
        ) {
          return [
            `${parentSlug}/${slug}`,
            ..._.map(
              dataset.floorPlan,
              (o) => `${parentSlug}/${slug}/${o.slug}`
            ),
          ]
        } else if (slug) {
          return [`${parentSlug}/${slug}`]
        }
      }),
    }
  }

  const urls = _.map(global?.Links, ({ parentSlug, children }) => {
    const { slugs: parentSlugs } = getParents(parentSlug, dataset)
    const { slugs: childrenSlugs } = getChildren(parentSlug, dataset, children)

    const mergedUrls = [
      ..._.compact(_.flatten(parentSlugs)),
      ..._.compact(_.flatten(childrenSlugs)),
    ]

    return _.compact(mergedUrls)
  })

  const siteMapsRows = _.flatten(urls).map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${item}`,
  }))

  return getServerSideSitemapLegacy(ctx, siteMapsRows)
}

export default function Site() {}
