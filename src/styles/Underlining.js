import styled from "styled-components"

const Underlining = styled.span`
  box-shadow: inset 0 ${({ big }) => (big ? "-1rem" : "-.5rem")} 0
    ${({ color, theme }) => (color ? color : theme.colors.tertiary)};
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: inset 0 ${({ big }) => (big ? "-2rem" : "-1rem")} 0
      ${({ hoverColor, theme }) => (hoverColor ? hoverColor : theme.colors.secondary)};
  }
`

export default Underlining
