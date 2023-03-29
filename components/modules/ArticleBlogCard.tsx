import { Box, Image, Button, Flex } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'

type ArticleBlogCardProps = {
  imageUrl: string
  createdAt?: string
  heading: string
  description: string
  width?: string
  height?: string
  buttonText: string
  buttonOnClick: () => {}
}

/**
 * usage:
 * <ArticleCard
    imageUrl="https://via.placeholder.com/500x500"
    createdAt={'01/01/2023'}
    heading="Article Card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel."
    buttonText="Find Out More"
    buttonOnClick={() => alert('Button clicked!')}
  />
 */

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  imageUrl,
  createdAt,
  heading,
  description,
  width = '470px',
  height = '730px',
  buttonText,
  buttonOnClick,
}) => {
  return (
    <Flex direction={'column'} overflow="hidden" width={width} height={height}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={imageUrl}
          alt={heading}
          maxW="470px"
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
          <Heading3 mb="4">{heading}</Heading3>

          <Text noOfLines={3} fontSize={'14px'} mb="4">
            {description}
          </Text>
        </Box>

        {/* TODO: using base button later */}
        <Box mt="auto">
          <Button variant="outline" onClick={buttonOnClick}>
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ArticleBlogCard
