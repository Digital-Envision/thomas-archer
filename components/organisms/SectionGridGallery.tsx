import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Img,
} from '@chakra-ui/react'
import { HeightVariants } from 'components/base/Divider'
import Text from 'components/base/Text'
import { ProjectListingCardProps } from 'components/modules/ProjectListingCard'
import _ from 'lodash'
import { useState } from 'react'
import Facebook from 'components/icon/Facebook'
import Instagram from 'components/icon/Instagram'
import Pinterest from 'components/icon/Pinterest'
import Twitter from 'components/icon/Twitter'
import ButtonIcon from 'components/base/ButtonIcon'
import Button, { Variants } from 'components/base/Button'

type SectionGridGalleryProps = {
  heading: string
  projects: ProjectListingCardProps[]
  imageUrl: string // load image from url; test purpose
  image?: any // sanity io image
  marginTop: HeightVariants
  marginBottom: HeightVariants
}

const localImages = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/VWcPlbHglYc',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/e6FMMambeO4',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 3,
    imageUrl: 'https://source.unsplash.com/klCiPmzUw0Y',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 4,
    imageUrl: 'https://source.unsplash.com/O0N9MF--hK4',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 5,
    imageUrl: 'https://source.unsplash.com/FV3GConVSss',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 6,
    imageUrl: 'https://source.unsplash.com/0ESjL-Nw22Y',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 7,
    imageUrl: 'https://source.unsplash.com/VSeVhmW4_JQ',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 8,
    imageUrl: 'https://source.unsplash.com/07aFaTf24Kg',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 9,
    imageUrl: 'https://source.unsplash.com/DqyYTM7pR2o',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
  {
    id: 10,
    imageUrl: 'https://source.unsplash.com/IdNOTjPeHrE',
    heading: 'The Gallery',
    subHeading: 'East Bentleigh',
    description: 'Landmark Custom Design',
    hashtags: ['#kitchen', '#modern'],
  },
]

const SectionGridGallery: React.FC<SectionGridGalleryProps> = ({
  heading,
  projects,
  marginTop,
  marginBottom,
}) => {
  const [selectedData, setSelectedData] = useState(null) // store the selected data in state

  const handlePrevious = () => {
    setSelectedData(
      _.nth(localImages, _.findIndex(localImages, { id: selectedData?.id }) - 1)
    )
  }

  const handleNext = () => {
    setSelectedData(
      _.nth(
        localImages,
        (_.findIndex(localImages, { id: selectedData?.id }) + 1) %
          localImages.length
      )
    )
  }

  const handleListItemClick = (data) => {
    setSelectedData(data)
  }

  const handleCloseModal = () => {
    setSelectedData(null) // reset the selected data to null when modal is closed
  }

  return (
    <Flex
      direction={'column'}
      alignItems="center"
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      <Box
        mx="auto"
        alignItems={'center'}
        justifyContent="center"
        maxW="1440px"
        w={'98vw'}
        sx={{ columnCount: [1, 1, 2, 3, 3], columnGap: '8px' }}
        overflow="hidden"
      >
        {localImages?.map((image) => (
          <Box onClick={() => handleListItemClick(image)}>
            <Img
              key={image?.imageUrl}
              w="100%"
              display="inline-block"
              src={image?.imageUrl}
              alt="Alt"
              objectFit={'contain'}
            />
          </Box>
        ))}
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
            <Img
              src={selectedData?.imageUrl}
              alt={selectedData?.imageUrl}
              maxW="100%"
            />
            <Flex
              justifyContent={'space-between'}
              direction={'row'}
              px="1.5rem"
              py="1.2rem"
            >
              <Box>
                <Text fontSize={'20px'} pb={'1rem'}>
                  {selectedData?.heading}
                </Text>
                <Text lineHeight={'1.4rem'}>{selectedData?.subHeading}</Text>
                <Text lineHeight={'1.4rem'}>{selectedData?.description}</Text>
                <Text lineHeight={'1.4rem'} color="gray.400">
                  {selectedData?.hashtags?.join(' ')}
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
