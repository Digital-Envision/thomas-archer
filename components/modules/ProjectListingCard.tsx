import { Box, Image, Icon, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { urlForImage } from 'lib/sanity.image'
import { PaginationData } from 'utils/interfaces'

interface ProjectListingCardDataProps {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  link: string
  heading: string
  subHeading: string
  caption: string
  width?: string
  height?: string
  isExternal?: boolean
  slug?: { current: string }
}

export type ProjectListingCardProps = {
  data: ProjectListingCardDataProps[]
  pagination: PaginationData
}

const ProjectListingCard: React.FC<ProjectListingCardProps['data'][0]> = ({
  imageUrl,
  image,
  link,
  heading,
  subHeading,
  caption,
  width = '400px',
  height = '450px',
  isExternal = true,
}) => {
  return (
    <Box overflow="hidden" width={width} height={height} borderBottomWidth={1}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={(image && urlForImage(image).url()) || ''}
          alt={heading}
          maxW="400px"
          maxH="280px"
          w="full"
          h="auto"
          objectFit="cover"
        />
      </Box>
      <Box py="5">
        <Heading3 fontSize={'28px'} lineHeight={'20px'} mb="5">
          {heading}
        </Heading3>
        <Text fontSize={'20px'} mb="2">
          {subHeading}
        </Text>
        <Text fontSize={'20px'} mb="5" color={'#898989'}>
          {caption}
        </Text>

        <Link href={link || '#'} target={link ? '_blank' : ''}>
          <Flex align="center">
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
      </Box>
    </Box>
  )
}

export default ProjectListingCard
