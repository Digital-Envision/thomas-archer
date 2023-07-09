import { Box, Flex } from '@chakra-ui/react'
import Image, { ImageVariant } from 'components/base/Image'
import Text from '../base/Text'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import Link, { LinksInterface } from 'components/base/Link'
import CustomPortableText from 'components/base/CustomPortableText'
import { getImageUrl } from 'lib/utils'
import {MetaData} from 'utils/interfaces'

type Section2ColImageTextFeaturedImageLeftRightProps = {
  heading: string
  quotes: any[]
  postedBy: string
  image?: any // sanity io image
  alt: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
  IsImageRight: boolean
  imageMetaData: MetaData
}

const Section2ColImageTextFeaturedImageLeftRight: React.FC<
  Section2ColImageTextFeaturedImageLeftRightProps
> = ({
  heading,
  quotes,
  postedBy,
  image,
  imageMetaData,
  alt,
  marginTop,
  marginBottom,
  button,
  IsImageRight,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={{
        base: 'column-reverse',
        md: 'column-reverse',
        lg: IsImageRight ? 'row' : 'row-reverse',
      }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex
        flex={1}
        direction={'row'}
        align={'center'}
        justify={IsImageRight ? 'flex-end' : 'flex-start'}
      >
        <Box>
          <Flex
            flex={1}
            direction={'column'}
            alignItems={'flex-start'}
            justify="center"
            height={'100%'}
            maxWidth="800px"
            px={{ base: '2rem', sm: '2rem', md: '2rem', lg: '4rem' }}
          >
            <Box fontFamily={'heading'} pb="34px" maxWidth="800px">
              <CustomPortableText value={quotes} />
            </Box>

            <Text pb="34px">{postedBy}</Text>

            <Box>
              {button.label && (
                <Link link={button}>
                  <Button variant={Variants.blackLine}>{button?.label}</Button>
                </Link>
              )}
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box p="2rem" />

      <Flex flex={1.3} bgColor="blue.100">
        <Image
          variant={ImageVariant.ImageChakra}
          width="100%"
          height={'auto'}
          objectFit={'cover'}
          src={getImageUrl(image)}
          lqip={imageMetaData?.metadata?.lqip}
          alt={alt || heading}
        />
      </Flex>
    </Flex>
  )
}

export default Section2ColImageTextFeaturedImageLeftRight
