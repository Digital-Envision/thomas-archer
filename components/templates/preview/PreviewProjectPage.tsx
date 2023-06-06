import { getSanityData } from 'lib/sanity.client'
import { usePreview } from 'lib/sanity.preview'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import ProjectPageTemplate from '../ProjectPage'

const PreviewProjectPage = (props) => {
  const { token, project, routeDetail, pages } = props
  const [projects, setProjects] = useState(props?.projects)
  const detailSlug = routeDetail?.detailPathId
  const currentProject = usePreview(
    token,
    `*[_type == "projects" && slug.current == "${detailSlug}"][0]`,
    {}
  )

  // mimic getDataProjectDetailPage
  useEffect(() => {
    ;(async () => {
      const selectedProjectsRef =
        currentProject?.SectionProjectScroll?.isSelectedProject &&
        _.map(currentProject?.SectionProjectScroll?.selectedProjects, '_ref')

      const projects = !_.isEmpty(selectedProjectsRef)
        ? ((await getSanityData({
            type: 'projects',
            condition: `&& slug.current != null && _id != "${project?._id}" && _id in $ids`,
            params: { ids: selectedProjectsRef },
          })) as any)
        : ((await getSanityData({
            type: 'projects',
            condition: `&& slug.current != null && _id != "${project?._id}"`,
            limit: 12,
          })) as any)

      const selectedProjectsKeys =
        currentProject?.SectionProjectScroll?.isSelectedProject &&
        currentProject?.SectionProjectScroll?.selectedProjects

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

      setProjects(sortedProjects)
    })()

    // fetch another requirement
  }, [currentProject])

  return (
    <ProjectPageTemplate
      {...props}
      preview
      project={currentProject}
      projects={projects}
    />
  )
}

export default PreviewProjectPage
