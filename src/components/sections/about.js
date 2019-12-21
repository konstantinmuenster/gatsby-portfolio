import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Theme from "../../styles/Theme"
import ContentWrapper from "../../styles/ContentWrapper"

const { colors, borderRadius, breakpoints } = Theme

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${colors.background};
  margin-top: 4rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const StyledSectionTitle = styled.h3`
  margin-bottom: 2rem;
`

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledText = styled.div`
  width: 100%;
  max-width: 22rem;
  @media (min-width: ${breakpoints.lg}) {
    max-width: 31.25rem;
  }
`

const StyledImg = styled(Img)`
  width: 100%;
  max-width: 18rem;
  margin-top: 4rem;
  border-radius: ${borderRadius};
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
  filter: grayscale(20%) contrast(1) brightness(90%);
  transition: all 0.3s ease-out;
  &:hover {
    filter: grayscale(50%) contrast(1) brightness(90%);
    transform: translate3d(0px, -0.125rem, 0px);
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
  }
`

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <StyledSection id="about">
      <StyledContentWrapper>
        <StyledInnerWrapper>
          <StyledSectionTitle>{frontmatter.title}</StyledSectionTitle>
          <StyledText>
            <MDXRenderer>{body}</MDXRenderer>
          </StyledText>
        </StyledInnerWrapper>
        <StyledImg fluid={frontmatter.image.childImageSharp.fluid} />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default About
