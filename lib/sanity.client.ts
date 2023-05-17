import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Settings,
  settingsQuery,
  pageQuery,
  globalQuery,
  pageSlugsQuery,
  projectQuery,
  blogQuery,
  floorQuery,
} from 'lib/sanity.queries'
import _ from 'lodash'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null


export const getSanityDataById = async ({ type, condition = '' }) => {
  try {
    const query = `*[_type == "${type}" ${condition}]`
    const [data] = await client.fetch(query);

    return data;
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    return null;
  }
}

export const getSanityData = async ({ type, condition = '', params = {}, page = 1, limit = 100, sortByField = '_createdAt', sortOrder = 'desc', options = '' }) => {
  try {
    const query = `*[_type == "${type}" ${condition}] | order(${sortByField} ${sortOrder})`

    const slicingQuery = `[$firstIndex..$lastIndex]`
    const slicingParams = {
      firstIndex: (page - 1) * limit,
      lastIndex: (page - 1) * limit + limit - 1,

    };

    const data = await client.fetch(query + slicingQuery, { ...slicingParams, ...params });
    const counts = await client.fetch(`count(${query})`, params);

    const pages = Math.ceil(counts / limit);
    const isMore = page < pages;
    const pagination = {
      page,
      limit,
      counts,
      pages,
      isMore,
    }

    return { pagination, data };
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    return null;
  }
}

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPages(page): Promise<Post[]> {
  if (client) {
    return (await client.fetch(pageQuery(page))) || []
  }
  return []
}

export async function getAllGlobals(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(globalQuery())) || []
  }
  return []
}

export async function getAllProjects(props?): Promise<any[]> {
  if (client) {
    return (await client.fetch(projectQuery(props),
      !_.isEmpty(props?.ids) ? { ...props } : undefined
    )) || []
  }
  return []
}

export async function getAllBlogs(project = ''): Promise<any[]> {
  if (client) {
    return (await client.fetch(blogQuery(project))) || []
  }
  return []
}

export async function getAllFloors(floors = ''): Promise<any[]> {
  if (client) {
    return (await client.fetch(floorQuery(floors))) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}
export async function getAllPagesSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || []
    return _.map(slugs, 'slug.current')
  }
  return []
}
export async function getAllProjectSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(projectQuery(''))) || []
    return _.map(slugs, 'slug.current')
  }
  return []
}
export async function getAllBioSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(blogQuery(''))) || []
    return _.map(slugs, 'slug.current')
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}
