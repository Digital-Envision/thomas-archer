import React from 'react'
import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'components/IndexPage'
import {
  getAllFloors,
  getAllGlobals,
  getAllPages,
  getAllPosts,
  getAllProjects,
  getSettings,
} from 'lib/sanity.client'
import { Post, Project, Settings, Floor } from 'lib/sanity.queries'
import _ from 'lodash'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'
import { useRouter } from 'next/router'
import FloorPageTemplate from 'components/templates/FloorPage'

export interface PageProps {
  posts?: Post[]
  pages?: any[]
  globals?: any[]
  settings?: Settings
  preview?: boolean
  token?: string | null
  projects?: Project[]
  floors?: Floor[]
}

export interface Query {
  [key: string]: string
}

export interface PreviewData {
  token?: string
}

export default function FloorPage({ floors, pages, globals }) {
  const router = useRouter()

  if (router.isFallback) {
    return <></>
  }

  return <FloorPageTemplate floors={floors} pages={pages} globals={globals} />
}

export async function getStaticPaths() {
  const paths = []

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params } = ctx

  const [settings, pages = [], globals = []] = await Promise.all([
    getSettings(),
    getAllPages(params?.slug),
    getAllGlobals(),
  ])

  if (_.isEmpty(pages)) {
    return { notFound: true }
  }

  const currentFloors = await getAllFloors(params?.id as string)

  return {
    props: {
      id: params?.id,
      settings,
      floors: currentFloors[0],
      pages,
      globals,
      preview,
      token: previewData.token ?? null,
    },
  }
}
