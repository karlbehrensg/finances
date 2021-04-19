import React from 'react'
import styled from 'styled-components'

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.p`
  color: rgba(37, 39, 51, 1);
  font-size: 16px;
`

const UserHeader = () => {
  return (
    <UserContainer>
      <Name>Karl Behrens</Name>
    </UserContainer>
  )
}

export default UserHeader
