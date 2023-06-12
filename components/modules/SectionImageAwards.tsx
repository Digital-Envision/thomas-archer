import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import { getImageUrl } from 'lib/utils'
import { SanityFiles } from 'utils/interfaces'
import Text from '../base/Text'

type SectionImageAwardsProps = {
  image?: SanityFiles // sanity io image
  alt?: string
  awards: { name: string; description: string }[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionImageAwards: React.FC<SectionImageAwardsProps> = ({
  image,
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
          src={getImageUrl(image)}
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
