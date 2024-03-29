import React, { useState } from 'react'
import styled from 'styled-components'

import MovementForm from './MovementForm'

const Button = styled.button`
  background: rgba(4, 195, 92, 1);
  border-radius: 100px;
  width: 80px;
  height: 20px;
  color: white;
  font-weight: bold;
  
  :hover {
    background: rgba(41, 204, 151, 1);
    transition: 0.5s;
  }
`

const MovementDetail = ({ movement }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <MovementForm
        formDisplay={showForm}
        onClose={() => setShowForm(false)}
        idMovement={movement.id}
        expiredMovement={movement.expired}
        agentMovement={movement.agent}
        incomeMovement={movement.income}
        amountMovement={movement.amount}
        categoryMovement={movement.category}
      />
      <tr>
        <td>{movement.expired}</td>
        <td>{movement.agent}</td>
        <td>{movement.income ? 'Ingreso' : 'Egreso'}</td>
        <td>{movement.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
        <td>{movement.category}</td>
        <td><Button onClick={() => setShowForm(true)}>Ver</Button></td>
      </tr>
    </>
  )
}

export default MovementDetail
