import { Box, Image, Icon, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { blockToPlainText, getImageUrl } from 'lib/utils'
import { PaginationData } from 'utils/interfaces'
import CardContainer from 'components/base/Card'

export type BlogListingCardDataProps = {
  image?: any // sanity io image
  link: string
  heading: string
  content: any[]
  slug?: { current: string }
  width?: string
  height?: string
}

export type BlogListingCardProps = {
  data: BlogListingCardDataProps[]
  pagination: PaginationData
}

const BlogListingCard: React.FC<BlogListingCardProps['data'][0]> = ({
  image,
  link,
  heading,
  content,
}) => {
  return (
    <Link href={link || '#'}>
      <CardContainer>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src={getImageUrl(image)}
            alt={heading}
            objectFit="cover"
            w="full"
            h="300px"
          />
        </Box>

        <Box py="5" h="170px">
          <Heading3 fontSize={'28px'} lineHeight={'20px'} mb="5">
            {heading}
          </Heading3>
          <Flex flex={1} minHeight="80px" pb="1rem">
            <Text noOfLines={4}>{blockToPlainText(content)}</Text>
          </Flex>
        </Box>

        <Link href={link || '#'} target={link ? '_blank' : ''}>
          <Flex flex={1} align="center">
            <Text fontSize={'12px'} _hover={{ textDecoration: 'underline' }}>
              Read more
            </Text>
            <Icon
              as={BsArrowRight}
              color={'#898989'}
              fontSize={'24px'}
              pl={2}
            />
          </Flex>
        </Link>
      </CardContainer>
    </Link>
  )
}

export default BlogListingCard
