import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Radio from '../components/Radio'

import useUser from '../hooks/useUser'

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 350px;
  height: 100vh;
  max-height: 550px;
`

const HeaderLogin = styled.div`
  width: 100%;
  height: 20%;
  padding: 10%;
  margin-top: 10%;

  p {
    color: rgba(45, 55, 72, 1);
    font-size: 16px;
  }

  h1 {
    color: rgba(26, 32, 44, 1);
    font-size: 30px;
  }
`

const Form = styled.form`
  width: 100%;
  padding: 20px 10% 0 10%;

  p {
    color: rgba(74, 85, 104, 1);
    font-size: 16px;
  }

  input {
    border: 1px solid rgba(232, 232, 232, 1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    background-color: rgba(247, 248, 252, 1);
    margin: 10px 0px;
    padding: 3%;
  }

  .option, .register{
    color: rgba(159, 162, 180, 1);
    font-size: 12px;
  }

  .register {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
`

const Options = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  background: rgba(4, 195, 92, 1);
  border-radius: 5px;
  width: 100%;
  height: 40px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  
  :hover {
    background: rgba(41, 204, 151, 1);
    transition: 0.5s;
  }
`

const FooterForm = styled.div`
  .register{
    display: flex;
    justify-content: center;
    margin-top: 5px;
    color: rgba(159, 162, 180, 1);
    font-size: 12px;
  }
`

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged } = useUser()
  const history = useHistory()

  useEffect(() => {
    if (isLogged) history.push('/')
  }, [isLogged])

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
  }

  return (
    <Container>
      <HeaderLogin>
        <p>Bienvenido de vuelta</p>
        <h1>Inicia sesion</h1>
      </HeaderLogin>
      <Form onSubmit={handleSubmit}>
        <input type='text' placeholder='Correo electronico' onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type='password' placeholder='**************' onChange={(e) => setPassword(e.target.value)} value={password} />
        <Options>
          <Radio name='remember'><p className='option'>Recuerdame</p></Radio>
          <Link style={{ textDecoration: 'none' }} to='/login'><p className='option'>Olvidaste tu contraseña?</p></Link>
        </Options>
        <Button type='submit'>Inicia Sesion</Button>
      </Form>
      <FooterForm><Link style={{ textDecoration: 'none' }} to='/register'><p className='register'>No tienes una cuenta? Registrate</p></Link></FooterForm>
    </Container>
  )
}

export default LoginForm
