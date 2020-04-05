import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

import Social from "../social"


const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin-bottom: 4rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <h1 className="title">
          <div className="greetings">
            {frontmatter.greetings}
            <Img className="emoji" fluid={frontmatter.icon.childImageSharp.fluid} />
          </div>
          {frontmatter.title}
        </h1>
        <h2 className="subtitle">
          {frontmatter.subtitlePrefix}{" "}
          <Underlining color="tertiary" hoverColor="secondary" big>
            {frontmatter.subtitle}
          </Underlining>
        </h2>
        <div className="description">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Hero
