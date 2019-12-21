import React, { useState, useEffect } from "react"
import styled from "styled-components"

import config from "../../config"
import { parseDate } from "../../utils"

import Theme from "../../styles/Theme"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

const { mediumRssFeed } = config
const { colors, borderRadius, breakpoints } = Theme

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
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

const StyledArticlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin: -2rem 0 0 0;
  padding: 0 2rem;
  &::-webkit-scrollbar {
      display: none;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0;
    overflow: visible;
  }
`

const StyledCard = styled.div`
  width: 16.25rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 2rem 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
  border-radius: ${borderRadius};
  transition: box-shadow .3s ease-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.32);
  }
  &:hover ${Underlining} {
    box-shadow: inset 0 -1rem 0 ${colors.secondary};
  }
  @media (min-width: ${breakpoints.lg}) {
    margin: 2rem auto
  }
`

const StyledCategory = styled.span`
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: +1px;
  font-weight: 700;
`

const StyledTitle = styled.h4`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`

const StyledDate = styled.span`
  font-size: 0.75rem;
  color: #888888;
  letter-spacing: +.5px;
`

const Articles = props => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    fetch(mediumRssFeed, { headers: { Accept: "application/json" } })
      .then(res => res.json())
      // Feed also contains comments, therefore we filter for articles only
      .then(data => data.items.filter(item => item.categories.length > 0))
      // Only select latest 3 articles
      .then(newArticles => newArticles.slice(0, 3))
      // Put articles in state
      .then(articles => setArticles(articles))
      .catch(error => console.log(error))
  }, [])

  return (
    <StyledSection id="articles">
      <StyledContentWrapper>
        <StyledSectionTitle>Latest Articles on Medium</StyledSectionTitle>
        <StyledArticlesWrapper>
          {articles
            ? articles.map(item => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={item.title}
                  aria-label={item.link}
                  key={item.link}
                >
                  <StyledCard>
                    <StyledCategory>
                      <Underlining
                        color={colors.tertiary}
                        hoverColor={colors.secondary}
                      >
                        {item.categories[2]}
                      </Underlining>
                    </StyledCategory>
                    <StyledTitle>{item.title}</StyledTitle>
                    <StyledDate>{parseDate(item.pubDate)}</StyledDate>
                  </StyledCard>
                </a>
              ))
            : null}
        </StyledArticlesWrapper>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Articles
