import { Box, Flex, HStack } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Dash from 'components/base/Dash'
import { HeightVariants } from 'components/base/Divider'
import Link, { LinksInterface } from 'components/base/Link'

type SectionHeadingParagraphCTAProps = {
  heading: string
  headingTagLevel?: HeadingTagSemantic
  paragraph: string
  isOffset?: boolean
  showButton?: boolean
  marginTop?: HeightVariants
  marginBottom?: HeightVariants
  button?: LinksInterface
  button2?: LinksInterface
  isEmbed?: boolean
  customButton?: any // contain customized button, currenly used on project detail
}

const SectionHeadingParagraphCTA: React.FC<SectionHeadingParagraphCTAProps> = ({
  heading,
  headingTagLevel,
  paragraph,
  isOffset,
  showButton = true,
  marginTop,
  marginBottom,
  button,
  button2,
  isEmbed,
  customButton,
}) => {
  const body = (
    <>
      <Flex direction={'row'} flex={1}>
        {heading && (
          <Flex flex={1}>
            <Heading1 as={headingTagLevel}>{heading}</Heading1>
          </Flex>
        )}
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
            {paragraph && <Dash width="50px" height="1px" />}
          </Box>
          <Flex direction={'column'}>
            {paragraph && <Text>{paragraph}</Text>}
            <Box pt={5}>
              {customButton ? (
                <Button onClick={customButton.fn} variant={Variants.blackLine}>
                  {customButton?.label}
                </Button>
              ) : (
                showButton && (
                  <HStack spacing={'1rem'} flexDirection="row">
                    {button?.label && (
                      <Link link={button}>
                        <Button variant={Variants.blackLine}>
                          {button?.label}
                        </Button>
                      </Link>
                    )}
                    {button2?.label && (
                      <Link link={button2}>
                        <Button variant={Variants.blackLine}>
                          {button2?.label}
                        </Button>
                      </Link>
                    )}
                  </HStack>
                )
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  )

  // component is reused on Section - Blog
  if (isEmbed) {
    return <>{body}</>
  }

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
      {body}
    </Flex>
  )
}

export default SectionHeadingParagraphCTA
