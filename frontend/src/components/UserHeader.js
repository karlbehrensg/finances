import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useUser from '../hooks/useUser'

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.p`
  color: rgba(37, 39, 51, 1);
  font-size: 16px;
`

const UserHeader = () => {
  const { isLogged, logout } = useUser()

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  return (
    <UserContainer>
      {
        isLogged
          ? <Link to='/' onClick={handleClick}><Name>Logueado</Name></Link>
          : <Link to='/login'><Name>Sin loguear</Name></Link>
      }
    </UserContainer>
  )
}

export default UserHeader
