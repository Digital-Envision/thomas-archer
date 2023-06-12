import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react'
import Text from '../base/Text'
import { HeadingTagSemantic } from 'components/base/Heading1'
import { HeightVariants } from 'components/base/Divider'
import { SanityFiles } from 'utils/interfaces'
import { urlForImage } from 'lib/sanity.image'
import Heading3 from 'components/base/Heading3'
import Heading2 from 'components/base/Heading2'

type Section2ColHeading2ColParagraphProps = {
  leftHeading: string
  rightHeading1: string
  rightParagraph1: string
  rightHeading2: string
  rightParagraph2: string
  rightHeading3: string
  rightParagraph3: string
  rightHeading4: string
  rightParagraph4: string
  headingTagLevel: HeadingTagSemantic
  marginTop: HeightVariants
  marginBottom: HeightVariants
  image: SanityFiles | string
  alt?: string
}

const Section2ColHeading2ColParagraph: React.FC<
  Section2ColHeading2ColParagraphProps
> = ({
  leftHeading,
  rightHeading1,
  rightParagraph1,
  rightHeading2,
  rightParagraph2,
  rightHeading3,
  rightParagraph3,
  rightHeading4,
  rightParagraph4,
  headingTagLevel,
  marginTop,
  marginBottom,
  image,
  alt,
}) => {
  return (
    <Flex
      mx={'auto'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      direction={{ base: 'column', md: 'row' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Flex
        direction={'row'}
        flex={0.8}
        mb={{ base: 6, md: 0 }}
        mr={{ base: 0, md: 8 }}
      >
        <Flex flex={1}>
          <Heading2 mb={{ base: '2.5rem', md: 0 }} as={headingTagLevel}>
            {leftHeading}
          </Heading2>
        </Flex>
      </Flex>

      <Flex direction={'column'} flex={1.2}>
        <SimpleGrid
          flex={1}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 6, md: '2.5rem' }}
          mb={{ base: 6, md: 20 }}
        >
          <Box>
            <Text fontSize={'10px'} color={'#898989'}>
              01
            </Text>
            <Heading3 as={headingTagLevel} pb={'1.5rem'}>
              {rightHeading1}
            </Heading3>
            <Text>{rightParagraph1}</Text>
          </Box>
          <Box>
            <Text fontSize={'10px'} color={'#898989'}>
              02
            </Text>
            <Heading3 as={headingTagLevel} pb={'1.5rem'}>
              {rightHeading2}
            </Heading3>
            <Text>{rightParagraph2}</Text>
          </Box>
          <Box>
            <Text fontSize={'10px'} color={'#898989'}>
              03
            </Text>
            <Heading3 as={headingTagLevel} pb={'1.5rem'}>
              {rightHeading3}
            </Heading3>
            <Text>{rightParagraph3}</Text>
          </Box>
          <Box>
            <Text fontSize={'10px'} color={'#898989'}>
              04
            </Text>
            <Heading3 as={headingTagLevel} pb={'1.5rem'}>
              {rightHeading4}
            </Heading3>
            <Text>{rightParagraph4}</Text>
          </Box>
        </SimpleGrid>

        {image && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              width={'100%'}
              maxH="500px"
              objectFit={'cover'}
              src={(image && urlForImage(image).url()) || ''}
              alt={alt || leftHeading}
            />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default Section2ColHeading2ColParagraph
