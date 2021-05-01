import React from 'react'
import styled from 'styled-components'

// const Button = styled.button`
//   background: rgba(4, 195, 92, 1);
//   border-radius: 100px;
//   width: 80px;
//   height: 20px;
//   color: white;
//   font-weight: bold;

//   :hover {
//     background: rgba(41, 204, 151, 1);
//     transition: 0.5s;
//   }
// `

const DataColor = styled.td`
  color: ${props => props.color};
  font-weight: bold;
`

const AgentDetail = ({ name, expiredDate, income, total }) => {
  const colors = {
    income: 'rgba(49,137,18,1)',
    outcome: 'rgba(238,0,0,1)'
  }

  const color = (income) ? colors.income : colors.outcome

  return (
    <tr>
      <td>{name}</td>
      <td>{expiredDate}</td>
      <td>{(income) ? 'Ingreso' : 'Egreso'}</td>
      <DataColor color={color}>{total}</DataColor>
      {/* <td><Button>Ver</Button></td> */}
    </tr>
  )
}

export default AgentDetail
