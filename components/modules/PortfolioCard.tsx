import { Box, Image, Button, Link } from '@chakra-ui/react'
import Text from '../base/Text'

interface PortfolioCardProps {
  imageUrl: string
  linkUrl: string
  label: string
  width?: string
}

/**
 * usage:
 *  <PortfolioCard
    imageUrl="https://via.placeholder.com/500x500"
    linkUrl="https://www.google.com/"
    label="test"
    />
 */

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageUrl,
  linkUrl,
  label,
  width = '450px',
}) => {
  return (
    <Box overflow="hidden" width={width}>
      <Image src={imageUrl} alt={label} />
      <Box p="6" mt="4">
        <Link href={linkUrl} isExternal textDecor="underline">
          <Text fontSize={'14px'} mb="4">
            {label}
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

export default PortfolioCard
