import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #9e9e9e;
  display: flex;
  justify-content: space-around;
`

export const Anchor = styled.a`
  height: 40px;
  width: 80px;
  cursor: pointer;
  text-align: center;
  line-height: 40px;

  &:active {
    background-color: black;
  }

  &:hover {
    transition: 0.5s;
    background-color: #c9c9c9;
  }
`
