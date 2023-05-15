import { Box, Image, Icon, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { urlForImage } from 'lib/sanity.image'
import { blockToPlainText } from 'lib/utils'
import { PaginationData } from 'utils/interfaces'

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
  width = '400px',
  height = '450px',
}) => {
  return (
    <Box overflow="hidden" width={width} minH={height} borderBottomWidth={1}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={(image && urlForImage(image).url()) || ''}
          alt={heading}
          maxW="400px"
          maxH="280px"
          height="280px"
          w="full"
          objectFit="cover"
        />
      </Box>
      <Flex flex={1} direction={'column'} pt="5">
        <Heading3 fontSize={'28px'} lineHeight={'20px'} mb="5">
          {heading}
        </Heading3>
        {/* TODO should have a better responsive option */}
        <Flex flex={1} minHeight="80px" pb="1rem">
          <Text noOfLines={4}>{blockToPlainText(content)}</Text>
        </Flex>

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
      </Flex>
    </Box>
  )
}

export default BlogListingCard
