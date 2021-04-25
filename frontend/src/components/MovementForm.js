import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 1000;
`

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1000;
`

const MovementForm = () => {
  return ReactDOM.createPortal(
    <Container>
      <FormContainer>
        <h1>Formulario de movimiento</h1>
      </FormContainer>
    </Container>,
    document.getElementById('portal')
  )
}

export default MovementForm
