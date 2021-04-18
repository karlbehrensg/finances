import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 0;
`

const MenuContainer = styled.div`
  display: inline-block;
  max-width: 255px;
  width: 15%;
`

const Menu = styled.div`
  --offset: var(--space);
  background-color: #363740;
  max-width: 255px;
  width: 15%;
  height: 100vh;
  position: fixed;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <MenuContainer>
        <Menu>Menu</Menu>
      </MenuContainer>
      {children}
    </Container>
  )
}

export default Layout
