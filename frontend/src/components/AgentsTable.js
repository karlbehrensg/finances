import React from 'react'
import styled from 'styled-components'
import AgentDetail from './AgentDetail'

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

const AgentsTable = () => {
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <th>Agente</th>
            <th>Fecha</th>
            <th>Flujo</th>
            <th>Total</th>
            <th>Detalle</th>
          </tr>
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
          <AgentDetail name='Ernesto' flow='Ingreso' expiredDate='2021-03-16' total={9.999} />
        </tbody>
      </Table>
    </Container>
  )
}

export default AgentsTable
