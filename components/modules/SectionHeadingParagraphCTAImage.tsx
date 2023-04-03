import { Box, Flex, Image } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import Divider, { HeightVariants } from 'components/base/Divider'

type SectionHeadingParagraphCTAImageProps = {
  heading: string
  paragraph: string
  imageUrl: string
}

const SectionHeadingParagraphCTAImage: React.FC<
  SectionHeadingParagraphCTAImageProps
> = ({ heading, paragraph, imageUrl }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      width={'w-full'}
      maxWidth={'1440px'}
      px={'5rem'}
    >
      <Flex flex={1} direction={'row'} align={'center'}>
        <Flex flex={1} direction={'column'} justify={'center'} align={'center'}>
          <Heading1>{heading}</Heading1>
          <Flex flex={1} direction={'row'} pt={2} pr={2}>
            <Box pt={2} pr={2}>
              <Dash width="50px" height="1px" />
            </Box>

            <Box>
              <Text>{paragraph}</Text>
              <Box pt={5}>
                <Button variant={Variants.blackLine}>
                  {'Why Thomas Archer'}
                </Button>
              </Box>
              <Divider
                variant={{
                  base: HeightVariants.less,
                  md: HeightVariants.none,
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex flex={1.2} justify={'center'}>
        <Image objectFit={'cover'} src={imageUrl} alt={heading} />
      </Flex>
    </Flex>
  )
}

export default SectionHeadingParagraphCTAImage
