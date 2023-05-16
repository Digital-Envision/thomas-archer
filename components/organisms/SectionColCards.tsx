import { Box, Grid, GridItem } from '@chakra-ui/react'
import ArticleBlogCard, {
  ArticleBlogCardProps,
} from 'components/modules/ArticleBlogCard'
import { HeightVariants } from 'components/base/Divider'
import { HeadingTagSemantic } from 'components/base/Heading1'
import { useEffect } from 'react'

type Section2ColCardsProps = {
  marginTop: HeightVariants
  marginBottom: HeightVariants
  headingTagLevel: HeadingTagSemantic
  ListArticleBlogCards: ArticleBlogCardProps[]
}

const SectionColCards: React.FC<Section2ColCardsProps> = ({
  marginTop,
  marginBottom,
  headingTagLevel,
  ListArticleBlogCards,
}) => {
  return (
    <Box
      marginTop={marginTop}
      marginBottom={marginBottom}
      px={{ md: ListArticleBlogCards.length > 2 ? '0px' : '76px' }}
    >
      {ListArticleBlogCards.length > 0 && (
        <Grid
          templateColumns={{
            md: `repeat(${ListArticleBlogCards?.length}, 1fr)`,
          }}
          gap={5}
        >
          {ListArticleBlogCards.map((article, key) => {
            return (
              <GridItem key={key}>
                <ArticleBlogCard
                  {...article}
                  headingTagLevel={headingTagLevel}
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
