import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'
import _ from 'lodash'

type SectionTextFeaturedProps = {
  leftHeading: string
  rightHeading: string
  postedBy: string
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionTextFeatured: React.FC<SectionTextFeaturedProps> = ({
  leftHeading,
  rightHeading,
  postedBy,
  marginTop,
  marginBottom,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex
      mx={'auto'}
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={'10%'}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex>
        <Flex flex={2} px={2}>
          <Heading1
            as="blockquote"
            textIndent={_.first(leftHeading) === `“` ? '-8px' : '0px'}
          >
            {leftHeading}
          </Heading1>
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
            <Heading1 as="blockquote">{rightHeading}</Heading1>
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
