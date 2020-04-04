import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import VisibilitySensor from "react-visibility-sensor"
import { motion } from "framer-motion"

import { useOnScreen } from "../../hooks"
import config from "../../config"

import { fade, fadeUp } from "../../styles/Animations"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Button from "../../styles/Button"

import IconGithub from "../icons/github"

const { socialMedia } = config

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .projects {
      display: flex;
      flex-direction: row;
      margin-top: -2.5rem;
      padding: 2.5rem 2.5rem;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: column;
        margin-top: 0;
        padding: 0;
        overflow: visible;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid white;
          background-color: rgba(0, 0, 0, 0.5);
        }

        &::-webkit-scrollbar-track {
          background-color: #fff;
          border-radius: 8px;
        }
      }
    }
    .counter {
      position: absolute;
      top: 2.2rem;
      right: 2.5rem;
      font-size: 1.125rem;
      font-weight: 500;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        display: none;
      }
    }
    .github-btn {
      margin: -6rem auto 2rem auto;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 0 auto;
      }
    }
  }
`

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
  flex-shrink: 0;
  padding-right: 2.5rem;
  max-width: 20rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 25rem;
    padding-right: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-shrink: 1;
    max-width: 62.5rem;
    padding-right: 0;
    /* Positioning of image and details should vary */
    flex-direction: ${({ position }) =>
      position % 2 !== 0 ? "row" : "row-reverse"};
  }
  .details {
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    .category {
      font-size: 0.875rem;
      line-height: 1rem;
      text-transform: uppercase;
      letter-spacing: +1px;
    }
    .title {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      line-height: 1.2rem;
      span {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
  .screenshot {
    width: 100%;
    max-width: 25rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-out;
    &:hover {
      transform: translate3d(0px, -0.125rem, 0px);
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
    }
  }
`

const Projects = ({ content }) => {
  const sectionDetails = content[0].node
  const projects = content.slice(1, content.length)

  // store visibility of projects in state
  const [onScreen, setOnScreen] = useState({})

  // visibleProject is needed to show which project is currently
  // being viewed in the horizontal slider on mobile and tablet
  const [visibleProject, setVisibleProject] = useState(1)

  // set visibility for all projects initially to false
  useEffect(() => {
    let initial = {}
    projects.forEach(project => { initial[project.node.frontmatter.position] = false })
    setOnScreen(initial)
  }, [])

  // set first project as the visible one after component did mount
  useEffect(() => setVisibleProject(1), [])

  const titleRef = useRef()
  const titleOnScreen = useOnScreen(titleRef)
  const buttonRef = useRef()
  const buttonOnScreen = useOnScreen(buttonRef)

  // if project gets into viewport, set its visibility to true
  const handleOnScreen = el => {
    if (!onScreen[el]) {
      const updatedOnScreen = { ...onScreen }
      updatedOnScreen[el] = true
      setOnScreen(updatedOnScreen)
    }
  }

  return (
    <StyledSection id="projects">
      <StyledContentWrapper>
        <motion.div ref={titleRef} initial={{ opacity: 0 }} animate={fade(titleOnScreen)}>
          <h3 className="section-title">{sectionDetails.frontmatter.title}</h3>
          <div className="counter">{visibleProject} / {projects.length}</div>
        </motion.div>
        <div className="projects">
          {projects.map(project => {
            const { body, frontmatter } = project.node
            return (
              <VisibilitySensor
                key={frontmatter.position}
                onChange={() => handleOnScreen(frontmatter.position)}
                partialVisibility={true}
                minTopValue={100}
              >
                <StyledProject
                  position={frontmatter.position}
                  initial={{ opacity: 0 }}
                  animate={fadeUp(onScreen[frontmatter.position])}
                >
                  <div className="details">
                    <div className="category">
                      {frontmatter.emoji} {frontmatter.category}
                    </div>
                    <div className="title">{frontmatter.title}</div>
                    <MDXRenderer>{body}</MDXRenderer>
                    <div className="tags">
                      {frontmatter.tags.map(tag => (
                        <Underlining key={tag} color="secondary" hoverColor="secondary">
                          {tag}
                        </Underlining>
                      ))}
                    </div>
                  </div>
                  {/* If image in viewport changes, update state accordingly */}
                  <VisibilitySensor onChange={() => setVisibleProject(frontmatter.position)}>
                    <Img className="screenshot" fluid={frontmatter.screenshot.childImageSharp.fluid} />
                  </VisibilitySensor>
                </StyledProject>
              </VisibilitySensor>
            )
          })}
        </div>
        <motion.a
          ref={buttonRef}
          initial={{ opacity: 0 }}
          animate={fade(buttonOnScreen)}
          className="github-btn"
          href={socialMedia.filter(profile => profile.name === "Github")[0].url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="External Link"
        >
          <Button
            type="button"
            textAlign="center"
            color="primary"
            center
          >
            <IconGithub color="#ffffff" /> See More On Github
          </Button>
        </motion.a>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Projects
