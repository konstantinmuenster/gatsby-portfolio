import React, { useState, useEffect } from "react"
import styled from "styled-components"

import config from "../../config"
import { parseDate } from "../../utils"

import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"

const { mediumRssFeed } = config

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
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
    .articles {
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
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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
    .card {
      width: 16.25rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin: 2rem 1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.32);
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem auto;
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .title {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      .date {
        font-size: 0.75rem;
        color: #888888;
        letter-spacing: +0.5px;
      }
    }
  }
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
        <h3 className="section-title">Latest Articles on Medium</h3>
        <div className="articles">
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
                  <div className="card">
                    <span className="category">
                      <Underlining color="tertiary" hoverColor="secondary">
                        {item.categories[2]}
                      </Underlining>
                    </span>
                    <h4 className="title">{item.title}</h4>
                    <span className="date">{parseDate(item.pubDate)}</span>
                  </div>
                </a>
              ))
            : null}
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Articles
