import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuDetail = styled.p`
  color: rgba(164, 166, 179, 1);
  font-size: 16px;
  letter-spacing: 0.2px;
  margin-left: 50px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  height: 56px;
  align-items: center;
  :hover{
    background-color: rgba(159, 162, 180, 0.08);
    ${MenuDetail} {
      color: rgba(221, 226, 255, 0.7);
    }
  }

  &[aria-current] {
    background-color: rgba(159, 162, 180, 0.08);
    ${MenuDetail} {
      color: rgba(221, 226, 255, 0.7);
    }
  }
`

const MenuItem = ({ name, to }) => {
  return (
    <StyledLink exact to={to} className='MenuItem' activeClassName='MenuItem--active'>
      <MenuDetail>{name}</MenuDetail>
    </StyledLink>
  )
}

export default MenuItem
