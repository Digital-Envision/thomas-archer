import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import SectionHeadingParagraphCTA from 'components/modules/SectionHeadingParagraphCTA'
import { Box } from '@chakra-ui/react'
import Text from 'components/base/Text'
import Image from 'next/image'
import ScrollBox from 'components/modules/ScrollBox'
import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import { useStoreLink } from 'lib/store/link'

const ProjectScroll = ({
  projects,
  heading,
  headingTagLevel,
  marginBottom,
  marginTop,
  content,
  button,
  selectedProjects,
  isSelectedProject,
  projectPage,
}) => {
  const projectRef = useStoreLink(
    (state) => state?.detailsPage?.projects?.parentPage?._ref
  )
  const projectParentPage = useStoreLink(
    (state) => state?.pages[projectRef]?.url
  )

  const [mediaWidth, setMediaWidth] = useState(0)
  const [listProjects, setListProjects] = useState([])

  useEffect(() => {
    if (projectPage) {
      setListProjects(projects?.data)
    } else if (!projectPage && isSelectedProject) {
      setListProjects(selectedProjects)
    } else {
      setListProjects(projects?.data)
    }
  }, [selectedProjects])

  useEffect(() => {
    const handleResize = () => {
      setMediaWidth(window.innerWidth)
    }

    // Initial media width on component mount
    setMediaWidth(window.innerWidth)

    // Event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box mt={marginTop} mb={marginBottom}>
      <SectionHeadingParagraphCTA
        isOffset={false}
        heading={heading}
        headingTagLevel={headingTagLevel}
        content={content}
        button={button}
      />
      {!_.isEmpty(listProjects) && (
        <ScrollBox
          widthImage={mediaWidth > 767 ? 362 : 277}
          padding={mediaWidth > 767 ? 64 : 18}
          mt={'66px'}
        >
          {/* spacing */}
          <Box>
            <Box
              transition={'all .6s'}
              height={{ base: '373px', md: '500px' }}
              _hover={{
                userSelect: 'none',
              }}
            >
              <Box
                width={{
                  base: '18px',
                  md: '64px',
                }}
                height={'100%'}
                bg={'transparent'}
              ></Box>
            </Box>
          </Box>
          {/* sort projects on groq level by orderRank */}
          {listProjects?.map((project, key) => {
            return (
              <Box>
                <Box
                  key={key}
                  height={{ base: '373px', md: '500px' }}
                  _hover={{
                    userSelect: 'none',
                  }}
                >
                  <Box
                    width={{ base: '277px', md: '362px' }}
                    height={'100%'}
                    position={'relative'}
                  >
                    {project?.image && (
                      <Link
                        href={
                          project?.slug?.current && projectParentPage
                            ? `/${projectParentPage}/${project?.slug?.current}`
                            : '#'
                        }
                      >
                        <Image
                          src={
                            (project?.image &&
                              urlForImage(project?.image).url()) ||
                            ''
                          }
                          alt={project?.alt || project?.heading}
                          fill
                          objectFit="cover"
                        />
                      </Link>
                    )}
                  </Box>
                </Box>
                {project?.heading && (
                  <Link
                    href={
                      project?.slug?.current && projectParentPage
                        ? `/${projectParentPage}/${project?.slug?.current}`
                        : '#'
                    }
                  >
                    <Text mt={4} textDecor={'underline'}>
                      {project?.heading}
                    </Text>
                  </Link>
                )}
              </Box>
            )
          })}
          {/* spacing */}
          <Box>
            <Box
              transition={'all .6s'}
              height={{ base: '373px', md: '500px' }}
              _hover={{
                userSelect: 'none',
              }}
            >
              <Box
                width={{
                  base: '18px',
                  md: '64px',
                }}
                height={'100%'}
                bg={'transparent'}
              ></Box>
            </Box>
          </Box>
        </ScrollBox>
      )}
    </Box>
  )
}

export default ProjectScroll
