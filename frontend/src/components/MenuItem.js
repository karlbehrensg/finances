import React from 'react'
import styled from 'styled-components'

const MenuDetail = styled.p`
  color: rgba(164, 166, 179, 1);
  font-size: 16px;
  letter-spacing: 0.2px;
  margin-left: 50px;
`

// const Image = styled.svg`
//   position: absolute;
//   width: 27px;
//   height: 28px;
//   margin-left: 14px;
// `

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

const MenuItem = ({ item }) => {
  return (
    <MenuItemContainer>
      <MenuDetail>{item}</MenuDetail>
    </MenuItemContainer>
  )
}

export default MenuItem
