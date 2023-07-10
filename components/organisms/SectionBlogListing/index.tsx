import {
  Box,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  HStack,
} from '@chakra-ui/react'
import Button, { Variants } from 'components/base/Button'
import { HeightVariants } from 'components/base/Divider'
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
import { ListingContainer, ListingGrid } from 'components/base/Listing'
import { blogImages } from 'lib/image.queries'

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
        customQuery: blogImages,
        page: 1,
        limit: 12,
        sortByField: 'createdDate',
        sortOrder:
          selectedSort.sortBy === 'Newest' || !selectedSort.sortBy
            ? 'desc'
            : 'asc',
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
      customQuery: blogImages,
      limit: 12,
      sortByField: 'createdDate',
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
    <ListingContainer {...props}>
      <Box mt={'2rem'} />
      <Box alignSelf={'flex-start'}>
        <HStack align={'flex-start'} minHeight={'76px'}>
          <Box minW={'70px'} borderRightWidth={1} borderColor="#000000">
            <Text
              textAlign="center"
              textDecoration="underline"
              onClick={() => setSelectedSort({})}
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
                <Box pb={isExpanded ? HeightVariants.less : '0px'}>
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
                </Box>
              )}
            </AccordionItem>
          </Accordion>
        </HStack>
      </Box>

      <ListingGrid>
        {_.toArray(blogs?.data)?.map((props, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <BlogListingCard
                {...props}
                link={`${asPath}/${props?.slug?.current}`}
              />
            </GridItem>
          )
        })}
      </ListingGrid>

      <Box mt={'80px'} />
      {blogs?.pagination?.isMore && (
        <Button
          type="submit"
          variant={Variants.blackLine}
          onClick={handleViewMore}
        >
          Load More Inspiration
        </Button>
      )}
    </ListingContainer>
  )
}

export default SectionBlogListing
