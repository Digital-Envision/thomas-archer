import { createClient } from 'next-sanity'

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'picsum.photos' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  env: {
    NETLIFY_API_ID: process.env.NETLIFY_API_ID,
    NETLIFY_BUILD_HOOK_ID: process.env.NETLIFY_BUILD_HOOK_ID,
  },
  async redirects() {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15',
      useCdn: process.env.SANITY_REVALIDATE_SECRET
        ? false
        : process.env.NODE_ENV === 'production',
    })

    const data = await client.fetch('*[_type == "global"][0]{Redirect[]}')
    if (!data?.Redirect) return []

    const redirects = data?.Redirect.map(
      ({ source, destination, permanent = false }) => {
        return {
          source,
          destination,
          permanent,
        }
      }
    )

    return redirects
  },
}

export default config
