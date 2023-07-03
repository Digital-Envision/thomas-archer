import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import _ from 'lodash'

const ScrollLinks: React.FC<any> = (props) => {
  const anchors = _(props?.page?.content)
    // .filter(['_type', 'SectionHeadingParagraphCTA'])
    .map(({ anchor }, i) => {
      if (anchor)
        return (
          <BreadcrumbItem
            paddingRight={'2rem'}
            key={`${anchor}-${i}`}
            textDecoration="underline"
          >
            <BreadcrumbLink href={`#${anchor}`}>
              {_.startCase(anchor)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
    })
    .value()

  return (
    <Box
      width={'w-full'}
      // maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      mx="auto"
      position="sticky"
      top={'110px'}
      zIndex={3}
      justifyContent="center"
      alignItems="center"
      paddingY="1.25rem"
      bgColor="white"
    >
      <Breadcrumb separator={' '}>{anchors}</Breadcrumb>
    </Box>
  )
}

export default ScrollLinks
