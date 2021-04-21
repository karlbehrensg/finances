import React from 'react'
import styled from 'styled-components'

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

const AgentTable = ({ name, outcomes, incomes }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{outcomes}</td>
      <td>{incomes}</td>
      <td>{incomes - outcomes}</td>
      <td><Button>Ver</Button></td>
    </tr>
  )
}

export default AgentTable
