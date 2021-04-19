import React from 'react'
import UserHeader from '../components/UserHeader'
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

const Header = ({ children }) => {
  return (
    <Container>
      <MainHeaderContainer>
        {children}
      </MainHeaderContainer>
      <UserHeader />
    </Container>
  )
}

export default Header
