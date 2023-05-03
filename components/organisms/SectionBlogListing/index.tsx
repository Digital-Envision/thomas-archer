import {
  Box,
  Flex,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  HStack,
  StackDivider,
} from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useRouter } from 'next/router'
import Text from 'components/base/Text'
import BlogListingCard from 'components/modules/BlogListingCard'
import { BsChevronUp } from 'react-icons/bs'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { CollapseRadio } from './CollapseSort'

import { useState } from 'react'

type SectionBlogListingProps = {
  heading: string
  projects: ProjectListingCardProps[]
  blogs: any[]
  imageUrl: string // load image from url; test purpose
  image?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionBlogListing: React.FC<SectionBlogListingProps> = (props) => {
  const { blogs, marginTop, marginBottom } = props
  const { asPath } = useRouter()
  const [selectedSort, setSelectedSort] = useState<any>({})

  const handleFilterChange = (name, value) => {
    setSelectedSort((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Flex
      mx={'auto'}
      flex={1}
      overflow="hidden"
      justify="center"
      align={'center'}
      width={'100%'}
      maxWidth={'1440px'}
      px={'1rem'}
      marginTop={marginTop}
      marginBottom={marginBottom}
      direction="column"
    >
      <Box mt={'2rem'} />

      <Box alignSelf={'flex-start'} pl={['1rem', '1rem', '1rem', '3rem']}>
        <HStack
          align={'flex-start'}
          divider={<StackDivider borderColor="gray.400" />}
        >
          <Box minW={'70px'} pb={'1rem'}>
            <Text
              textAlign="center"
              textDecoration="underline"
              onClick={() => handleFilterChange('sortBy', 'Oldest')}
              cursor="pointer"
            >
              View All
            </Text>
          </Box>

          <Accordion
            allowToggle
            minW={'70px'}
            style={{ borderColor: null, borderWidth: 0 }}
          >
            <AccordionItem key={'sortBy'} border={0}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    style={{
                      padding: 0,
                      margin: 0,
                      borderWidth: 0,
                    }}
                    justifyContent="space-between"
                  >
                    <Text
                      fontWeight={isExpanded ? 'bold' : 'light'}
                      textDecoration={'underline'}
                    >
                      {'Sort By'}
                    </Text>
                    {isExpanded ? (
                      <BsChevronUp color="#D9D9D9" />
                    ) : (
                      <HiOutlineChevronDown color="#D9D9D9" />
                    )}
                  </AccordionButton>
                  <AccordionPanel p={0}>
                    <CollapseRadio
                      name={'sortBy'}
                      items={['Oldest', 'Newest']}
                      value={selectedSort['sortBy'] || ''}
                      onValueChange={(value) =>
                        handleFilterChange('sortBy', value)
                      }
                      selectedItem={selectedSort}
                      setSelectedItem={setSelectedSort}
                    />
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </HStack>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={{
            base: 2,
            md: 4,
            lg: '3vh',
          }}
        >
          {_.orderBy(
            _.toArray(blogs),
            ['heading'],
            selectedSort.sortBy === 'Newest' ? ['desc'] : ['asc']
          )?.map((prop, index) => {
            const { image, content, heading, slug } = prop

            return (
              <GridItem key={index} colSpan={1}>
                <BlogListingCard
                  image={image}
                  heading={heading}
                  content={content}
                  link={`${asPath}/blog/${slug?.current}`}
                />
              </GridItem>
            )
          })}
        </Grid>
      </Box>
      <Box pt="1rem" />
      <Button type="submit" variant={Variants.blackLine}>
        Load More Inspiration
      </Button>
    </Flex>
  )
}

export default SectionBlogListing
