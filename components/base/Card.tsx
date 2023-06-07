import { Box } from '@chakra-ui/react'
import Heading3 from './Heading3'

export const CardContainer: React.FC<any> = ({ children, ...props }) => {
  return (
    <Box
      overflow="hidden"
      borderBottomWidth={1}
      w={'100%'}
      maxWidth={{ base: '420px', sm: '420px', md: '100%', lg: '100%' }}
      h="auto"
      {...props}
    >
      {children}
    </Box>
  )
}

export const CardHeading = ({ children, ...props }) => {
  return (
    <Heading3 fontSize={'20px'} lineHeight={'20px'} mb="5" {...props}>
      {children}
    </Heading3>
  )
}
