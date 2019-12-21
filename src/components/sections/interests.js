import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { detectMobileAndTablet, isSSR } from "../../utils"

import Theme from "../../styles/Theme"
import ContentWrapper from "../../styles/ContentWrapper"
import Button from "../../styles/Button"

const { colors, borderRadius, breakpoints } = Theme

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
  }
`

const StyledSectionTitle = styled.h3`
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  @media (min-width: ${breakpoints.lg}) {
    padding-right: 0;
    padding-left: 0;
  }
`

const StyledLabelWrapper = styled.div`
  display: grid;
  // Calculate how many columns are needed, depending on interests count
  grid-template-columns: repeat(
    ${({ itemCount }) => Math.ceil(itemCount / 2)},
    15.625rem
  );
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 0 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  // Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout
  &::after {
    content: "";
    width: ${({ itemCount }) =>  Math.ceil(itemCount / 2) % 2 === 1 ? "17.125rem" : "2.5rem"}
  }
  
  @media (min-width: ${breakpoints.lg}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 15.625rem);
    overflow: visible;
    padding: 0;
  }
`

const StyledLabel = styled.div`
  width: 15.625rem;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border: 0.125rem solid ${colors.primary};
  border-radius: ${borderRadius};
`

const StyledIcon = styled(Img)`
  margin-right: 0.5rem;
`

const Interests = ({ content }) => {
  const { exports, frontmatter } = content[0].node
  const { shownItems, interests } = exports

  const [shownInterests, setShownInterests] = useState(shownItems)

  useEffect(() => {
    // If mobile or tablet, show all interests initially
    // Otherwise interests.mdx will determine how many interests are shown
    // (isSSR) is used to prevent error during gatsby build
    if (!isSSR && detectMobileAndTablet(window.innerWidth)) {
      setShownInterests(interests.length)
    }
  }, [interests])

  const showMoreItems = () => setShownInterests(shownInterests + 4)

  return (
    <StyledSection id="interests">
      <StyledContentWrapper>
        <StyledSectionTitle>{frontmatter.title}</StyledSectionTitle>
        <StyledLabelWrapper itemCount={interests.length}>
          {interests.slice(0, shownInterests).map(({ name, icon }, key) => (
            <StyledLabel key={key}>
              <StyledIcon fixed={icon.childImageSharp.fixed} /> {name}
            </StyledLabel>
          ))}
          {shownInterests < interests.length && (
            <Button
              onClick={() => showMoreItems()}
              type="button"
              textAlign="left"
              color={colors.primary}
            >
              + Load more
            </Button>
          )}
        </StyledLabelWrapper>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Interests
