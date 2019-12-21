import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import config from "../config/"

import Theme from "../styles/Theme"

const { navLinks } = config
const { colors, borderRadius, breakpoints } = Theme

const StyledNav = styled.nav`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 31.25rem;
    background: ${colors.background};
    a {
      color: ${colors.primary};
    }
  }
`

const StyledNavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  position: relative;
  margin: 0 0 0 1.25rem;
  padding: 0;
  &::before {
    transition: 200ms ease-out;
    height: 0.1563rem;
    content: "";
    position: absolute;
    background-color: ${colors.primary};
    width: 0%;
    bottom: -0.125rem;
  }
  &:hover::before {
    width: 100%;
  }
`

const StyledButton = styled(Link)`
  width: auto;
  height: auto;
  font-weight: 700;
  border-radius: ${borderRadius};
  border: 0.125rem solid ${colors.primary};
  background: ${colors.background};
  transition: 20ms ease-out;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  margin: 0;
  &:hover {
    background: ${colors.primary};
    color: #ffffff;
  }
`

const Navbar = () => {
  const { menu, button } = navLinks
  return (
    <StyledNav>
      {menu.map(({ name, url }, key) => {
        return (
          <StyledNavLink key={key} to={url}>
            {name}
          </StyledNavLink>
        )
      })}
      <StyledButton to={button.url}>{button.name}</StyledButton>
    </StyledNav>
  )
}

export default Navbar
