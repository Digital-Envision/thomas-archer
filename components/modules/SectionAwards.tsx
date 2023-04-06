import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Divider, { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'

type SectionAwardsProps = {
  heading: string
  paragraph: string
  onPressMore: () => void
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  awards: { name: string; description: string }[]
}

/**
 * usage:
    <SectionAwards
      heading="Accolades"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam."
      onPressMore={() => alert('find out more')}
      imageUrl="/images/logo/HIA-logo.png"
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

const SectionAwards: React.FC<SectionAwardsProps> = ({
  heading,
  paragraph,
  onPressMore,
  imageUrl,
  image,
  awards,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex direction={'column'} width={'w-full'} maxWidth={'1440px'} px={'1rem'}>
      <Heading1>{heading}</Heading1>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} direction={'column'} width={'100%'} pr={8}>
          <Divider variant={HeightVariants.less} />
          <Text>{paragraph}</Text>
          <Divider variant={HeightVariants.less} />
          <Box>
            <Button variant={Variants.blackLine} onClick={onPressMore}>
              {'Find Out More'}
            </Button>
          </Box>
          <Divider
            variant={{
              base: HeightVariants.less,
              md: HeightVariants.none,
            }}
          />
        </Flex>

        <Flex flex={1} width={'w-full'}>
          <Flex direction={'row'}>
            <Image
              alt={heading}
              maxW={'90px'}
              maxH={'95px'}
              src={imageUrl || urlForImage(image).url()}
            />
            <Box pr={3} />
            <VStack spacing={8} align="stretch">
              {awards?.map((o) => {
                return (
                  <Box>
                    <Text fontWeight="bold">{o?.name}</Text>
                    <Text>{o?.description}</Text>
                  </Box>
                )
              })}
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionAwards
