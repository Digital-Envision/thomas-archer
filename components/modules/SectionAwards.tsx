import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1, { HeadingTagSemantic } from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { getImageUrl } from 'lib/utils'
import Link from 'next/link'
import { LinksInterface } from 'components/organisms/Navbar'

type SectionAwardsProps = {
  heading: string
  headingTagLevel: HeadingTagSemantic
  paragraph: string
  onPressMore: () => void
  image?: any // sanity io image
  awards: { name: string; description: string }[]
  marginTop: HeightVariants
  marginBottom: HeightVariants
  button: LinksInterface
}

const SectionAwards: React.FC<SectionAwardsProps> = ({
  heading,
  headingTagLevel,
  paragraph,
  onPressMore,
  image,
  awards,
  marginTop,
  marginBottom,
  button,
}) => {
  return (
    <Flex
      mx={'auto'}
      direction={'column'}
      width={'w-full'}
      maxWidth={'1800px'}
      px={{ base: '1rem', md: '4rem' }}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Heading1 as={headingTagLevel}>{heading}</Heading1>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} direction={'column'} width={'100%'}>
          <Box pt={HeightVariants.less} />
          <Text>{paragraph}</Text>
          <Box pt={HeightVariants.less} />
          <Box>
            {button?.label && (
              <Link
                href={
                  button?.useInternal
                    ? button?.internalHref
                      ? `/${button?.internalHref}`
                      : '#'
                    : button?.externalHref
                    ? button?.externalHref
                    : '#'
                }
                target={button?.isExternal ? '_blank' : ''}
              >
                <Button variant={Variants.blackLine}>{button?.label}</Button>
              </Link>
            )}
          </Box>
          <Box
            pt={{
              base: HeightVariants.less,
              md: HeightVariants.none,
            }}
          />
        </Flex>
        <Box p={{ base: '1rem', md: '2rem' }} />
        <Flex flex={1} width={'w-full'}>
          <Flex direction={'row'}>
            {getImageUrl(image) && (
              <Image
                alt={heading}
                maxW={'90px'}
                maxH={'95px'}
                src={getImageUrl(image)}
              />
            )}
            <Box pr={3} />
            <VStack spacing={8} align="stretch">
              {awards?.map((o) => {
                return (
                  <Box>
                    <Text fontWeight="bold">{o?.name}</Text>
                    <Text>{o?.description}</Text>
                  </Box>
                )
              })}
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SectionAwards
