import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

import { detectMobileAndTablet, isSSR } from "../utils/"

import Theme from "../styles/Theme"
import ContentWrapper from "../styles/ContentWrapper"

import Logo from "./logo"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

const { colors, breakpoints, headerHeight } = Theme

const StyledHeader = styled.header`
  width: 100%;
  height: ${headerHeight};
  background: ${colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const StyledBurger = styled.button`
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${colors.primary};
    border-radius: 0.625rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Header = () => {

  // open is needed to know if sidebar is opened or not
  const [open, setOpen] = useState(false)

  // windowWidth is needed to detect if sidebar or navbar should be rendered
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let handleWindowSizeChange

    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth)
    }

    // Add event listener to update windowWidth in state
    window.addEventListener("resize", handleWindowSizeChange)

    // Add cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("resize", handleWindowSizeChange)

  }, [windowWidth])

  // Render sidebar or navbar, depending on windowWidth
  let navigation
  if (detectMobileAndTablet(windowWidth)) {
    navigation = (
      <>
        <StyledBurger aria-controls="sidebar" open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Sidebar id="sidebar" open={open} setOpen={setOpen} />
      </>
    )
  } else {
    navigation = <Navbar />
  }

  return (
    <StyledHeader>
      {/* add blur class to body when sidebar is opened */}
      <Helmet bodyAttributes={{ class: open ? "blur" : "" }} />
      <StyledContentWrapper>
        <Link to="/" aria-label="home">
          <Logo color={colors.primary} size="2rem" />
        </Link>
        {navigation}
      </StyledContentWrapper>
    </StyledHeader>
  )
}

export default Header
