import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import Text from '../base/Text'
import Heading1 from 'components/base/Heading1'
import Button, { Variants } from 'components/base/Button'
import Divider, { HeightVariants } from 'components/base/Divider'

type SectionAwardsProps = {
  heading: string
  paragraph: string
  onPressMore: () => void
  imageUrl: string
  awards: { label: string; value: string }[]
}

/**
 * usage:
    <SectionAwards
      heading="Accolades"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam."
      onPressMore={() => alert('find out more')}
      imageUrl="/images/logo/HIA-logo.png"
      awards={[
        {
          label: 'Finalist 2021',
          value: 'HIA Eastern Victorian Custom Build Home $750,001 - $1M',
        },
        {
          label: 'Winner 2020',
          value: 'HIA Australian Project Home Winner',
        },
        {
          label: 'Winner 2019',
          value: 'HIA Victorian Project Home',
        },
        {
          label: 'Winner 2019',
          value: 'HIA Victorian Project Home over $500,001',
        },
        {
          label: 'Winner 2018',
          value: 'HIA Victorian Project Home over $400,001',
        },
      ]}
    />
 */

const SectionAwards: React.FC<SectionAwardsProps> = ({
  heading,
  paragraph,
  onPressMore,
  imageUrl,
  awards,
}) => {
  return (
    // @ts-ignore: 2590
    <Flex
      direction={'column'}
      width={'w-full'}
      maxWidth={'1440px'}
      borderWidth={1}
    >
      <Heading1>{heading}</Heading1>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} direction={'column'} width={'100%'} pr={8}>
          <Divider variant={HeightVariants.less} />
          <Text>{paragraph}</Text>
          <Divider variant={HeightVariants.less} />
          <Box>
            <Button variant={Variants.blackLine} onClick={onPressMore}>
              {'Find Out More'}
            </Button>
          </Box>
          <Divider
            variant={{
              base: HeightVariants.less,
              md: HeightVariants.none,
            }}
          />
        </Flex>

        <Flex flex={1} width={'w-full'}>
          <Flex direction={'row'}>
            <Image src={imageUrl} alt={heading} maxW={'90px'} maxH={'95px'} />
            <Box pr={3} />
            <VStack spacing={8} align="stretch">
              {awards.map((o) => {
                return (
                  <Box>
                    <Text fontWeight="bold">{o?.label}</Text>
                    <Text>{o?.value}</Text>
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
