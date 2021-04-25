import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  justify-content: center;
  align-content: center;
`

const MovementForm = () => {
  return (
    <Container>
      <h1>Formulario de movimiento</h1>
    </Container>
  )
}

export default MovementForm
