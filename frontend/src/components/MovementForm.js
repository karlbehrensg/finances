import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import useMovement from '../hooks/useMovement'

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

const Form = styled.div`
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
  padding: 15px;
`

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  input {
    border: 1px solid rgba(232, 232, 232, 1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 10px;
    background-color: rgba(247, 248, 252, 1);
    padding: 3%;
    width: 36%;
  }

  label {
    display: flex;
    width: 20%;
    align-items: center;
    color: #fff;
    font-size: 18px;
    
    input {
      height: 15px;
      width: 15px;
      margin-right: 15px;
    }
  }

  label:hover {
    display: flex;
    align-items: center;
    cursor:pointer;

  }
`

const SecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    border: 1px solid rgba(232, 232, 232, 1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 10px;
    background-color: rgba(247, 248, 252, 1);
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
  margin: 5px 0 0 10px;
  
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
  margin: 5px 0 0 10px;
  
  :hover {
    background: rgba(255, 69, 70, 1);
    transition: 0.5s;
  }
`

const today = new Date().toISOString().slice(0, 10)

const MovementForm = ({ formDisplay, onClose, idMovement = null, expiredMovement = today, agentMovement = '', incomeMovement = false, amountMovement = '', categoryMovement = '' }) => {
  if (!formDisplay) return null

  const [id, setId] = useState(null)
  const [expired, setExpired] = useState(today)
  const [agent, setAgent] = useState('')
  const [income, setIncome] = useState(false)
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const { createMovement } = useMovement()

  useEffect(() => {
    setId(idMovement)
    setExpired(expiredMovement)
    setAgent(agentMovement)
    setIncome(incomeMovement)
    setAmount(amountMovement)
    setCategory(categoryMovement)
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ expired, agent, income, amount, category })
    createMovement({ expired, agent, income, amount, category })
    onClose()
  }

  return ReactDOM.createPortal(
    <Container>
      <Form>
        <FirstRow>
          <input type='date' placeholder='Fecha' value={expired} onChange={(e) => setExpired(e.target.value)} />
          <input type='text' placeholder='Agente' value={agent} onChange={(e) => setAgent(e.target.value)} />
          <label><input type='checkbox' checked={income} onChange={() => setIncome(!income)} />Ingreso</label>
        </FirstRow>
        <SecondRow>
          <AmountInput type='number' placeholder='Monto' value={amount} onChange={(e) => setAmount(e.target.value)} />
          <CategoryInput type='text' placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />
        </SecondRow>
        <ThirdRow>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <AddButton onClick={handleSubmit}>Crear</AddButton>
        </ThirdRow>
      </Form>
    </Container>,
    document.getElementById('portal')
  )
}

export default MovementForm
