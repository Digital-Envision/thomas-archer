import { defineType } from 'sanity'
import Contact, { contactFieldset } from './global/Contact'
import DetailsPage from './global/DetailsPage'
import Enquire, { enquireFieldset } from './global/Enquire'
import Footer from './global/Footer'
import GlobalHubspot from './global/Hubspot'
import Links, { linkFieldset } from './global/Links'
import Redirect from './global/Redirect'
import SocialMedia, { socialMediaFieldset } from './global/SocialMedia'
import SpecialButton, { specialButtonFieldset } from './global/SpecialButton'
import {EarthGlobeIcon} from '@sanity/icons'

export default defineType({
  type: 'document',
  name: 'global',
  title: 'Global',
  icon: EarthGlobeIcon,
  fields: [
    SpecialButton,
    Links,
    Enquire,
    Contact,
    SocialMedia,
    Footer,
    DetailsPage,
    GlobalHubspot,
    Redirect
  ],
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
