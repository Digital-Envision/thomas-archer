import { getSanityData, getSanityDataById } from 'lib/sanity.client'
import _ from 'lodash'
import { DOCUMENT_TYPES_PAGE_NAME } from 'schemas/global/DetailsPage'

export const getRouteDetail = (slugs, pages, detailsPage) => {
    // set page to parent/children
    let currentPath = ''
    let currentDetailPath = ''
    let detailPathId = ''

    slugs.map((slug, index) => {
        if (index !== 0) {
            currentPath += `/${slug}`

            if (index !== slugs.length - 1) {
                currentDetailPath += `/${slug}`
            } else {
                detailPathId += slug
            }
        } else {
            currentPath += slug
            currentDetailPath += slug
        }
    })

    // find if currentPath is available in pages
    const isPageExist = _.find(pages, { url: currentPath })

    if (isPageExist) {
        return {
            page: _.last(slugs),
        }
    }

    // to check if the page available
    const isDetailPathPageExist = _.find(pages, { url: currentDetailPath })

    if (isDetailPathPageExist) {
        const keyDetailPathPage = _.findKey(
            pages,
            (page) => page.url === isDetailPathPageExist.url
        )

        // to check if the page is exist in detailPages
        const isDetailPathExist = _.findKey(detailsPage, (page) => {
            return page.parentPage._ref === keyDetailPathPage
        })

        if (isDetailPathExist) {
            return {
                detailsPage: isDetailPathExist,
                detailPathId,
                page: `${currentDetailPath}/${detailPathId}`,
            }
        }
    }

    return {}
}

export const setPropsForPage = async () => {
    const projects = await getSanityData({
        type: 'projects',
        condition: `&& slug.current != null`,
        limit: 12,
    })

    const awardedProjects = await getSanityData({
        type: 'projects',
        condition: `&& slug.current != null && award.awards != null`,
        limit: 12,
    })

    const blogs = await getSanityData({
        type: 'blogs',
        condition: `&& slug.current != null`,
        limit: 12,
    })

    const floors = await getSanityData({
        type: 'floors',
        condition: `&& slug.current != null`,
        limit: 12,
    })

    return {
        projects,
        awardedProjects,
        blogs,
        floors: floors?.data,
    }
}

export const setPropsForDetailPage = async (props) => {
    const { routeDetail } = props
    const { detailsPage, detailPathId } = routeDetail
    let data = {}

    switch (detailsPage) {
        case DOCUMENT_TYPES_PAGE_NAME.FloorPlan:
            data = await getDataFloorDetailPage({ slug: detailPathId })
            break
        case DOCUMENT_TYPES_PAGE_NAME.Projects:
            data = await getDataProjectDetailPage({ slug: detailPathId })
            break
        case DOCUMENT_TYPES_PAGE_NAME.Blog:
            data = await getDataBlogDetailPage({ slug: detailPathId })
            break
        default:
            data = {}
    }

    return data
}

export const getDataProjectDetailPage = async ({ slug }) => {
    const currentProject = await getSanityDataById({
        type: 'projects',
        condition: `&& slug.current == "${slug}"`,
    })

    if (_.isEmpty(currentProject)) {
        return {}
    }

    // if isSelectedProject toggled, get 3 selected projects
    const selectedProjectsRef =
        currentProject?.page?.SectionProjectScroll?.isSelectedProject &&
        _.map(
            currentProject?.page?.SectionProjectScroll?.selectedProjects,
            '_ref'
        )

    // if toggled: selected projects, or else get latest 12 projects
    const projects = !_.isEmpty(selectedProjectsRef)
        ? ((await getSanityData({
              type: 'projects',
              condition: `&& slug.current != null && _id != "${currentProject?._id}" && _id in $ids`,
              params: { ids: selectedProjectsRef },
          })) as any)
        : ((await getSanityData({
              type: 'projects',
              condition: `&& slug.current != null && _id != "${currentProject?._id}"`,
              limit: 12,
          })) as any)

    const selectedProjectsKeys =
        currentProject.page?.SectionProjectScroll?.isSelectedProject &&
        currentProject.page?.SectionProjectScroll?.selectedProjects

    const sortedProjects = !_.isEmpty(selectedProjectsKeys)
        ? {
              pagination: projects?.pagination,
              data: _.sortBy(projects.data, (project) => {
                  // this will sort fetched projects, according to configured on selectedProjects array
                  const ref = selectedProjectsKeys.find(
                      (selected) => selected._ref === project._id
                  )
                  return selectedProjectsKeys.indexOf(ref)
              }),
          }
        : projects // projects already sorted on groq level

    return { project: currentProject, projects: sortedProjects }
}

export const getDataBlogDetailPage = async ({ slug }) => {
    const currentBlog = await getSanityDataById({
        type: 'blogs',
        condition: `&& slug.current == "${slug}"`,
    })

    if (_.isEmpty(currentBlog)) {
        return {}
    }

    return { blog: currentBlog }
}

export const getDataFloorDetailPage = async ({ slug }) => {
    const currentFloor = await getSanityDataById({
        type: 'floors',
        condition: `&& slug.current == "${slug}"`,
    })

    if (_.isEmpty(currentFloor)) {
        return {}
    }

    return { floors: currentFloor }
}
