// this function to separate the parent and the sub pages;
import _ from 'lodash'
import { LINK_TYPE_NAME } from 'schemas/components/link'

// to structured the document types
// from [
//   {
//      slug: "slugger",
//      _id: "uuid"
//   }
// ]
//
// to {
//    _id: {
//      slug: "slugger"
//    }
// }
//
export const structuredDocumentTypes = (documentTypesSlugs) => {
  const documentTypesPage = {}

  _.forIn(documentTypesSlugs, (obj, objKey) => {
    _.forEach(obj, (value) => {
      if (!documentTypesPage[objKey]) {
        documentTypesPage[objKey] = {
          [value?._id]: value.slug,
        }
      } else {
        documentTypesPage[objKey][value?._id] = value.slug
      }
    })
  })

  return documentTypesPage
}

export const checkLinkType = (allComponents) => {
  const projectType = []
  const floorPlanType = []
  const blogType = []

  // to check if the component has link type
  // so it does recursive, to check every fields
  const recursiveComponents = (components) => {
    _.forEach(components, (obj) => {
      _.forIn(obj, (value, key) => {
        if (_.isArray(value)) {
          recursiveComponents(value)
        } else if (_.isObject(value) && !_.isNull(value)) {
          recursiveComponents([value])
        } else {
          if (key === 'linkType') {
            if (value === LINK_TYPE_NAME.project) {
              if (
                _.isObject(obj[LINK_TYPE_NAME.project]) &&
                !_.isNull(obj[LINK_TYPE_NAME.project])
              ) {
                if (
                  !_.includes(projectType, obj[LINK_TYPE_NAME.project]?._ref)
                ) {
                  projectType.push(obj[LINK_TYPE_NAME.project]?._ref)
                }
              }
            } else if (value === LINK_TYPE_NAME.floorPlans) {
              if (
                _.isObject(obj[LINK_TYPE_NAME.floorPlans]) &&
                !_.isNull(obj[LINK_TYPE_NAME.floorPlans])
              ) {
                if (
                  !_.includes(
                    floorPlanType,
                    obj[LINK_TYPE_NAME.floorPlans]?._ref
                  )
                ) {
                  floorPlanType.push(obj[LINK_TYPE_NAME.floorPlans]?._ref)
                }
              }
            } else if (value === LINK_TYPE_NAME.blog) {
              if (
                _.isObject(obj[LINK_TYPE_NAME.blog]) &&
                !_.isNull(obj[LINK_TYPE_NAME.blog])
              ) {
                if (!_.includes(blogType, obj[LINK_TYPE_NAME.blog]?._ref)) {
                  blogType.push(obj[LINK_TYPE_NAME.blog]?._ref)
                }
              }
            }
          }
        }
      })
    })
  }

  recursiveComponents(allComponents)

  if (
    _.isEmpty(projectType) &&
    _.isEmpty(floorPlanType) &&
    _.isEmpty(blogType)
  ) {
    return {}
  }

  return {
    projectType,
    floorPlanType,
    blogType,
  }
}

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
