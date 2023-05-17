import _ from 'lodash'
import IndexPageHead from 'components/IndexPageHead'
import Navbar from 'components/organisms/Navbar'
import Footer from 'components/organisms/Footer'
import SectionBreadcrumbs from 'components/modules/SectionBreadcrumbs'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import moment from 'moment'
import { PortableText } from '@portabletext/react'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'

export default function BlogPageTemplate(props: any) {
  const { settings, preview, pages, globals, blog } = props // rest should be projects..etc

  return (
    <Box bgColor="#FFFFFF">
      <IndexPageHead settings={settings} />
      <Navbar
        links={globals.Links}
        enquire={globals.Enquire}
        contact={globals.Contact}
        socialMedia={globals.SocialMedia}
        specialButtons={globals.SpecialButtons}
      />
      <SectionBreadcrumbs {...blog?.page?.SectionBreadcrumbs} />

      <Box pb={'4rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
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
        <Text mb="4" fontSize={'10px'} color={'#898989'}>
          {moment(blog?.createdAt).format('DD MMMM YYYY')}
        </Text>
      </Flex>

      <Box pb={'1.5rem'} />

      <Flex
        mx="auto"
        maxW="1800px"
        width={'w-full'}
        maxWidth={'1800px'}
        px={{ base: '1rem', md: '4rem' }}
        direction={'column'}
      >
        <PortableText value={blog?.content} />
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
