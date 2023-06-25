import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import { getImageUrl, origin } from 'lib/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SEO } from 'utils/interfaces'

export interface IndexPageHeadProps {
  settings: Settings
  seo?: SEO
  pageData: any
}

export default function IndexPageHead({
  settings,
  pageData,
}: IndexPageHeadProps) {
  const { seo, title: _title, heading } = pageData
  // if seo object is empty, we use default from settings

  const seoData = {
    title: seo?.title || `${_title || heading} | ${settings?.title}`,
    description: seo?.description || settings?.description,
    ogImage: seo?.image || settings?.image,
    isUseNoIndex: seo?.isUseNoIndex,
  }

  const { title, description, ogImage, isUseNoIndex } = seoData

  const router = useRouter()

  //TODO INVESTIGATE BlogMeta Component

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      {isUseNoIndex && <meta name="robots" content="noindex" />}

      <meta
        key="description"
        name="description"
        content={description as string}
      />
      <meta property="og:description" content={description as string} />

      <meta property="og:url" content={`${origin}${router?.asPath}`} />

      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={getImageUrl(ogImage)}
      />
    </Head>
  )
}
