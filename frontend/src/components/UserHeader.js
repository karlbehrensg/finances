import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
  const { logout } = useUser()
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    logout()
    history.push('/login')
  }

  return (
    <UserContainer>
      <Link onClick={handleClick} to='/'><Name>Cerrar sesion</Name></Link>
    </UserContainer>
  )
}

export default UserHeader
