import { defineType } from 'sanity'
import Contact, { contactFieldset } from './global/Contact'
import Enquire, { enquireFieldset } from './global/Enquire'
import Links, { linkFieldset } from './global/Links'
import SocialMedia, { socialMediaFieldset } from './global/SocialMedia'
import SpecialButton, { specialButtonFieldset } from './global/SpecialButton'

export default defineType({
  type: 'document',
  name: 'global',
  title: 'Global',
  fields: [SpecialButton, Links, Enquire, Contact, SocialMedia],
  fieldsets: [
    specialButtonFieldset,
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
