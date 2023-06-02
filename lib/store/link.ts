import { create } from 'zustand'

export type Links = {
  [key: string]: {
    name: string;
    url: string;
  }
}

type State = {
  links: Links
}

type Actions = {
  setLink: (links: Links) => void
}

export const useStoreLink = create<State & Actions>((set) => ({
  links: {},
  setLink: (links: Links) => set(() => ({ links: {...links} }))
}))
