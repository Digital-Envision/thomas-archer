import { create } from 'zustand'

export type Links = {
  [key: string]: {
    name: string
    url: string
  }
}

type State = {
  pages: Links
  projects?: Links
  floorPlans?: Links
  blogs?: Links
  detailsPage?: {
    projects: {
      parentPage: {
        _ref: string
      }
    }
    floorPlan: {
      parentPage: {
        _ref: string
      }
    }
    blog: {
      parentPage: {
        _ref: string
      }
    }
  }
}

type Actions = {
  setLink: (stateName: string, links: Links) => void
}

export const useStoreLink = create<State & Actions>((set) => ({
  pages: {},
  projects: {},
  floorPlans: {},
  blogs: {},
  setLink: (stateName: string, links: Links) =>
    set(() => ({ [stateName]: { ...links } })),
}))
