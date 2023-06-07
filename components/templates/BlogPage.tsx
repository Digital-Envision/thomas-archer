import _ from 'lodash'
import IndexPageHead from 'components/IndexPageHead'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import { Box, Flex } from '@chakra-ui/react'
import moment from 'moment'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'
import GalleryScroll from 'components/organisms/GalleryScroll'
import { HeightVariants } from 'components/base/Divider'
import CustomPortableText from 'components/base/CustomPortableText'
import ExitPreviewButton from 'components/ExitPreviewButton'

// TODO FIX page props
export default function BlogPageTemplate(props: any) {
  const { settings, preview, pages, globals, blog, routeDetail } = props // rest should be projects..etc

  return (
    <Box bgColor="#FFFFFF">
      {preview && <ExitPreviewButton />}
      <IndexPageHead settings={settings} pageData={blog} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
        isForceOnLightNavbar={true}
      />

      <Box pt="150px" />

      <SectionBreadcrumbs
        {...blog?.page?.SectionBreadcrumbs}
        routeDetail={routeDetail}
      />

      <Box pb={'4rem'} />

      <Flex
        mx="auto"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
      >
        <Heading1>{blog?.heading}</Heading1>
      </Flex>

      <Box pb={'2rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
      >
        <Text mb="4" color={'#898989'}>
          {moment(blog?.createdDate).format('DD MMMM YYYY')}
        </Text>
      </Flex>

      <Box pb={'1.5rem'} />

      {!_.isEmpty(blog?.page?.SectionGalleryScroll) && (
        <>
          <GalleryScroll {...blog?.page?.SectionGalleryScroll} />
          <Box pb={HeightVariants.extra} />
        </>
      )}

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
        direction={'column'}
      >
        <CustomPortableText value={blog?.content} />
      </Flex>
      <Footer
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        footer={globals.Footer}
      />
    </Box>
  )
}
