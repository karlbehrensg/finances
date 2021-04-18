import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuDetail = styled.p`
  color: rgba(164, 166, 179, 1);
  font-size: 16px;
  letter-spacing: 0.2px;
  margin-left: 50px;
`

const MenuItemContainer = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  :hover{
    background-color: rgba(159, 162, 180, 0.08);
    ${MenuDetail} {
      color: rgba(221, 226, 255, 0.7);
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const MenuItem = ({ name, to }) => {
  return (
    <StyledLink to={to}>
      <MenuItemContainer>
        <MenuDetail>{name}</MenuDetail>
      </MenuItemContainer>
    </StyledLink>
  )
}

export default MenuItem
