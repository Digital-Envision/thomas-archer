import { Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import { HeightVariants } from 'components/base/Divider'
import { useRouter } from 'next/router'
import _ from 'lodash'

type SectionBreadcrumbsProps = {
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionBreadcrumbs: React.FC<SectionBreadcrumbsProps> = (props) => {
  const { marginBottom, marginTop } = props
  const { asPath } = useRouter()

  const breadcrumbs = _.trimStart(asPath, asPath[0])
    .split('/')
    .map(_.capitalize)
    .join(' / ')

  return (
    <Flex
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Text>{breadcrumbs}</Text>
    </Flex>
  )
}

export default SectionBreadcrumbs
