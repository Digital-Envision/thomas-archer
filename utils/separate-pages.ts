// this function to separate the parent and the sub pages;
import _ from 'lodash'

const separatePages = (navLinks, pages) => {
  if (_.isArray(navLinks)) {
    const parentPage = {}
    const subPage = {}

    const parentSlug = []
    const subSlug = []

    const childrenPage = []
    navLinks?.map((link) => {
      if (link?.useInternal) {
        parentPage[link?.href?._ref] = {
          name: link?.label,
          url: link?.href?.internalHref,
        }

        parentSlug.push(link?.href?.internalHref)
      }

      if (_.isArray(link.children)) {
        childrenPage.push({
          parent: link?.useInternal ? link?.href?.internalHref : '',
          children: link?.children,
        })
      }
    })

    for (let i = 0; i < childrenPage.length; i++) {
      childrenPage[i].children.map((link) => {
        if (link?.useInternal) {
          if (_.isUndefined(parentPage[link?.href?._ref])) {
            subPage[link?.href?._ref] = {
              name: link?.label,
              url: `${childrenPage[i].parent}/${link?.href?.internalHref}`,
            }

            subSlug.push(
              `${childrenPage[i].parent}/${link?.href?.internalHref}`
            )
          }
        }
      })
    }

    if (_.isArray(pages)) {
      pages?.map((link) => {
        if (
          _.isUndefined(parentPage[link?._id]) &&
          _.isUndefined(subPage[link?._id])
        ) {
          parentPage[link?._id] = {
            name: '',
            url: link?.url,
          }

          parentSlug.push(link?.url)
        }
      })
    }

    return {
      pages: {
        ...parentPage,
        ...subPage,
      },
      slug: [...parentSlug, ...subSlug],
    }
  }

  return {
    pages: {},
    slug: [],
  }
}

export default separatePages
