import { Box, Flex } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'

type SectionHeadingParagraphCTAProps = {
  heading: string
  paragraph: string
  isOffset: boolean
}

const SectionHeadingParagraphCTA: React.FC<SectionHeadingParagraphCTAProps> = ({
  heading,
  paragraph,
  isOffset,
}) => {
  return (
    <Flex
      width={'w-full'}
      maxWidth={'1440px'}
      direction={{ base: 'column', md: isOffset ? 'column' : 'row' }}
      px={'1rem'}
    >
      <Flex direction={'row'} flex={1}>
        <Flex flex={1}>
          <Heading1>{heading}</Heading1>
        </Flex>
        {isOffset && (
          <Flex
            display={{ base: 'none', md: 'block' }}
            flex={{ base: 'none', md: 1 }}
          />
        )}
      </Flex>

      <Flex direction={'row'} flex={1}>
        {isOffset && (
          <Flex
            display={{ base: 'none', md: 'block' }}
            flex={{ base: 'none', md: 1 }}
          />
        )}
        <Flex flex={1}>
          <Box pt={2} pr={2}>
            <Dash width="50px" height="1px" />
          </Box>
          <Flex direction={'column'}>
            <Text>{paragraph}</Text>
            <Box pt={5}>
              <Button variant={Variants.blackLine}>
                {'Why Thomas Archer'}
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionHeadingParagraphCTA
