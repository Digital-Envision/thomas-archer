// this function to separate the parent and the sub pages;
import _ from 'lodash'

const separatePages = (links) => {
  if (_.isArray(links)) {
    const children = []
    const childrenSlug = []

    const parent = links?.map((link) => {
      if (_.isArray(link.children)) {
        for (let i = 0; i < link.children.length; i++) {
          if (link.children[i]?.useInternal) {
            if (link?.useInternal) {
              children.push(
                `${link.internalHref}/${link.children[i].internalHref}`
              )
              childrenSlug.push(link.children[i].internalHref)
            } else {
              children.push(link.children[i].internalHref)
              childrenSlug.push(link.children[i].internalHref)
            }
          }
        }
      }

      if (link?.useInternal) {
        return link?.internalHref
      }
      return ''
    })

    return {
      pages: [...parent, ...children],
      slug: [...parent, ...childrenSlug],
    }
  }

  return {
    pages: [],
    slug: [],
  }
}

export default separatePages
