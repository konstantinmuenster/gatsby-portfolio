import React from "react"
import styled from "styled-components"

import config from "../config/"
import getIcon from "./icons/"

import Theme from "../styles/Theme"

const { socialMedia } = config
const { colors, borderRadius, breakpoints } = Theme

const StyledSocialWrapper = styled.div`
  display: grid;
  // Calculate columns, depending on how many profiles there are
  grid-template-columns: repeat(${({ itemCount }) => itemCount + 1}, auto);
  justify-content: start;
  justify-items: start;

  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  // Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout
  &::after {
    content: "";
    width: 2.5rem;
  }

  a {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    @media (min-width: ${breakpoints.sm}) {
      margin-right: 1rem;
    }
  }
`

const StyledSocialProfile = styled.a`
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  background: ${colors.background};
  background: linear-gradient(
    to right,
    ${colors.primary} 50%,
    ${colors.background} 50%
  );
  background-size: 205% 100%;
  background-position: right bottom;
  border-radius: ${borderRadius};
  border: 0.125rem solid ${colors.primary};
  padding: ${({ padding }) => (padding ? padding : ".3rem 1.25rem")};
  transition: all 0.1s ease-out;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;
  color: ${colors.primary};
  &:hover {
    background-position: left bottom;
    color: #ffffff;
  }
  &:hover svg {
    // Change svg color to white
    filter: brightness(0) invert(1);
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
`

const Social = props => (
  <StyledSocialWrapper itemCount={socialMedia.length}>
    {socialMedia.map(({ name, url }, key) => {
      return (
        <StyledSocialProfile
          key={key}
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={name}
          width={props.width}
          padding={props.padding}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
        >
          {props.withIcon ? getIcon(name) : null} {name}
        </StyledSocialProfile>
      )
    })}
  </StyledSocialWrapper>
)

export default Social
