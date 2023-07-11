import { Box, Icon, Flex } from '@chakra-ui/react'
import Image, { ImageVariant } from 'components/base/Image'
import Link from 'next/link'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { blockToPlainText, getImageUrl } from 'lib/utils'
import { PaginationData } from 'utils/interfaces'
import { CardContainer, CardHeading } from 'components/base/Card'
import moment from 'moment'

export type BlogListingCardDataProps = {
  image?: any // sanity io image
  imageMetaData?: {
    metadata: {
      lqip: string
      blurHash: string
    }
  }
  alt: string
  createdDate: string
  link: string
  heading: string
  content: any[]
  slug?: { current: string }
  width?: string
  height?: string
  tags?: string[]
}

export type BlogListingCardProps = {
  data: BlogListingCardDataProps[]
  pagination: PaginationData
}

const BlogListingCard: React.FC<BlogListingCardProps['data'][0]> = ({
  image,
  imageMetaData,
  alt,
  link,
  heading,
  content,
  createdDate,
}) => {
  return (
    <Link href={link || '#'}>
      <CardContainer>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            variant={ImageVariant.ImageChakra}
            src={getImageUrl(image)}
            lqip={imageMetaData?.metadata?.lqip}
            alt={alt || heading}
            objectFit="cover"
            w="100vw"
            h="300px"
          />
        </Box>

        <Box py="5" h="200px">
          {createdDate && (
            <Text mb="4" fontSize={'10px'} color={'#898989'}>
              {moment(createdDate).format('DD MMMM YYYY')}
            </Text>
          )}

          <CardHeading>{heading}</CardHeading>
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
