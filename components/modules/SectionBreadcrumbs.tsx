import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from '@chakra-ui/react'
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

  // TODO HOW TO ADJUST [BLOG/PROJECT/] to be linked to the route before that

  const pathWithoutQuery = asPath.split('?')[0]
  let pathArray = pathWithoutQuery.split('/')
  pathArray.shift()
  pathArray = pathArray.filter((path) => path !== '')

  const breadcrumbsNav = [
    {
      href: '/',
      label: 'Homepage',
    },
    ...pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      }
    }),
  ]

  return (
    <Flex
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      mx="auto"
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Breadcrumb>
        {breadcrumbsNav.map((o, i) => {
          const { href, label } = o
          const lastItem = breadcrumbsNav.length === i + 1

          return (
            <BreadcrumbItem isCurrentPage={lastItem}>
              <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Flex>
  )
}

export default SectionBreadcrumbs
