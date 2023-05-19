import { getSanityData, getSanityDataById } from "lib/sanity.client"
import _ from "lodash"

export const getRouteDetail = (testCase) => {
    const detailSlugs = ['project', 'blog', 'floor'] // todo fetch list from sanity
    const result = { route: [], detail: [] }
    let currentPart = 'route'

    _.forEach(testCase, (item) => {
        if (_.includes(detailSlugs, item)) {
            currentPart = 'detail'
        }
        result[currentPart].push(item)
    })

    const isDetailPage = !_.isEmpty(result?.detail)

    return { ...result, isDetailPage }
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
    const { page, routeDetail } = props
    const [docType, docId] = routeDetail?.detail
    let data

    if (docType === 'project') {
        data = await getDataProjectDetailPage(props)
    } else if (docType === 'blog') {
        data = await getDataBlogDetailPage(props)
    } else if (docType === 'floor') {
        data = await getDataFloorDetailPage(props)
    }

    return data
}

export const getDataProjectDetailPage = async ({ routeDetail }) => {
    const [docType, docSlug] = routeDetail?.detail

    const currentProject = await getSanityDataById({
        type: docType + 's',
        condition: `&& slug.current == "${docSlug}"`,
    })

    // if isSelectedProject toggled, get 3 selected projects
    const selectedProjectsRef =
        currentProject?.page?.SectionProjectScroll?.isSelectedProject &&
        _.map(currentProject?.page?.SectionProjectScroll?.selectedProjects, '_ref')

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
        ? _.sortBy(projects, (project) => {
            // this will sort fetched projects, according to configured on selectedProjects array
            const ref = selectedProjectsKeys.find(
                (selected) => selected._ref === project._id
            )
            return selectedProjectsKeys.indexOf(ref)
        })
        : projects // projects already sorted on groq level

    return { project: currentProject, projects: sortedProjects }
}

export const getDataBlogDetailPage = async ({ routeDetail }) => {
    const [docType, docSlug] = routeDetail?.detail

    const currentBlog = await getSanityDataById({
        type: docType + 's',
        condition: `&& slug.current == "${docSlug}"`,
    })

    return { blog: currentBlog }
}

export const getDataFloorDetailPage = async ({ routeDetail }) => {
    const [docType, docSlug] = routeDetail?.detail

    const currentFloor = await getSanityDataById({
        type: docType + 's',
        condition: `&& slug.current == "${docSlug}"`,
    })

    return { floors: currentFloor }
}

