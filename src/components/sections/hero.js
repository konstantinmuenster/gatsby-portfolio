import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Theme from "../../styles/Theme"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

import Social from "../social"

const { colors, breakpoints } = Theme

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${colors.background};
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
    @media (min-width: ${breakpoints.lg}) {
      margin-bottom: 4rem;
    }
  }
`

const StyledGreetings = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledEmoji = styled(Img)`
  margin-left: 0.75rem;
  width: 2.2rem;
  height: 2.2rem;
  @media (min-width: ${breakpoints.md}) {
    margin-left: 1rem;
    width: 3rem;
    height: 3rem;
  }
`

const StyledH1 = styled.h1`
  margin-bottom: 1.5rem;
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
  }
`

const StyledH2 = styled.h2`
  margin-top: -0.75rem;
`

const StyledDescription = styled.div`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <StyledH1>
          <StyledGreetings>
            {frontmatter.greetings}
            <StyledEmoji fluid={frontmatter.icon.childImageSharp.fluid} />
          </StyledGreetings>
          {frontmatter.title}
        </StyledH1>
        <StyledH2>
          {frontmatter.subtitlePrefix}{" "}
          <Underlining color={colors.tertiary} hoverColor={colors.secondary} big>
            {frontmatter.subtitle}
          </Underlining>
        </StyledH2>
        <StyledDescription>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledDescription>
        <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Hero
