import { Box, Image, Flex, Link } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'
import Button, { Variants } from 'components/base/Button'
import { urlForImage } from 'lib/sanity.image'
import router from 'next/router'
import { HeadingTagSemantic } from 'components/base/Heading1'

export type ArticleBlogCardProps = {
  image?: any // sanity io image
  imageUrl?: string // load image from url; test purpose
  createdAt?: string
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  width?: string
  height?: string
  buttonText: string
  buttonLink: string
}

/**
 * usage:
 * <ArticleCard
    imageUrl="https://via.placeholder.com/500x500"
    createdAt={'01/01/2023'}
    heading="Article Card"
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel."
    buttonText="Find Out More"
    buttonOnClick={() => alert('Button clicked!')}
  />
 */

// TODO image should be have the same size and aspect ratio
// TODO offset when there's createdAt
// TODO handle image height above 700px

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  imageUrl,
  image,
  createdAt,
  heading,
  headingTagLevel,
  paragraph,
  width = '100%',
  height = '700px',
  buttonText,
  buttonLink,
}) => {
  return (
    <Flex
      direction={'column'}
      width={width}
      maxWidth="550px"
      maxHeight={height}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={imageUrl || urlForImage(image).url()}
          alt={heading}
          maxH="500px"
          w="full"
          h="auto"
          objectFit={'cover'}
        />
      </Box>
      <Flex flex="1" flexDirection={'column'} px="8" pt="8">
        <Box flex="1" overflow="hidden">
          {!isEmpty(createdAt) && (
            <Text mb="4" fontSize={'10px'} color={'#898989'}>
              {createdAt}
            </Text>
          )}
          <Heading3 as={headingTagLevel} mb="4">
            {heading}
          </Heading3>

          <Text noOfLines={3} fontSize={'14px'} mb="4">
            {paragraph}
          </Text>
        </Box>

        <Box mt="auto">
          <Link href={buttonLink} isExternal>
            <Button variant={Variants.blackLine}>{buttonText}</Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ArticleBlogCard
