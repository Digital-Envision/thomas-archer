import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Dash from 'components/base/Dash'

type SectionTextFeaturedProps = {
  leftHeading: string
  rightHeading: string
  postedBy: string
}

/**
 * usage:
  <SectionTextFeatured
    leftHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
        et dictum arcu ipsum vel risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed feugiat, lectus et viverra
        ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel
        risus. arcu ipsum vel risus."
    rightHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
        et dictum arcu ipsum vel risus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed feugiat, lectus et viverra
        ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel
        risus. arcu ipsum vel risus."
    postedBy="Frank Tarulli, Director Thomas Archer" 
  />
 */

const SectionTextFeatured: React.FC<SectionTextFeaturedProps> = ({
  leftHeading,
  rightHeading,
  postedBy,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex
      direction={'column'}
      width={'w-full'}
      maxWidth={'1440px'}
      borderWidth={1}
      px={'5rem'}
    >
      <Flex>
        <Flex flex={2} px={2}>
          <Heading1>{leftHeading}</Heading1>
        </Flex>
        <Flex display={{ base: 'none', md: 'block' }} flex={1} px={2} />
      </Flex>

      <Flex pt={{ base: 8, md: 2 }}>
        <Flex display={{ base: 'none', md: 'block' }} flex={1} px={2} />
        <Flex flex={2} direction={'row'} align={'flex-start'}>
          <Box pt={5} pr={5}>
            <Dash width={{ base: '50px', md: '100px' }} height="1px" />
          </Box>
          <Flex direction={'column'}>
            <Heading1>{rightHeading}</Heading1>
            <Box pt={5}>
              <Text fontSize={'sm'}>{postedBy}</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionTextFeatured
