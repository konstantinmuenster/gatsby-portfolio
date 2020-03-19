import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ContentWrapper from "../../styles/ContentWrapper"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 4rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
    }
    .section-title {
      margin-bottom: 2rem;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text-content {
      width: 100%;
      max-width: 22rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 31.25rem;
      }
    }
    .about-author {
      width: 100%;
      max-width: 18rem;
      margin-top: 4rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      filter: grayscale(20%) contrast(1) brightness(90%);
      transition: all 0.3s ease-out;
      &:hover {
        filter: grayscale(50%) contrast(1) brightness(90%);
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
    }
  }
`

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <StyledSection id="about">
      <StyledContentWrapper>
        <div className="inner-wrapper">
          <h3 className="section-title">{frontmatter.title}</h3>
          <div className="text-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        <Img className="about-author" fluid={frontmatter.image.childImageSharp.fluid} />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default About
