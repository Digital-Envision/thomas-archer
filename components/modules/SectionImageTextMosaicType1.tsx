import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import Divider, { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'

type SectionImageTextMosaicType1Props = {
  heading: string
  paragraph: string
  rightImageUrl: string
  leftImageUrl: string
  rightImage?: any // sanity io image
  leftImage?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

/**
 * Usage
 * <SectionImageTextMosaicType1
    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
      et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
      efficitur nunc in."
    rightImageUrl="https://via.placeholder.com/727x455/"
    leftImageUrl="https://via.placeholder.com/500x500/"
  />
 */

const SectionImageTextMosaicType1: React.FC<
  SectionImageTextMosaicType1Props
> = ({
  heading,
  paragraph,
  rightImageUrl,
  leftImageUrl,
  marginTop,
  marginBottom,
  leftImage,
  rightImage,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1440px'}
      px={'1rem'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex
        flex={1}
        alignSelf={{ base: 'center', md: 'start' }}
        justify={'end'}
        pr={{ base: 0, md: 4 }}
      >
        <Image
          objectFit={'cover'}
          src={leftImageUrl || urlForImage(leftImage).url()}
        />
      </Flex>

      <Flex flex={1} justify={'center'}>
        <Flex direction={'column'}>
          <Image
            objectFit={'cover'}
            src={rightImageUrl || urlForImage(rightImage).url()}
          />
          <Box pt="1.5rem" />
          <Heading1>{heading}</Heading1>
          <Box pt="1.5rem" />
          <Flex flex={1} direction={'row'} pt={2} pr={2}>
            <Box pt={2} pr={2}>
              <Dash width="50px" height="1px" />
            </Box>

            <Box>
              <Text>{paragraph}</Text>
              <Box pt={5}>
                <Button variant={Variants.blackLine}>
                  {'Why Thomas Archer'}
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
    </Flex>
  )
}

export default SectionImageTextMosaicType1
