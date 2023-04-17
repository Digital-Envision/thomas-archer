import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import Divider, { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import router from 'next/router'

type Section2ColImageTextMosaicType2Props = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  rightImage?: any // sanity io image
  leftImage?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
  // buttonText: string
  // buttonLink: string
}

const Section2ColImageTextMosaicType2: React.FC<
  Section2ColImageTextMosaicType2Props
> = ({
  heading,
  headingTagLevel,
  paragraph,
  marginTop,
  marginBottom,
  leftImage,
  rightImage,
  // buttonText,
  // buttonLink,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1880px'}
      marginTop={marginTop}
      marginBottom={marginBottom}
      justify="end"
      px="1rem"
    >
      <Flex flex={1} justify={'end'} maxWidth={'650px'}>
        <Flex direction={'column'} pr={{ base: 0, md: '1rem' }}>
          <Image
            objectFit={'cover'}
            src={
              typeof leftImage === 'string'
                ? leftImage
                : urlForImage(leftImage).url()
            }
          />
          <Box pt="1.5rem" />
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
          <Box pt="1.5rem" />

          <Flex flex={1.2} direction={'row'} pt={2} pr={2}>
            <Box pt={2} pr={2}>
              <Dash width="50px" height="1px" />
            </Box>

            <Box>
              <Text>{paragraph}</Text>
              <Box pt={5}>
                <Button variant={Variants.blackLine}>
                  {'Book an Exploration Session'}
                </Button>
              </Box>
              <Box
                pt={{
                  base: HeightVariants.less,
                  md: HeightVariants.none,
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box p={{ base: '0.5rem', md: 0 }} />

      <Flex flex={1.2} align="center" maxW={'1020px'}>
        <Image
          width="100%"
          height={'auto'}
          objectFit={'cover'}
          src={
            typeof rightImage === 'string'
              ? rightImage
              : urlForImage(rightImage).url()
          }
        />
      </Flex>
    </Flex>
  )
}

export default Section2ColImageTextMosaicType2
