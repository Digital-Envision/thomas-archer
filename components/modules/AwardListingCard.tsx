import { Box, Image, Icon, Flex, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { urlForImage } from 'lib/sanity.image'
import _ from 'lodash'
import { Project } from 'lib/sanity.queries'
import { SanityFiles } from 'utils/interfaces'

export interface AwardListingCardProps {
  image?: SanityFiles
  link: string
  heading: string
  name?: string
  award?: Project['award']
}

const AwardListingCard: React.FC<AwardListingCardProps> = ({
  image,
  link,
  heading,
  name,
  award,
}) => {
  console.log('AwardListingCard', award)
  return (
    <Box overflow="hidden" width={'400px'} minH={'450px'} borderBottomWidth={1}>
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
      <Flex flex={1} direction={'column'} pt="5">
        <Heading3 fontSize={'28px'} lineHeight={'20px'} mb="5">
          {heading}
        </Heading3>
        <Text fontWeight={'bold'}>{name}</Text>

        {/* awards */}
        <HStack minHeight="80px" align="flex-start">
          {!_.isEmpty(award?.awards) &&
            _.slice(award?.awards, 0, 2).map((award) => {
              return (
                <Flex direction={'column'} flex={1}>
                  <Text fontWeight={'bold'}>{award.name}</Text>
                  <Text>{award.description}</Text>
                </Flex>
              )
            })}
        </HStack>

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

export default AwardListingCard
