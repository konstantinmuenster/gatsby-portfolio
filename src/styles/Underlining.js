import styled from "styled-components"

import Theme from "./Theme"

const Underlining = styled.span`
  box-shadow: inset 0 ${({ big }) => (big ? "-1rem" : "-.5rem")} 0
    ${({ color }) => (color ? color : Theme.colors.tertiary)};
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: inset 0 ${({ big }) => (big ? "-2rem" : "-1rem")} 0
      ${({ hoverColor }) => (hoverColor ? hoverColor : Theme.colors.secondary)};
  }
`

export default Underlining
