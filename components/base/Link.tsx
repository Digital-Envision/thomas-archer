import _ from 'lodash'
import React, { useState } from 'react'
import NextLink from 'next/link'
import { useStoreLink } from 'lib/store/link'
import { LINK_TYPE_NAME } from 'schemas/components/link'
import { Button } from 'react-scroll'
import { Box } from '@chakra-ui/react'
import ModalHubspot from 'components/modules/ModalHubspot'

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
  if (link?.useModalHubspot) {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <ModalHubspot
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          region={link?.region}
          portalId={link?.portalId}
          formId={link?.formId}
        />
        <Box onClick={() => setIsOpen(true)} cursor={'pointer'}>
          {children}
        </Box>
      </>
    )
  } else {
    if (link?.useInternal) {
      return <LinkType link={link} children={children} {...props} />
    } else {
      return (
        <NextLink
          href={link?.externalHref ? link?.externalHref : '#'}
          {...props}
        >
          {children}
        </NextLink>
      )
    }
  }
}

export default Link
