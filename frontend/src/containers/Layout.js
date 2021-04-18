import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'

const Container = styled.div`
  display: flex;
  padding: 0;
`

const MenuContainer = styled.div`
  display: inline-block;
  max-width: 255px;
  width: 20%;
`

const Menu = styled.div`
  --offset: var(--space);
  background-color: rgba(54, 55, 64, 1);
  max-width: 255px;
  width: 20%;
  height: 100vh;
  position: fixed;
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

const MenuItems = [
  { name: 'Resumen', to: '/' },
  { name: 'Movimientos', to: '/movements' }
]

const MenuList = MenuItems.map((item) => <MenuItem name={item.name} to={item.to} key={item.name} />)

const Layout = ({ children }) => {
  return (
    <Container>
      <MenuContainer>
        <Menu>
          <BrandContainer>
            <BrandTitle>Finanzas</BrandTitle>
          </BrandContainer>
          {MenuList}
        </Menu>
      </MenuContainer>
      {children}
    </Container>
  )
}

export default Layout
