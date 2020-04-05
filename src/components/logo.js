import React from "react"
import styled from "styled-components"

import config from "../config"

const { siteShortTitle } = config

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color };

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    {siteShortTitle}
  </StyledLogo>
)

export default logo
