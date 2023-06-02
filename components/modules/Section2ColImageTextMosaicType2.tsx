import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'
import { urlForImage } from 'lib/sanity.image'
import Link, { LinksInterface } from 'components/base/Link'
import { getImageUrl } from 'lib/utils'

type Section2ColImageTextMosaicType2Props = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  rightImage?: any // sanity io image
  leftImage?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button?: LinksInterface
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
  button,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
      justify="end"
    >
      <Flex flex={1} justify={'end'} maxWidth={'650px'}>
        <Flex direction={'column'} pr={{ base: 0, md: '1rem' }}>
          <Image objectFit={'cover'} src={getImageUrl(leftImage)} />
          <Box pt="1.5rem" />
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
          <Box pt="1.5rem" />

          <Flex
            flex={1.2}
            direction={'row'}
            pt={2}
            px={{ base: '1rem', md: 0 }}
          >
            <Box pt={'0.5rem'} pr={2}>
              <Dash width="50px" height="1px" />
            </Box>

            <Box>
              <Text>{paragraph}</Text>
              <Box pt={5}>
                {button?.label && (
                  <Link link={button}>
                    <Button variant={Variants.blackLine}>
                      {button?.label}
                    </Button>
                  </Link>
                )}
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

      <Flex
        flex={1.2}
        align="center"
        maxW={'900px'}
        mt={{ base: '0px', sm: '0px', md: '0px', lg: '100px' }}
      >
        <Image
          width="100%"
          height={'auto'}
          objectFit={'cover'}
          src={(rightImage && urlForImage(rightImage)?.url()) || ''}
        />
      </Flex>
    </Flex>
  )
}

export default Section2ColImageTextMosaicType2
