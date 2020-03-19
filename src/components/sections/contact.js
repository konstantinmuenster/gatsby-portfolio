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
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    // Don't stretch container over the full page width
    max-width: 45rem;
    height: 100%;
    display: inline-block;
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
    .profile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 3rem;
      margin-bottom: 2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
        align-items: center;
        margin-bottom: 3rem;
      }
      .avatar {
        width: 100%;
        max-width: 8.75rem;
        border-radius: 50%;
        margin-right: 4rem;
        margin-bottom: 2rem;
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          margin-bottom: 0;
        }
      }
      .details {
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
`

const Contact = ({ content }) => {
  const { body, frontmatter } = content[0].node

  return (
    <StyledSection id="contact">
      <StyledContentWrapper>
        <h3>{frontmatter.title}</h3>
        <MDXRenderer>{body}</MDXRenderer>
        <div className="profile">
          <Img
            className="avatar"
            fluid={frontmatter.profileImage.childImageSharp.fluid}
          />
          <div className="details">
            <strong>{frontmatter.name}</strong>
            <br />
            <a href={`mailto:${frontmatter.email}`}>
              <Underlining
                color={({ theme }) => theme.colors.secondary}
                hoverColor={({ theme }) => theme.colors.secondary}
              >
                {frontmatter.email}
              </Underlining>
            </a>
          </div>
        </div>
        <Social width="9rem" padding="0.5rem 1.25rem" withIcon />
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Contact
