import React from 'react'
import styled from 'styled-components'
import AgentTable from './AgentTable'

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
        <tr>
          <th>Agente</th>
          <th>Egreso</th>
          <th>Ingreso</th>
          <th>Total</th>
          <th>Detalle</th>
        </tr>
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
        <AgentTable name='Ernesto' outcomes={3.333} incomes={9.999} />
      </Table>
    </Container>
  )
}

export default AgentsTable
