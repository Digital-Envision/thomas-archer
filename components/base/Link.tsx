import _ from 'lodash'
import React, { useEffect } from 'react'
import NextLink from 'next/link'
import { useStoreLink } from 'lib/store/link'
import { useStore } from 'zustand'
import { LINK_TYPE_NAME } from 'schemas/components/link'

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
}

interface Props {
  link: LinksInterface
  children: any
}

const LinkType = ({ link, children, ...props }) => {
  const store = useStoreLink((state) => state)
  const detailsPage = store?.detailsPage

  const links = store?.pages
  const projectSlug = store?.projects
  const blogSlug = store?.blogs
  const floorSlug = store?.floorPlans

  switch (link?.linkType) {
    case 'internalHref':
      return (
        <NextLink
          href={
            link?.internalHref?._ref
              ? `/${links[link?.internalHref?._ref]?.url}`
              : '#'
          }
          {...props}
        >
          {children}
        </NextLink>
      )
    case LINK_TYPE_NAME.project:
      return (
        <NextLink
          href={
            link[LINK_TYPE_NAME.project] && !_.isEmpty(detailsPage?.projects)
              ? `/${links[detailsPage?.projects?.parentPage?._ref]?.url}/${
                  projectSlug[link[LINK_TYPE_NAME.project]?._ref]
                }`
              : `#`
          }
          {...props}
        >
          {children}
        </NextLink>
      )
    case 'floorPlansHref':
      return (
        <NextLink
          href={
            link[LINK_TYPE_NAME.floorPlans] &&
            !_.isEmpty(detailsPage?.floorPlan)
              ? `/${links[detailsPage?.floorPlan?.parentPage?._ref]?.url}/${
                  floorSlug[link[LINK_TYPE_NAME.floorPlans]?._ref]
                }`
              : `#`
          }
          {...props}
        >
          {children}
        </NextLink>
      )
    case 'blogHref':
      if (link[LINK_TYPE_NAME.blog]?.slug) {
        return (
          <NextLink
            href={
              link[LINK_TYPE_NAME.blog] && !_.isEmpty(detailsPage?.blog)
                ? `/${links[detailsPage?.blog?.parentPage?._ref]?.url}/${
                    link[LINK_TYPE_NAME.blog]?.slug
                  }`
                : `#`
            }
            {...props}
          >
            {children}
          </NextLink>
        )
      } else if (link[LINK_TYPE_NAME.blog]?._ref) {
        return (
          <NextLink
            href={
              link[LINK_TYPE_NAME.blog] && !_.isEmpty(detailsPage?.blog)
                ? `/${links[detailsPage?.blog?.parentPage?._ref]?.url}/${
                    blogSlug[link[LINK_TYPE_NAME.blog]?._ref]
                  }`
                : `#`
            }
            {...props}
          >
            {children}
          </NextLink>
        )
      }
    default:
      return (
        <NextLink
          href={
            link?.internalHref?._ref
              ? `/${links[link?.internalHref?._ref]?.url}`
              : '#'
          }
          {...props}
        >
          {children}
        </NextLink>
      )
  }
}

const Link: React.FC<Props> = ({ link, children, ...props }) => {
  if (link?.useInternal) {
    return <LinkType link={link} children={children} {...props} />
  } else {
    return (
      <NextLink href={link?.externalHref ? link?.externalHref : '#'} {...props}>
        {children}
      </NextLink>
    )
  }
}

export default Link
