// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import Iframe from 'sanity-plugin-iframe-pane'
import { DefaultDocumentNodeResolver } from 'sanity/desk'
import authorType from 'schemas/author'
import postType from 'schemas/post'
import pageType from 'schemas/page'

import AuthorAvatarPreviewPane from './AuthorAvatarPreviewPane'
import PostPreviewPane from './PostPreviewPane'
import { getPathFromDetailType, getPathFromPage } from 'utils/page'
import { DOCUMENT_TYPES_PAGE_NAME } from 'schemas/global/DetailsPage'

export const previewDocumentNode = ({
  apiVersion,
  previewSecretId,
}: {
  apiVersion: string
  previewSecretId: `${string}.${string}`
}): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case authorType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <AuthorAvatarPreviewPane
                name={document.displayed.name as any}
                picture={document.displayed.picture as any}
              />
            ))
            .title('Preview'),
        ])

      case postType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <PostPreviewPane
                slug={document.displayed.slug?.current}
                apiVersion={apiVersion}
                previewSecretId={previewSecretId}
              />
            ))
            .title('Preview'),
        ])

      case pageType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: async (doc) => {
                const path = await getPathFromPage(doc?._id)
                return getPreviewURL(path)
              },
            })
            .title('Preview'),
        ])

      case DOCUMENT_TYPES_PAGE_NAME.Projects:
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: async (doc) => {
                const path = await getPathFromDetailType(
                  DOCUMENT_TYPES_PAGE_NAME.Projects
                )
                return getPreviewURL(path, doc)
              },
            })
            .title('Preview'),
        ])
      case 'blogs':
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: async (doc) => {
                const path = await getPathFromDetailType('blogs')
                return getPreviewURL(path, doc)
              },
            })
            .title('Preview'),
        ])
      case 'floors':
        return S.document().views([
          S.view.form(),
          S.view
            .component(Iframe)
            .options({
              url: async (doc) => {
                const path = await getPathFromDetailType('floors')
                return getPreviewURL(path, doc)
              },
            })
            .title('Preview'),
        ])

      default:
        return null
    }
  }
}

const getPreviewURL = (route, doc?) => {
  const host = location.origin
  const slugId = doc?.slug?.current

  if (doc) return `${host}/${route}/${slugId}`
  else return `${host}/${route}`
}
