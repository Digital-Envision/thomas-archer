import { Box, Image, Icon, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { urlForImage } from 'lib/sanity.image'
import { PaginationData } from 'utils/interfaces'
import { CardContainer, CardHeading } from 'components/base/Card'
import { getImageUrl } from 'lib/utils'

interface ProjectListingCardDataProps {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  link: string
  heading: string
  subHeading: string
  caption: string
  width?: string
  height?: string
  slug?: { current: string }
}

export type ProjectListingCardProps = {
  data: ProjectListingCardDataProps[]
  pagination: PaginationData
}

const ProjectListingCard: React.FC<ProjectListingCardProps['data'][0]> = ({
  image,
  link,
  heading,
  subHeading,
  caption,
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
          <CardHeading>{heading}</CardHeading>
          <Text fontSize={'14px'} mb="1">
            {subHeading}
          </Text>
          <Text fontSize={'14px'} mb="5" color={'#898989'} noOfLines={3}>
            {caption}
          </Text>
        </Box>

        <Flex flex={1} align="center">
          <Text fontSize={'12px'} _hover={{ textDecoration: 'underline' }}>
            Read more
          </Text>
          <Icon as={BsArrowRight} color={'#898989'} fontSize={'24px'} pl={2} />
        </Flex>
      </CardContainer>
    </Link>
  )
}

export default ProjectListingCard
