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

const MovementDetail = ({ date, name, flow, mount, category }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{flow}</td>
      <td>{mount}</td>
      <td>{category}</td>
      <td><Button>Ver</Button></td>
    </tr>
  )
}

export default MovementDetail
