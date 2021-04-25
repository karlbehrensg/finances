import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const AmountInput = styled.input``
const CategoryInput = styled.input``

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

const Form = styled.form`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #363740;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 8px;
  width: 650px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  input {
    border: 1px solid rgba(232, 232, 232, 1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 10px;
    background-color: rgba(247, 248, 252, 1);
    margin: 10px 0px;
    padding: 3%;
    width: 30%;
  }
`

const SecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  input {
    border: 1px solid rgba(232, 232, 232, 1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 10px;
    background-color: rgba(247, 248, 252, 1);
    margin: 10px 0px;
    padding: 3%;
    width: 40%;
  }

  ${AmountInput} {
    width: 40%;
  }

  ${CategoryInput} {
    width: 57%;
  }
`

const ThirdRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const AddButton = styled.button`
  background: rgba(4, 195, 92, 1);
  border-radius: 100px;
  width: 80px;
  height: 22px;
  color: white;
  font-weight: bold;
  margin: 5px;
  
  :hover {
    background: rgba(41, 204, 151, 1);
    transition: 0.5s;
  }
`

const CancelButton = styled.button`
  background: rgba(241, 43, 44, 1);
  border-radius: 100px;
  width: 80px;
  height: 22px;
  color: white;
  font-weight: bold;
  margin: 5px;
  
  :hover {
    background: rgba(255, 69, 70, 1);
    transition: 0.5s;
  }
`

const MovementForm = () => {
  return ReactDOM.createPortal(
    <Container>
      <Form>
        <FirstRow>
          <input type='text' placeholder='Fecha' />
          <input type='text' placeholder='Agente' />
          <input type='text' placeholder='Flujo' />
        </FirstRow>
        <SecondRow>
          <AmountInput type='text' placeholder='Monto' />
          <CategoryInput type='text' placeholder='Categoria' />
        </SecondRow>
        <ThirdRow>
          <CancelButton>Cancelar</CancelButton>
          <AddButton>Crear</AddButton>
        </ThirdRow>
      </Form>
    </Container>,
    document.getElementById('portal')
  )
}

export default MovementForm
