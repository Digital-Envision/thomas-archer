import _ from 'lodash'
import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import { PortableText as PT, PortableTextComponents } from '@portabletext/react'
import Text from 'components/base/Text'
import Heading1 from 'components/base/Heading1'
import { HeightVariants } from 'components/base/Divider'
import Heading2 from 'components/base/Heading2'
import Heading3 from 'components/base/Heading3'
import Link from 'next/link'

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <Heading1>{children}</Heading1>,
    h2: ({ children }) => <Heading2>{children}</Heading2>,
    h3: ({ children }) => <Heading3>{children}</Heading3>,
    h4: ({ children }) => <Heading3 fontSize={'20px'}>{children}</Heading3>,
    h5: ({ children }) => <Heading3 fontSize={'18px'}>{children}</Heading3>,
    h6: ({ children }) => <Heading3 fontSize={'16px'}>{children}</Heading3>,
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

  marks: {
    link: ({ value, children }) => (
      <Link href={value?.href}>
        <Text size={'16px'} textDecor={'underline'} as="span">
          {children}
        </Text>
      </Link>
    ),
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
