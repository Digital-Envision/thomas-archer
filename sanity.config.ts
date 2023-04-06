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
import authorType from 'schemas/author'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'
import pageType from 'schemas/page'
import fixedComponentType from 'schemas/fixedComponent'
import SectionHeadingParagraphCTAType from 'schemas/sections/SectionHeadingParagraphCTA'
import SectionHeadingParagraphCTAImageType from 'schemas/sections/SectionHeadingParagraphCTAImage'
import DividerType from 'schemas/sections/Divider'
import Section3ColsCards from 'schemas/sections/Section3ColsCards'
import SectionBlog from 'schemas/sections/SectionBlog'
import SectionHeadingParagraphContactForm from 'schemas/sections/SectionHeadingParagraphContactForm'
import SectionAwards from 'schemas/sections/SectionAwards'
import ArticleBlogCard from 'schemas/subSections/ArticleBlogCard'
import PortfolioCard from 'schemas/subSections/PortfolioCard'
import PortfolioListingCard from 'schemas/subSections/PortfolioListingCard'

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
      fixedComponentType,
      SectionHeadingParagraphCTAType,
      SectionHeadingParagraphCTAImageType,
      DividerType,
      Section3ColsCards,
      SectionBlog,
      SectionHeadingParagraphContactForm,
      SectionAwards,

      // -- subSection
      ArticleBlogCard,
      // PortfolioCard, // TODO LATER
      // PortfolioListingCard // TODO LATER
    ],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
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
  ],
})
