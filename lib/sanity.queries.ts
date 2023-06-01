import _ from 'lodash'
import { groq } from 'next-sanity'
import { HeightVariants } from 'components/base/Divider'
import { SanityFiles, SanityImage, SEO } from 'utils/interfaces'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

// TODO need add pagination 12 projects with orderBy: createdAt desc

export const projectQuery = (props) => {
  const slug = props?.slug || ''
  const ids = props?.ids || []

  if (slug) {
    return groq`*[_type == "projects" && slug.current == "${slug}"]`
  } else if (ids.length > 1) {
    // else if (!_.isEmpty(ids)) {
    return groq`*[_type == "projects" && _id in $ids]`
  }

  return groq`*[_type == "projects" && slug.current != null] | order(_createdAt desc)`
}

export const blogQuery = (blog: string) => {
  if (blog) {
    return groq`*[_type == "blogs" && slug.current == "${blog}"]`
  }
  return groq`*[_type == "blogs" && slug.current != null]`
}

export const floorQuery = (floor: string) => {
  if (floor) {
    return groq`*[_type == "floors" && slug.current == "${floor}"]{
      ...,
      facades->{
        listImages,
      },
    }`
  }
  return groq`*[_type == "floors" && slug.current != null]{
      ...,
      facades->{
        listImages,
      },
    }`
}

export const pageQuery = (slug: 'string' | { _id: string }) => {
  if (typeof slug === 'object' && slug._id) {
    return groq`*[_type == "page" && _id=="${slug._id}"][]{
      ...,
      content[]{
        ...,
        "button": {
          ...button,
          ...{
            "internalHref": button.internalHref->slug.current,
          },
        },
      },
    }`
  }

  if (slug) {
    return groq`*[_type == "page" && slug.current=="${slug}"][]{
      ...,
      content[]{
        ...,
        "button": {
          ...button,
          ...{
            "internalHref": button.internalHref->slug.current,
          },
        },
      }
    }`
  }
  return groq`*[_type == "page"][]{
      ...,
      content[]{
        ...,
        "button": {
          ...button,
          ...{
            "internalHref": button.internalHref->slug.current,
          },
        },
        "listButtons": {}
      }
    }`
}

export const globalQuery = () => {
  return groq`*[_type == "global"][0]{
    ...,
    Links[]{
      ...,
      "internalHref": internalHref->slug.current,
      "button": {
        ...button,
        ...{
          "internalHref": button.internalHref->slug.current,
        },
      },
      children[] {
        ...,
        "internalHref": internalHref->slug.current
      }
    },
    SpecialButtons{
      ...,
      "specialButtonTwo": {
        ...specialButtonTwo,
        "internalHref": specialButtonTwo.internalHref->slug.current,
      },
    },
    SocialMedia{
      ...,
      "connectWithUs": {
        ...connectWithUs,
        "internalHref": connectWithUs.internalHref->slug.current,
      },
      socialMedia[] {
        ...,
        "internalHref": internalHref->slug.current,
      }
    }
  }`
}

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const pageSlugsQuery = groq`*[_type == 'page' && slug.current != null ] { slug }`
// export const pageSlugsQuery = groq`*[_type == "page"] {slug}`
// export const pageSlugsQuery = groq`*[_type == "page"]`
// export const pageSlugsQuery = groq`*[_type == "page" && defined(slug.current)][].slug.current`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}
export interface Pet {
  _id: string
  name?: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: any
  image?: SanityImage
  indexPage?: { _ref: string; _type: string }
}
export interface Page {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'page'
  _updatedAt: string
  content: any[]
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
}

export interface ImageAsset {
  _ref: string
  _type: string
}

export interface Image {
  _type: string
  asset: ImageAsset
}

export interface Award {
  _key: string
  _type: string
  description: string
  name: string
}

export interface Project {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'projects'
  _updatedAt: string
  caption: string
  heading: string
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  slug: {
    _type: 'slug'
    current: string
  }
  subHeading: string
  award: {
    awardImage: Image
    awardLogo: Image
    awards: Award[]
  }
}
export interface Blog {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  content: any[]
  createdAt: string
  heading: string
  image: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  slug: {
    _type: 'slug'
    current: string
  }
}

export interface Floor {
  _createdAt: string
  _id: string
  _rev: string
  _type: 'projects'
  _updatedAt: string
  title: string
  slug: {
    _type: 'slug'
    current: string
  }
  bannerImage: {
    image: SanityFiles
    isOverlay: boolean
    marginTop: HeightVariants
    marginBottom: HeightVariants
  }
  floorPlan: {
    listSizes: {
      sizes: {
        size: number
        roomDetails: {
          bedRoom: number
          bathRoom: number
          carPort: number
        }
        description: string
        options: {
          description: string
          options: {
            name: string
          }[]
        }
        listImages: {
          images: {
            name: string
            image: {
              _type: 'image'
              asset: {
                _ref: string
                _type: 'reference'
              }
            }
          }
        }[]
      }
    }[]
  }
  facades: {
    listImages: {
      description: string
      image: SanityFiles
    }[]
  }
  customPageSection?: any
  seo: SEO
}
