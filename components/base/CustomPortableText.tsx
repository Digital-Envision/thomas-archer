import _ from 'lodash'
import { Box, ListItem, UnorderedList, Img } from '@chakra-ui/react'
import { PortableText as PT, PortableTextComponents } from '@portabletext/react'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'
import { HeightVariants } from 'components/base/Divider'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import Link from './Link'
import { getImageUrl } from 'lib/utils'
import { EmbedVideoPlayer } from 'components/modules/SectionHeroVideoBig'

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Heading1 pb="15px">{children}</Heading1>,
    h2: ({ children }) => <Heading2 pb="15px">{children}</Heading2>,
    h3: ({ children }) => <Heading3 pb="15px">{children}</Heading3>,
    h4: ({ children }) => (
      <Heading3 fontSize={'20px'} pb="15px">
        {children}
      </Heading3>
    ),
    h5: ({ children }) => (
      <Heading3 fontSize={'18px'} pb="15px">
        {children}
      </Heading3>
    ),
    h6: ({ children }) => (
      <Heading3 fontSize={'16px'} pb="15px">
        {children}
      </Heading3>
    ),
    blockquote: ({ children }) => (
      <Box pl={HeightVariants.default}>
        <Heading1 as="blockquote">{children}</Heading1>
      </Box>
    ),
    normal: ({ children }) => {
      // if only whitespace, return a <br />

      if (children?.[0] === '') {
        return <br />
      }
      return <Text fontSize={'16px'}>{children}</Text>
    },
  },

  types: {
    image: ({ value }) => (
      <Img src={getImageUrl(value)} width="w-full" height={'auto'} />
    ),
    externalVideo: ({ value }) => {
      if (value?.url) {
        return <EmbedVideoPlayer externalVideo={value?.url} />
      }

      return <div />
    },
  },

  marks: {
    link: ({ value, children }) => {
      const data = {
        type: 'link',
        ...value,
      }

      return (
        <Link link={data}>
          <Text fontSize={'16px'} textDecor={'underline'} as="a">
            {children}
          </Text>
        </Link>
      )
    },
  },
  listItem: {
    bullet: ({ children }) => (
      <UnorderedList>
        <ListItem>
          <Text fontSize={'16px'}>{children}</Text>
        </ListItem>
      </UnorderedList>
    ),
    number: ({ children, index }) => {
      return <Text fontSize={'16px'}>{`${index + 1}. ${children}`}</Text>
    },
  },
}

const CustomPortableText = ({ value }) => {
  return <PT value={value} components={components} />
}

export default CustomPortableText
