const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  exclude: ['/404', '/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
}
