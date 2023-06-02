import { Flex } from '@chakra-ui/react'

const SectionContainer: React.FC<any> = ({ children, ...props }) => {
  return (
    <Flex
      mx={'auto'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default SectionContainer
