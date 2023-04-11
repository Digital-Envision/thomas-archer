import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import Text from '../base/Text'

type SectionImageAwardsProps = {
  imageUrl: string // load image from url; test purpose
  image?: any // sanity io image
  awards: { name: string; description: string }[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

/**
 * usage:
    <SectionImageAwards
        imageUrl="https://via.placeholder.com/1296x730/"
        awards={[
          {
            name: 'Finalist 2021',
            description: 'HIA Eastern Victorian Custom Build Home $750,001 - $1M',
          },
          {
            name: 'Winner 2020',
            description: 'HIA Australian Project Home Winner',
          },
          {
            name: 'Winner 2019',
            description: 'HIA Victorian Project Home',
          },
          {
            name: 'Winner 2019',
            description: 'HIA Victorian Project Home over $500,001',
          },
          {
            name: 'Winner 2018',
            description: 'HIA Victorian Project Home over $400,001',
          },
        ]}
      />
 */

const SectionImageAwards: React.FC<SectionImageAwardsProps> = ({
  imageUrl,
  image,
  awards,
  marginTop,
  marginBottom,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex
      direction={'column'}
      width={'w-full'}
      maxWidth={'1440px'}
      px={'1rem'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box alignSelf={'center'}>
        <Image
          src={imageUrl || urlForImage(image).url()}
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
