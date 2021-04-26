import React, { useContext } from 'react'
import styled from 'styled-components'

import MovementDetail from './MovementDetail'

import Context from '../context/UserContext'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  width: 100%;
  justify-content: center;
  margin-bottom: 27px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid rgba(159,162,180,0.2);
    padding: 0.25rem;
    text-align: center;
  }

  td {
    height: 40px;
  }
`

const MovementsTable = () => {
  const { movements } = useContext(Context)
  const movementsList = movements.map((movement) =>
    <MovementDetail
      movement={movement}
      key={movement.id}
    />
  )

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <th>Fecha</th>
            <th>Agente</th>
            <th>Flujo</th>
            <th>Monto</th>
            <th>Categoria</th>
            <th>Detalle</th>
          </tr>
          {movementsList}
        </tbody>
      </Table>
    </Container>
  )
}

export default MovementsTable
