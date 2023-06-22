/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { dashboardTool } from '@sanity/dashboard'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import authorType from 'schemas/author'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'
import pageType from 'schemas/page'
import globalType from 'schemas/global'
import fixedComponentType from 'schemas/fixedComponent'
import SectionHeadingParagraphCTAType from 'schemas/sections/SectionHeadingParagraphCTA'
import SectionHeadingParagraphCTAImageType from 'schemas/sections/SectionHeadingParagraphCTAImage'
import DividerType from 'schemas/sections/Divider'
import SectionBlog from 'schemas/sections/SectionBlog'
import SectionHeadingParagraphContactForm from 'schemas/sections/SectionHeadingParagraphContactForm'
import SectionAwards from 'schemas/sections/SectionAwards'
import ArticleBlogCard from 'schemas/subSections/ArticleBlogCard'
import PortfolioListingCard from 'schemas/subSections/PortfolioListingCard'
import SectionTextFeatured from 'schemas/sections/SectionTextFeatured'
import SectionImageTextMosaicType1 from 'schemas/sections/SectionImageTextMosaicType1'
// import Margin from 'schemas/subSections/Margin'
import SectionHeroImageBig from 'schemas/sections/SectionHeroImageBig'
import SectionImageAwards from 'schemas/sections/SectionImageAwards'
import SectionProjectListing from 'schemas/sections/SectionProjectListing'
import SectionHeroImageDefault from 'schemas/sections/SectionHeroImageDefault'
import SectionImageHeadingCTA from 'schemas/sections/SectionImageHeadingCTA'
import Carousel from 'schemas/sections/Carousel'
import Links from 'schemas/global/Links'
// import Dataset from 'schemas/dataset'
import SectionGridGallery from 'schemas/sections/SectionGridGallery'
import Section2ColImageTextMosaicType2 from 'schemas/sections/Section2ColImageTextMosaicType2'
import Section2ColHeading2ColParagraph from 'schemas/sections/Section2ColHeading2ColParagraph'
import Enquire from 'schemas/global/Enquire'
import SectionInclusions from 'schemas/sections/SectionInclusions'
import SectionHeroVideoBig from 'schemas/sections/SectionHeroVideoBig'
import Project from 'schemas/project'
import Floors from 'schemas/floor'
import Facades from 'schemas/facade'
import customPageSection from 'schemas/customPageSection'
import SectionBreadcrumbs from 'schemas/sections/SectionBreadcrumbs'
import SectionProjectScroll from 'schemas/sections/SectionProjectScroll'
import SectionGalleryScroll from 'schemas/sections/SectionGalleryScroll'
import Blog from 'schemas/blog'
import SectionBlogListing from 'schemas/sections/SectionBlogListing'
import Section2ColImageTextFeaturedImageLeftRight from 'schemas/sections/Section2ColImageTextFeaturedImageLeftRight'
import SectionAwardsListing from 'schemas/sections/SectionAwardsListing'
import CTAs from 'schemas/sections/CTAs'
import FloorPlanListing from 'schemas/sections/FloorPlanListing'
import Steps from 'schemas/sections/Steps'
import SectionVideoParagraphCTA from 'schemas/sections/SectionVideoParagraphCTA'
import SectionColCards from 'schemas/sections/SectionColCards'
import SectionBookingForm from 'schemas/sections/SectionBookingForm'
import SectionParagraph from 'schemas/sections/SectionParagraph'
import SectionFeaturedImage from 'schemas/sections/SectionFeaturedImage'
import CodeEmbed from 'schemas/sections/CodeEmbed'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

/**
 * 1. create schema
 * 2. import schema to this types below
 * 3. create query function, and adjust query
 * 4. load dataset on getStaticProps from designated page
 */

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // authorType,
      // postType,

      // -- section
      settingsType,
      pageType,
      globalType,
      Enquire,
      fixedComponentType,
      Carousel,
      CTAs,
      Steps,
      FloorPlanListing,
      SectionFeaturedImage,
      SectionGalleryScroll,
      SectionProjectScroll,
      SectionVideoParagraphCTA,
      SectionHeroImageBig,
      SectionHeroImageDefault,
      SectionHeroVideoBig,
      SectionImageHeadingCTA,
      Section2ColImageTextFeaturedImageLeftRight,
      SectionHeadingParagraphCTAType,
      SectionHeadingParagraphCTAImageType,
      DividerType,
      SectionBlog,
      SectionHeadingParagraphContactForm,
      SectionAwards,
      SectionTextFeatured,
      SectionImageTextMosaicType1,
      SectionImageAwards,
      SectionProjectListing,
      SectionGridGallery,
      SectionInclusions,
      SectionBreadcrumbs,
      SectionBlogListing,
      SectionAwardsListing,
      SectionBookingForm,
      SectionParagraph,
      SectionColCards,
      Section2ColImageTextMosaicType2,
      Section2ColHeading2ColParagraph,
      CodeEmbed,

      // -- subSection
      ArticleBlogCard,
      // Margin,
      PortfolioListingCard,

      // -- Dataset,
      Project,
      Blog,
      Floors,
      Facades,

      //template
      customPageSection,
    ],
  },
  plugins: [
    deskTool({
      structure: settingsStructure([settingsType, globalType]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    settingsPlugin({ type: globalType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify deploys',
          sites: [
            {
              title: 'thomas-archer',
              apiId: process.env.NETLIFY_API_ID,
              buildHookId: process.env.NETLIFY_BUILD_HOOK_ID,
              name: 'thomas-archer',
            },
          ],
        }),
      ],
    }),
  ],
})
