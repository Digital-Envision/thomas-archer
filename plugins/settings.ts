/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import _ from 'lodash'
import { definePlugin, type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'
import { DOCUMENT_TYPE_SCHEMA_NAME } from 'schemas/global/DetailsPage'
import { DocumentsIcon } from '@sanity/icons'

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (
  topList?: Array<DocumentDefinition>,
  bottomList?: Array<DocumentDefinition>
): StructureResolver => {
  return (S, context) => {
    // // The `Settings` root list item
    const topListItem = topList.map((type) => {
      return S.listItem()
        .title(type.title)
        .icon(type.icon)
        .child(
          S.editor().id(type.name).schemaType(type.name).documentId(type.name)
        )
    })

    const onlyBottomList = S.documentTypeListItems().filter(
      (listItem) => !topList.some((type) => type.name === listItem.getId())
    )

    const bottomListItem = onlyBottomList.map((list) => {
      const single = _.find(bottomList, (id) => {
        return id.name === list.getId()
      })

      if (!_.isEmpty(single)) {
        return S.listItem()
          .title(single.title)
          .icon(single.icon)
          .child(
            S.editor()
              .id(single.name)
              .schemaType(single.name)
              .documentId(single.name)
          )
      }

      return list
    })

    const draggableDocs = _.map(DOCUMENT_TYPE_SCHEMA_NAME, (v, k) => {
      if (DOCUMENT_TYPE_SCHEMA_NAME.Blog === v) return // blog not needed draggable index 

      return orderableDocumentListDeskItem({
        type: v,
        title: k + ' Sorting',
        icon: DocumentsIcon,
        S,
        context
      })
    })

    return S.list()
      .title('Content')
      .items([
        ...topListItem,
        S.divider(),
        ..._.compact(bottomListItem),
        S.divider(),
        ..._.compact(draggableDocs)
      ])
  }
}
