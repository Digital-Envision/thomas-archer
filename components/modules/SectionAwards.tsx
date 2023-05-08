import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { getImageUrl } from 'lib/utils'

type SectionAwardsProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  onPressMore: () => void
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  awards: { name: string; description: string }[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionAwards: React.FC<SectionAwardsProps> = ({
  heading,
  headingTagLevel,
  paragraph,
  onPressMore,
  imageUrl,
  image,
  awards,
  marginTop,
  marginBottom,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Heading1 as={headingTagLevel}>{heading}</Heading1>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} direction={'column'} width={'100%'}>
          <Box pt={HeightVariants.less} />
          <Text>{paragraph}</Text>
          <Box pt={HeightVariants.less} />
          <Box>
            <Button variant={Variants.blackLine} onClick={onPressMore}>
              {'Find Out More'}
            </Button>
          </Box>
          <Box
            pt={{
              base: HeightVariants.less,
              md: HeightVariants.none,
            }}
          />
        </Flex>
        <Box p={{ base: '1rem', md: '2rem' }} />
        <Flex flex={1} width={'w-full'}>
          <Flex direction={'row'}>
            <Image
              alt={heading}
              maxW={'90px'}
              maxH={'95px'}
              src={getImageUrl(image)}
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
