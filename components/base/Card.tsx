import { Box } from '@chakra-ui/react'

const CardContainer: React.FC<any> = ({ children, ...props }) => {
  return (
    <Box
      overflow="hidden"
      borderBottomWidth={1}
      minW={'420px'}
      w={{ base: '420px', sm: '420px', md: '100%', lg: '100%' }}
      h="auto"
      {...props}
    >
      {children}
    </Box>
  )
}

export default CardContainer
