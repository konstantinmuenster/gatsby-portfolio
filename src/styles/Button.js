import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  background: ${({ color, theme }) => color ? color : theme.colors.background};
  color: #ffffff;
  padding: 1rem;
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: .3rem;
    margin-bottom: -.175rem;
  }
`

const Button = props => (
  <StyledButton onClick={props.onClick} color={props.color} textAlign={props.textAlign} center={props.center}>
    {props.children}
  </StyledButton>
)

export default Button
