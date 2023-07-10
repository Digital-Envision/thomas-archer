import { Box, Icon, Flex, HStack } from '@chakra-ui/react'
import Image, { ImageVariant } from 'components/base/Image'
import Link from 'next/link'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { BsArrowRight } from 'react-icons/bs'
import { urlForImage } from 'lib/sanity.image'
import _ from 'lodash'
import { Project } from 'lib/sanity.queries'
import { SanityFiles } from 'utils/interfaces'
import { CardContainer, CardHeading } from 'components/base/Card'
import { getImageUrl } from 'lib/utils'

export interface AwardListingCardProps {
  image?: SanityFiles
  imageMetaData?: {
    metadata: {
      lqip: string
      blurHash: string
    }
  }
  alt?: string
  link: string
  heading: string
  name?: string
  award?: Project['award']
}

const AwardListingCard: React.FC<AwardListingCardProps> = ({
  image,
  imageMetaData,
  alt,
  link,
  heading,
  name,
  award,
}) => {
  return (
    <Link href={link || '#'}>
      <CardContainer>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Image
            variant={ImageVariant.ImageChakra}
            src={getImageUrl(image)}
            lqip={imageMetaData?.metadata?.lqip}
            alt={alt || heading}
            objectFit="cover"
            w="100vw"
            h="300px"
            bgColor={'white'}
          />
          {award?.awardLogo && (
            <Box position="absolute" top="0px" right="1rem">
              <Image
                variant={ImageVariant.ImageChakra}
                bg="rgba(255,255,255,1)"
                src={
                  (award?.awardLogo && urlForImage(award?.awardLogo).url()) ||
                  ''
                }
                lqip={award?.awardLogoMetaData?.metadata?.lqip}
                alt={alt || heading}
                maxW="50px"
                maxH="50px"
                objectFit="cover"
                p="5px"
              />
            </Box>
          )}
        </Box>

        <Flex flex={1} direction={'column'} pt="5">
          <CardHeading>{heading}</CardHeading>
          <Text fontWeight={'bold'}>{name}</Text>

          {/* awards */}
          <HStack minHeight="80px" align="flex-start">
            {!_.isEmpty(award?.awards) &&
              _.slice(award?.awards, 0, 2).map((award) => {
                return (
                  <Flex direction={'column'} flex={1} key={award._key}>
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
      </CardContainer>
    </Link>
  )
}

export default AwardListingCard
