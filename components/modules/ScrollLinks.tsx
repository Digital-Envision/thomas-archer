import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from '@chakra-ui/react'
import _ from 'lodash'

const ScrollLinks: React.FC<any> = (props) => {
  const { marginTop, marginBottom } = props
  const anchors = _(props?.page?.content)
    .map(({ anchor }, i) => {
      if (anchor)
        return (
          <BreadcrumbItem
            paddingRight={'2rem'}
            key={`${anchor}-${i}`}
            textDecoration="underline"
            flexShrink="0"
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
      bgColor="white"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Breadcrumb separator={' '}>
        <HStack spacing={4} overflowX="auto" paddingY="1.25rem">
          {anchors}
        </HStack>
      </Breadcrumb>
    </Box>
  )
}

export default ScrollLinks
