import { Box, Flex, Link } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'

type SectionHeadingParagraphCTAProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  isOffset: boolean
  showButton?: boolean
  marginTop?: HeightVariants
  marginBottom?: HeightVariants
  buttonText?: string
  buttonLink?: string
}

const SectionHeadingParagraphCTA: React.FC<SectionHeadingParagraphCTAProps> = ({
  heading,
  headingTagLevel,
  paragraph,
  isOffset,
  showButton = true,
  marginTop,
  marginBottom,
  buttonText,
  buttonLink,
}) => {
  return (
    <Flex
      mx={'auto'}
      width={'w-full'}
      maxWidth={'1800px'}
      direction={{ base: 'column', md: isOffset ? 'column' : 'row' }}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex direction={'row'} flex={1}>
        <Flex flex={1}>
          <Heading1 as={headingTagLevel}>{heading}</Heading1>
        </Flex>
        {isOffset && (
          <Flex
            display={{ base: 'none', md: 'block' }}
            flex={{ base: 'none', md: 1 }}
          />
        )}
      </Flex>

      <Box p="1rem" />

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
              {showButton && (
                <Link href={buttonLink} isExternal>
                  <Button variant={Variants.blackLine}>{buttonText}</Button>
                </Link>
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionHeadingParagraphCTA
