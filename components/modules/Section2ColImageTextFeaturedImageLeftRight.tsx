import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import Link, { LinksInterface } from 'components/base/Link'
import CustomPortableText from 'components/base/CustomPortableText'
import { getImageUrl } from 'lib/utils'

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
}

const Section2ColImageTextFeaturedImageLeftRight: React.FC<
  Section2ColImageTextFeaturedImageLeftRightProps
> = ({
  heading,
  quotes,
  postedBy,
  image,
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
          width="100%"
          height={'auto'}
          objectFit={'cover'}
          src={getImageUrl(image)}
          alt={alt || heading}
        />
      </Flex>
    </Flex>
  )
}

export default Section2ColImageTextFeaturedImageLeftRight
