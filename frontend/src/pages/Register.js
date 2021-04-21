import React from 'react'
import styled from 'styled-components'
import RegisterForm from '../containers/RegisterForm'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  )
}

export default Register
