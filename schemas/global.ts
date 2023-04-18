import { defineType } from 'sanity'
import Contact, { contactFieldset } from './global/Contact'
import Enquire, { enquireFieldset } from './global/Enquire'
import Links, { linkFieldset } from './global/Links'
import SocialMedia, { socialMediaFieldset } from './global/SocialMedia'

export default defineType({
  type: 'document',
  name: 'global',
  title: 'Global',
  fields: [Links, Enquire, Contact, SocialMedia],
  fieldsets: [
    linkFieldset,
    enquireFieldset,
    contactFieldset,
    socialMediaFieldset,
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Value',
      }
    },
  },
})
