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
import BlogListingCard, {
  BlogListingCardProps,
} from 'components/modules/BlogListingCard'
import { BsChevronUp } from 'react-icons/bs'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { CollapseRadio } from './CollapseSort'

import { useEffect, useState } from 'react'
import { getSanityData } from 'lib/sanity.client'

type SectionBlogListingProps = {
  heading: string
  blogs: BlogListingCardProps
  imageUrl: string // load image from url; test purpose
  image?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionBlogListing: React.FC<SectionBlogListingProps> = (props) => {
  const { blogs: _blogs, marginTop, marginBottom } = props
  const { asPath } = useRouter()
  const [selectedSort, setSelectedSort] = useState<any>({})
  const [blogs, setBlogs] = useState(_blogs)

  const handleFilterChange = (name, value) => {
    setSelectedSort((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    ;(async () => {
      // remote sorting
      const newBlogs = await getSanityData({
        type: 'blogs',
        condition: `&& slug.current != null`,
        page: 1,
        limit: 12,
        sortOrder: selectedSort.sortBy === 'Newest' ? 'desc' : 'asc',
      })

      setBlogs({
        pagination: newBlogs.pagination,
        data: newBlogs.data,
      })
    })()
  }, [selectedSort])

  const handleViewMore = async () => {
    const currentPagination = blogs?.pagination

    if (!currentPagination?.isMore) return

    const newBlogs = await getSanityData({
      type: 'blogs',
      condition: `&& slug.current != null`,
      page: currentPagination?.page + 1,
      limit: 12,
      sortOrder:
        selectedSort.sortBy === 'Newest' || !selectedSort.sortBy
          ? 'desc'
          : 'asc',
    })

    setBlogs((prev) => {
      return {
        pagination: { ...newBlogs.pagination },
        data: [...prev.data, ...newBlogs.data],
      }
    })
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
          // bgColor={'red.100'}
          // mb={'1rem'}
          // align={'center'}
          align={'flex-start'}
          divider={<StackDivider borderColor="gray.400" />}
          pb={'1rem'}
        >
          <Box minW={'70px'}>
            <Text
              textAlign="center"
              textDecoration="underline"
              onClick={() => {
                setSelectedSort({})
              }}
              // onClick={() => handleFilterChange('sortBy', 'Newest')}
              cursor="pointer"
            >
              View All
            </Text>
          </Box>

          <Accordion
            allowToggle
            minW={'70px'}
            style={{ borderColor: null, borderWidth: 0 }}
            // index={accordionIndex}
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
          {
            // _.orderBy(
            //   _.toArray(blogs?.data),
            //   ['heading'],
            //   selectedSort.sortBy === 'Newest' ? ['desc'] : ['asc']
            // )
            _.toArray(blogs?.data)?.map((prop, index) => {
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
            })
          }
        </Grid>
      </Box>
      <Box pt="1rem" />
      {blogs?.pagination?.isMore && (
        <Button
          type="submit"
          variant={Variants.blackLine}
          onClick={handleViewMore}
        >
          Load More Inspiration
        </Button>
      )}
    </Flex>
  )
}

export default SectionBlogListing
