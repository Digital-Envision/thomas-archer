import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  StackDivider,
  Image,
} from '@chakra-ui/react'
import { HeightVariants } from 'components/base/Divider'
import Text from 'components/base/Text'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import Facebook from 'components/icon/Facebook'
import Instagram from 'components/icon/Instagram'
import Pinterest from 'components/icon/Pinterest'
import Twitter from 'components/icon/Twitter'
import ButtonIcon from 'components/base/ButtonIcon'
import Button, { Variants } from 'components/base/Button'
import { urlForImage } from 'lib/sanity.image'
import { BsChevronUp } from 'react-icons/bs'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import { Filter } from 'components/base/Filter'
import { SanityFiles } from 'utils/interfaces'

export interface SectionGridGalleryInterface {
  _key: string
  _type: 'SectionGridGallery'
  filters: {
    _key: string
    _type: 'filter'
    filterItems: string[]
    name: string
  }[]
  items: {
    _key: string
    _type: 'item'
    image: {
      _type: 'image'
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    location: string
    name: string
    product: string
    tags?: string[]
  }[]
  marginBottom?: string
  marginTop?: string
}

type SectionGridGalleryProps = {
  heading: string
  filters: SectionGridGalleryInterface['filters']
  items: SectionGridGalleryInterface['items']
  image?: SanityFiles
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const SectionGridGallery: React.FC<SectionGridGalleryProps> = ({
  items,
  filters,
  marginTop,
  marginBottom,
}) => {
  const [filteredData, setFilteredData] = useState<
    SectionGridGalleryInterface['items']
  >([])
  const [selectedData, setSelectedData] =
    useState<Partial<SectionGridGalleryInterface['items']>[0]>(null) // data for lightbox modal
  const [selectedFilters, setSelectedFilters] = useState<any>({})

  useEffect(() => {
    const filtered = _.filter(items, ({ tags }) => {
      if (_.isEmpty(selectedFilters)) return true
      const isMatches = _.isEmpty(_.difference(_.values(selectedFilters), tags))

      if (isMatches) return true
    })

    setFilteredData(filtered)
  }, [selectedFilters])

  const handlePrevious = () => {
    setSelectedData(
      _.nth(items, _.findIndex(items, { _key: selectedData?._key }) - 1)
    )
  }

  const handleNext = () => {
    setSelectedData(
      _.nth(
        items,
        (_.findIndex(items, { _key: selectedData?._key }) + 1) % items.length
      )
    )
  }

  const handleListItemClick = (data) => {
    setSelectedData(data)
  }

  const handleCloseModal = () => {
    setSelectedData(null) // reset the selected data to null when modal is closed
  }

  const handleFilterChange = (name, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Flex
      direction={'column'}
      alignItems="center"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box>
        <Box alignSelf={'flex-start'} pl={['1rem', '1rem', '1rem', '3rem']}>
          <HStack
            align={'flex-start'}
            divider={<StackDivider borderColor="gray.400" />}
          >
            <Box minW={'70px'}>
              <Text
                textAlign="center"
                textDecoration="underline"
                onClick={() => setSelectedFilters({})}
                cursor="pointer"
              >
                View All
              </Text>
            </Box>

            {_.map(filters, (filter) => (
              <Accordion
                allowToggle
                minW={'70px'}
                style={{ borderColor: null, borderWidth: 0 }}
              >
                <AccordionItem key={filter._key} border={0}>
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
                          {_.capitalize(filter.name)}
                        </Text>
                        {isExpanded ? (
                          <BsChevronUp color="#D9D9D9" />
                        ) : (
                          <HiOutlineChevronDown color="#D9D9D9" />
                        )}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <Filter
                          filterName={filter.name}
                          filterItems={filter.filterItems}
                          value={selectedFilters[filter.name] || ''}
                          onValueChange={(value) =>
                            handleFilterChange(filter.name, value)
                          }
                          selectedFilters={selectedFilters}
                          setSelectedFilters={setSelectedFilters}
                        />
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            ))}
          </HStack>
        </Box>

        <Box pt={'1rem'} />

        <Box
          mx="auto"
          alignItems={'center'}
          justifyContent="center"
          maxW="1440px"
          w={'98vw'}
          sx={{ columnCount: [1, 1, 2, 3, 3], columnGap: '8px' }}
          overflow="hidden"
        >
          {filteredData?.map((item) => (
            <Box onClick={() => handleListItemClick(item)}>
              <Image
                key={urlForImage(item.image)?.url()}
                w="100%"
                display="inline-block"
                src={urlForImage(item.image)?.url()}
                alt={urlForImage(item.image)?.url()}
                objectFit={'contain'}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box pt="1rem" />
      <Box>
        <Button type="submit" variant={Variants.blackLine}>
          Load More Inspiration
        </Button>
      </Box>

      <Modal
        isOpen={selectedData !== null}
        onClose={handleCloseModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <Box bgColor={'blue.100'}>
            <ModalCloseButton />
          </Box>
          <ModalBody p={0} m={0}>
            {selectedData?.image && (
              <Image
                src={urlForImage(selectedData?.image)?.url()}
                alt={urlForImage(selectedData?.image)?.url()}
                maxW="100%"
              />
            )}
            <Flex
              justifyContent={'space-between'}
              direction={'row'}
              px="1.5rem"
              py="1.2rem"
            >
              <Box>
                <Text fontSize={'20px'} pb={'1rem'}>
                  {selectedData?.name}
                </Text>
                <Text lineHeight={'1.4rem'}>{selectedData?.location}</Text>
                <Text lineHeight={'1.4rem'}>{selectedData?.product}</Text>
                <Text lineHeight={'1.4rem'} color="gray.400">
                  {selectedData?.tags?.join(' ')}
                </Text>
              </Box>

              <Box>
                <Text textAlign={'right'}>Share this house</Text>

                <Flex
                  alignItems={'center'}
                  justifyContent="center"
                  direction={'row'}
                >
                  <ButtonIcon size="xs" aria-label="instagram">
                    <Instagram />
                  </ButtonIcon>
                  <ButtonIcon size="xs" aria-label="facebook">
                    <Facebook />
                  </ButtonIcon>
                  <ButtonIcon size="xs" aria-label="pinterest">
                    <Pinterest />
                  </ButtonIcon>
                  <ButtonIcon size="xs" aria-label="twitter">
                    <Twitter />
                  </ButtonIcon>
                </Flex>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={'space-between'}>
            <Text
              onClick={() => {
                handlePrevious()
              }}
              cursor="pointer"
              textDecor={'underline'}
            >
              Previous
            </Text>
            <Text
              onClick={() => {
                handleNext()
              }}
              cursor="pointer"
              textDecor={'underline'}
            >
              Next
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default SectionGridGallery
