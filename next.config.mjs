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
    return [
      {
        source: '/redirect-me',
        destination: '/about-thomas-archer/accolades',
        permanent: true,
        // destination: '/v1/dev/:slug*',
      },
      // {
      //   source: '/dev1/:slug*',
      //   destination: '/dev2/:slug*',
      //   // destination: '/v1/dev/:slug*',
      //   permanent: false,
      // },
      // {
      //   source: '/dev4/:slug*',
      //   destination: '/dev5/:slug*',
      //   permanent: false,
      // },
    ]
  },
}

export default config
