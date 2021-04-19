import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
  max-width: 255px;
  width: 20%;
`

const MenuList = styled.div`
  --offset: var(--space);
  background-color: rgba(54, 55, 64, 1);
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
`

const BrandTitle = styled.h3`
  margin-top: 20px;
  color: rgba(164, 166, 179, 1);
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  margin-left: 50px;
`

const BrandContainer = styled.div`
  display: flex;
  height: 80px;
`

const Menu = ({ items }) => {
  const MenuItemList = items.map((item) => <MenuItem name={item.name} to={item.to} key={item.name} />)

  return (
    <Container>
      <MenuList>
        <BrandContainer>
          <BrandTitle>Finanzas</BrandTitle>
        </BrandContainer>
        {MenuItemList}
      </MenuList>
    </Container>
  )
}

export default Menu
