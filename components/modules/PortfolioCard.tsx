import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import Text from '../base/Text'

interface PortfolioCardProps {
  imageUrl: string
  linkUrl: string
  label: string
  width?: string
  height?: string
}

/**
 * usage:
 * <PortfolioCard
    imageUrl="https://via.placeholder.com/500x500"
    linkUrl="https://www.google.com/"
    label="test"
   />
 */

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageUrl,
  linkUrl,
  label,
  width = '360px',
  height = '540px',
}) => {
  return (
    <Box overflow="hidden" width={width} height={height}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          // TODO implement: src={(image && urlForImage(image).url()) || ''}
          src={imageUrl}
          alt={label}
          maxW="360px"
          maxH="500px"
          w="full"
          h="auto"
          objectFit="cover"
        />
      </Box>
      <Box px={2} py={1}>
        <Link href={linkUrl || '#'} target={linkUrl ? '_blank' : ''}>
          <Text noOfLines={1} fontSize={'14px'}>
            {label}
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

export default PortfolioCard
