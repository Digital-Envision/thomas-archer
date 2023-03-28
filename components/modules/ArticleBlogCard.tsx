import { Box, Image, Button } from '@chakra-ui/react'
import Heading3 from '../base/Heading3'
import Text from '../base/Text'
import { isEmpty } from 'lodash'

type ArticleBlogCardProps = {
  imageUrl: string
  createdAt?: string
  heading: string
  description: string
  width?: string
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
    width={'450px'}
    buttonText="Find Out More"
    buttonOnClick={() => alert('Button clicked!')}
  />
 */

const ArticleBlogCard: React.FC<ArticleBlogCardProps> = ({
  imageUrl,
  createdAt,
  heading,
  description,
  width = '450px',
  buttonText,
  buttonOnClick,
}) => {
  return (
    <Box overflow="hidden" width={width}>
      <Image src={imageUrl} alt={heading} />
      <Box p="6">
        {!isEmpty(createdAt) && (
          <Text mb="2" fontSize={'10px'} color={'#898989'}>
            {createdAt}
          </Text>
        )}

        <Heading3 mb="2">{heading}</Heading3>

        <Text fontSize={'14px'} mb="4">
          {description}
        </Text>

        {/* TODO: using base button later */}
        <Button variant="outline" onClick={buttonOnClick}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default ArticleBlogCard
