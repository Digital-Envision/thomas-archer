import { Box, Grid, GridItem } from '@chakra-ui/react'
import ArticleBlogCard, {
  ArticleBlogCardProps,
} from 'components/modules/ArticleBlogCard'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'

type Section2ColCardsProps = {
  marginTop?: HeightVariants
  marginBottom?: HeightVariants
  headingTagLevel?: HeadingTagSemantic
  ListArticleBlogCards: ArticleBlogCardProps[]
  anchor?: string
}

const SectionColCards: React.FC<Section2ColCardsProps> = ({
  marginTop,
  marginBottom,
  headingTagLevel,
  ListArticleBlogCards,
  anchor,
}) => {
  // TODO ADJUST TO JOINING THE _REF to return the actual data

  return (
    <Box
      marginTop={marginTop}
      marginBottom={marginBottom}
      px={{ md: ListArticleBlogCards.length > 2 ? '0px' : '76px' }}
      id={anchor}
    >
      {ListArticleBlogCards.length > 0 && (
        <Grid
          templateColumns={{
            md: `${
              ListArticleBlogCards.length > 2
                ? `repeat(${ListArticleBlogCards?.length}, 1fr)`
                : 'repeat(2, 1fr)'
            }`,
          }}
          gap={{ base: 14, md: 5 }}
        >
          {ListArticleBlogCards.map((article, key) => {
            return (
              <GridItem key={key}>
                <ArticleBlogCard
                  {...article}
                  headingTagLevel={headingTagLevel}
                  parentLength={ListArticleBlogCards.length}
                />
              </GridItem>
            )
          })}
        </Grid>
      )}
    </Box>
  )
}

export default SectionColCards
