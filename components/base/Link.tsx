import _ from 'lodash'
import React from 'react'
import NextLink from 'next/link'
import { useStoreLink } from 'lib/store/link'

export interface LinksInterface {
  label: string
  useInternal: boolean
  internalHref:
    | {
        _ref: string
        _type: string
      }
    | string
  externalHref: string
  isExternal: boolean
  mobileOnly?: boolean
}

interface Props {
  link: LinksInterface
  children: any
}

const Link: React.FC<Props> = ({ link, children, ...props }) => {
  const links = useStoreLink((state) => state.links)

  if (link?.useInternal) {
    if (_.isObject(link?.internalHref)) {
      if (!_.isUndefined(links[link?.internalHref?._ref])) {
        return (
          <NextLink href={`/${links[link?.internalHref?._ref].url}`} {...props}>
            {children}
          </NextLink>
        )
      }
    }
  } else {
    return (
      <NextLink href={link?.externalHref ? link?.externalHref : '#'} {...props}>
        {children}
      </NextLink>
    )
  }

  return <></>
}

export default Link
