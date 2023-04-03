import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import Text from 'components/base/Text'
import DropdownItem from 'components/modules/DropdownItem'
import ArticleBlogCard from 'components/modules/ArticleBlogCard'
import PortfolioCard from 'components/modules/PortfolioCard'
import PortfolioListingCard from 'components/modules/PortfolioListingCard'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import SectionTextFeatured from 'components/modules/SectionTextFeatured'
import SectionHeadingParagraphCTAImage from 'components/modules/SectionHeadingParagraphCTAImage'
import SectionHeadingParagraphContactForm from 'components/modules/SectionHeadingParagraphContactForm'
import SectionAwards from 'components/modules/SectionAwards'
import SectionImageAwards from 'components/modules/SectionImageAwards'
import SectionImageTextMosaicType1 from 'components/modules/SectionImageTextMosaicType1'

/**
 *
 *
 * Try components here.
 * and don't push any update from here.
 *
 *
 * ex:
 * <Flex
      alignItems={'center'}
      justifyContent={'center'}
      bg={'red.700'}
      h="100vh"
    >
    <Button>try button</Button>
    </Flex>
 *
 *
 */

const Component = () => {
  return (
    <Flex direction={'column'} align={'center'}>
      {/* <DropdownItem href="https://www.google.com" isExternal>
        Why Thomas Archer
      </DropdownItem> */}

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196406133">
          ArticleBlogCard
        </Link>
        <Box borderWidth={1}>
          <ArticleBlogCard
            imageUrl="https://via.placeholder.com/500x500"
            heading="Article Card"
            createdAt={'01/01/2023'}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla mauris eget fringilla imperdiet. Sed dictum ipsum velit, et vestibulum leo consectetur vel."
            buttonText="Find Out More"
            buttonOnClick={() => alert('Button clicked!')}
          />
        </Box>
      </Box>
      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196406133">
          PortfolioCard
        </Link>
        <Box borderWidth={1}>
          <PortfolioCard
            imageUrl="https://via.placeholder.com/362x500"
            linkUrl="https://www.google.com/"
            label="test"
          />
        </Box>
      </Box>
      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196406133">
          PortfolioListingCard
        </Link>
        <Box borderWidth={1}>
          <PortfolioListingCard
            imageUrl="https://via.placeholder.com/400x1000/"
            href="https://www.google.com/"
            heading="House Name"
            subHeading="Suburb Name"
            description="Landmark Custom Design"
          />
        </Box>
      </Box>
      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196406133">
          Section / Text Featured
        </Link>
        <Box borderWidth={1}>
          <SectionTextFeatured
            leftHeading="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,"
            rightHeading="Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus.”"
            postedBy="Frank Tarulli, Director Thomas Archer"
          />
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992670/pulses/4196334118">
          Section / 2 Col - Heading - Paragraph, CTA
        </Link>
        <Box borderWidth={1}>
          <SectionHeadingParagraphCTA
            isOffset={false}
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat,
          lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum
          arcu ipsum vel risus."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
          et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
          efficitur nunc in. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla
          dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis
          orci viverra, efficitur nunc in. Sed feugiat, lectus et viverra
          ullamcorper, nulla dui ullamcorper quam."
          />
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196454569">
          Section / 2 Col - Heading, Paragraph - Contact Form
        </Link>
        <Box borderWidth={1}>
          <SectionHeadingParagraphContactForm
            heading={'We’re here to help'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis orci viverra.'
            }
            tnc={
              'By submitting this form you are consenting to receive marketing communications from Thomas Archer in future, on the understanding that you have read and agree to our Privacy and Data Collection Statement and that you can opt-out at any time.'
            }
            onSubmit={(data) => console.log('submitData', data)}
          />
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4219942964">
          Section / 2 Col - Heading, Paragraph, CTA - Image
        </Link>
        <Box borderWidth={1}>
          <SectionHeadingParagraphCTAImage
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
          et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
          efficitur nunc in. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla
          dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis
          orci viverra, efficitur nunc in. Sed feugiat, lectus et viverra
          ullamcorper, nulla dui ullamcorper quam."
            imageUrl="https://via.placeholder.com/727x455/"
          />
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196334118">
          Section / 2 Col - Heading, Paragraph, CTA - Image
        </Link>
        <Box borderWidth={1}>
          <SectionHeadingParagraphContactForm
            heading={'We’re here to help'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam, et dictum arcu ipsum vel risus. Curabitur quis orci viverra.'
            }
            tnc={
              'By submitting this form you are consenting to receive marketing communications from Thomas Archer in future, on the understanding that you have read and agree to our Privacy and Data Collection Statement and that you can opt-out at any time.'
            }
            onSubmit={(data) => console.log('submitData', data)}
          />
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4196454806">
          Section / Awards
        </Link>
        <Box borderWidth={1}>
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
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4219884504">
          Section / Image Awards
        </Link>
        <Box borderWidth={1}>
          <SectionImageAwards
            imageUrl="https://via.placeholder.com/1296x730/"
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
        </Box>
      </Box>

      <Box py={8}>
        <Link href="https://relabstudios.monday.com/boards/3906992662/pulses/4219884504">
          Section /2 Col - Image Text Mosaic Type 1
        </Link>
        <Box borderWidth={1}>
          <SectionImageTextMosaicType1
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          feugiat, lectus et viverra ullamcorper, nulla dui ullamcorper quam,
          et dictum arcu ipsum vel risus. Curabitur quis orci viverra,
          efficitur nunc in."
            rightImageUrl="https://via.placeholder.com/727x455/"
            leftImageUrl="https://via.placeholder.com/500x500/"
          />
        </Box>
      </Box>
    </Flex>
  )
}

export default Component
