import _ from 'lodash'
import React from 'react'
import FileType from './FileType'
import LinkType from './LinkType'
import ModalType from './ModalType'

export interface LinksInterface {
  label: string
  useInternal?: boolean
  linkType?: string
  internalHref?: {
    _ref: string
    _type: string
  }
  blogHref?: {
    _ref?: string
    _type: string
    slug?: string
  }
  floorPlansHref?: {
    _ref: string
    _type: string
  }
  externalHref?: string
  isExternal?: boolean
  mobileOnly?: boolean

  // hubspot
  useModalHubspot?: boolean
  region?: string
  portalId?: string
  formId?: string

  // file
  isExternalFile?: boolean
  fileName?: string
  externalFile?: string
  file?: {
    options?: {
      source?: {
        asset?: {
          _ref?: string
        }
      }
    }
  }
}

const Link = ({ link, children, ...props }) => {
  switch (link?.type) {
    case 'modal':
      return <ModalType
        link={link}      
        children={children}
      />
    case 'link':
      return <LinkType
        link={link}
        children={children}
        {...props}
      />
    case 'file':
      return <FileType
        link={link}
        children={children}
      />
    default:
      return <LinkType
        link={link}
        children={children}
        {...props}
      />
  }
}

export default Link
