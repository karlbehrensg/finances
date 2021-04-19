import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 35px;
  margin: 18px;
  align-items: center;
  justify-content: space-between;
`

const MainHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

const UserContainer = styled.div`

`

const Header = ({ children }) => {
  return (
    <Container>
      <MainHeaderContainer>
        {children}
      </MainHeaderContainer>
      <UserContainer>User</UserContainer>
    </Container>
  )
}

export default Header
