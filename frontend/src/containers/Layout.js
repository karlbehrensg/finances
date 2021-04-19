import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'

const Container = styled.div`
  display: flex;
  padding: 0;
`

const MainContainer = styled.div`
  width: 100%;
  padding: 18px 34px;
`

const MenuItems = [
  { name: 'Resumen', to: '/' },
  { name: 'Movimientos', to: '/movements' }
]

const Layout = ({ children }) => {
  return (
    <Container>
      <Menu items={MenuItems} />
      <MainContainer>
        {children}
      </MainContainer>
    </Container>
  )
}

export default Layout
