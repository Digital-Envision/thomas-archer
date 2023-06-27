import { Box, Flex, VStack } from '@chakra-ui/react'
import Image, { ImageVariant } from 'components/base/Image'
import { HeightVariants } from 'components/base/Divider'
import { getImageUrl } from 'lib/utils'
import { MetaData, SanityFiles } from 'utils/interfaces'
import Text from '../base/Text'

type SectionImageAwardsProps = {
  image?: SanityFiles // sanity io image
  alt?: string
  awards: { name: string; description: string }[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
  imageMetaData?: MetaData
}

const SectionImageAwards: React.FC<SectionImageAwardsProps> = ({
  image,
  imageMetaData,
  alt,
  awards,
  marginTop,
  marginBottom,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex
      mx={'auto'}
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box alignSelf={'center'}>
        <Image
          variant={ImageVariant.ImageChakra}
          src={getImageUrl(image)}
          lqip={imageMetaData?.metadata?.lqip}
          alt={alt}
          objectFit="cover"
          width="100%"
          height="80vh"
        />
      </Box>
      <Flex
        direction={'column'}
        py="3rem"
        px={{ base: 'column', sm: '1rem', md: '10rem' }}
      >
        <Text>AWARDS</Text>
        <Box py={'1rem'} />
        <VStack spacing={1} align="stretch">
          {awards.map((o) => {
            return (
              <Flex direction={'row'}>
                <Text fontWeight="bold" pr={2}>
                  {o?.name}
                </Text>
                <Text>{o?.description}</Text>
              </Flex>
            )
          })}
        </VStack>
      </Flex>
    </Flex>
  )
}

export default SectionImageAwards
