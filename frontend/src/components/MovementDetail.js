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
      <MovementForm formDisplay={showForm} onClose={() => setShowForm(false)} />
      <tr>
        <td>{movement.expired}</td>
        <td>{movement.name}</td>
        <td>{movement.flow ? 'Ingreso' : 'Egreso'}</td>
        <td>{movement.mount}</td>
        <td>{movement.category}</td>
        <td><Button movement={movement} onClick={() => setShowForm(true)}>Ver</Button></td>
      </tr>
    </>
  )
}

export default MovementDetail
