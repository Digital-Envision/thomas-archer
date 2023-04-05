import { Box, Flex, HStack, Image, VStack } from '@chakra-ui/react'
import Text from '../base/Text'

type SectionImageAwardsProps = {
  imageUrl: string
  awards: { label: string; value: string }[]
}

/**
 * usage:
    <SectionImageAwards
        imageUrl="https://via.placeholder.com/1296x730/"
        awards={[
          {
            label: 'Finalist 2021',
            value: 'HIA Eastern Victorian Custom Build Home $750,001 - $1M',
          },
          {
            label: 'Winner 2020',
            value: 'HIA Australian Project Home Winner',
          },
          {
            label: 'Winner 2019',
            value: 'HIA Victorian Project Home',
          },
          {
            label: 'Winner 2019',
            value: 'HIA Victorian Project Home over $500,001',
          },
          {
            label: 'Winner 2018',
            value: 'HIA Victorian Project Home over $400,001',
          },
        ]}
      />
 */

const SectionImageAwards: React.FC<SectionImageAwardsProps> = ({
  imageUrl,
  awards,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex direction={'column'} width={'w-full'} maxWidth={'1440px'} px={'1rem'}>
      <Box alignSelf={'center'}>
        <Image src={imageUrl} objectFit="cover" width="100%" height="80vh" />
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
                  {o?.label}
                </Text>
                <Text>{o?.value}</Text>
              </Flex>
            )
          })}
        </VStack>
      </Flex>
    </Flex>
  )
}

export default SectionImageAwards
