// dont add comma at the last list
const componentWithImages = `
  'Section2ColHeading2ColParagraph',
  'Section2ColImageTextFeaturedImageLeftRight',
  'SectionAwards',
  'SectionBookingForm',
  'SectionHeadingParagraphCTAImage',
  'SectionHeroImageDefault',
  'SectionImageAwards',
  'SectionImageHeadingCTA',
  'Section2ColImageTextMosaicType2',
  'SectionImageTextMosaicType1',
  'SectionFeaturedImage',
  'Carousel',
  'SectionGalleryScroll',
  'SectionProjectScroll',
  'SectionGridGallery',
  'SectionInclusions',
  'SectionHeroImageBig',
  'SectionHeroVideoBig',
  'SectionVideoParagraphCTA',
  'SectionColCards',
  'SectionBlog'
`

// dont add comma at the last list
export const componentsImagesQuery = `
  _type in [${componentWithImages}] => {
    image != null => {
      "imageMetaData": image.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    leftImage != null => {
      "leftImageMetaData": leftImage.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    rightImage != null => {
      "rightImageMetaData": rightImage.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    mobileImage != null => {
      "mobileImageMetaData": mobileImage.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    desktopImage != null => {
      "desktopImageMetaData": desktopImage.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    bannerImage != null => {
      "bannerImageMetaData": bannerImage.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    cover != null => {
      "coverMetaData": cover.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    video != null => {
      video {
        ...,
        cover != null => {
          "coverMetaData": cover.asset->{
            metadata {
              blurHash,
              lqip
            }
          }
        }
      }
    },
    images != null => {
      images[] {
        ...,
        _type == "img" => {
          "imageMetaData": image.asset->{
            metadata {
              blurHash,
              lqip
            }
          }
        }
      }
    },
    listImages != null => {
      listImages[] {
        ...,
        _type == "images" => {
          "imageMetaData": image.asset->{
            metadata {
              blurHash,
              lqip
            }
          }
        }
      }
    },
    ListArticleBlogCards != null => {
      ListArticleBlogCards[] {
        ...,
        "imageMetaData": image.asset->{
          metadata {
            blurHash,
            lqip
          }
        }
      }
    },
    items != null => {
      items[] {
        ...,
        _type == "item" => {
          image != null => {
            "imageMetaData": image.asset->{
              metadata {
                blurHash,
                lqip
              }
            }
          }
        }
      }
    }
  }
`

export const facadesImage = `
   _type == 'facades' => {
      ...,
      listImages[]{
        ...,
        "imageMetaData": image.asset->{
            metadata {
              blurHash,
              lqip
            }
        },
      }
   }
`

export const floorPlanImages = `
   _type == 'floors' => {
    bannerImage {
      ...,
      "imageMetaData": image.asset->{
         metadata {
           blurHash,
           lqip
         }
       },
     },
     floorPlan{
       ...,
       listSizes[]{
         ...,
         listImages[]{
           ...,
           "imageMetaData": image.asset->{
              metadata {
                blurHash,
                lqip
              }
           },
         }
       }
     }
   }
`

export const projectImages = `
  _type == "projects" => {
    SectionGalleryScroll != null => {
      SectionGalleryScroll {
        ...,
        listImages[]{
          ...,
          "imageMetaData": image.asset->{
            metadata {
              blurHash,
              lqip
            }
          }
        }
      }
    },
    award != null => {
      award {
        ...,
        "awardLogoMetaData": awardLogo.asset->{
          metadata {
            blurHash,
            lqip
          }
        },
        "awardImageMetaData": awardImage.asset->{
          metadata {
            blurHash,
            lqip
          }
        }
      }
    },
    image != null => {
      "imageMetaData": image.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    customPageSection[] {
      ...,
      ${componentsImagesQuery}
    }
  }
`

export const blogImages = `
    image != null => {
      "imageMetaData": image.asset->{
        metadata {
          blurHash,
          lqip
        }
      }
    },
    page != null => {
      page {
        ...,
        SectionGalleryScroll != null => {
          SectionGalleryScroll {
            ...,
            listImages != null => {
              listImages[] {
                ...,
                image != null => {
                  "imageMetaData": image.asset->{
                    metadata {
                      blurHash,
                      lqip
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    content != null => {
      content[] {
        ...,
        children != null => {
          _type == "image" => {
            "imageMetaData": image.asset->{
              metadata {
                blurHash,
                lqip
              }
            }
          }
        },
        _type == "image" => {
          "imageMetaData": asset->{
            metadata {
              blurHash,
              lqip
            }
          }
        }
      }
    }
`
