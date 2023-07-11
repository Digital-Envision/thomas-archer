import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import _ from 'lodash'

const ScrollLinks: React.FC<any> = (props) => {
  const { marginTop, marginBottom } = props
  const anchors = _(props?.page?.content)
    // .filter(['_type', 'SectionHeadingParagraphCTA'])
    .map(({ anchor }, i) => {
      if (anchor)
        return (
          <WrapItem>
            <BreadcrumbItem
              paddingRight={'2rem'}
              key={`${anchor}-${i}`}
              textDecoration="underline"
            >
              <BreadcrumbLink href={`#${anchor}`}>
                {_.startCase(anchor)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </WrapItem>
        )
    })
    .value()

  return (
    <Box
      width={'w-full'}
      // maxWidth={'1800px'}
      // same with navbar
      px={{
        base: '27.58px',
        md: '70.48px',
      }}
      mx="auto"
      position="sticky"
      top={'110px'}
      zIndex={3}
      justifyContent="center"
      alignItems="center"
      paddingY="1.25rem"
      bgColor="white"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Breadcrumb separator={' '}>
        <Wrap>{anchors}</Wrap>
      </Breadcrumb>
    </Box>
  )
}

export default ScrollLinks
