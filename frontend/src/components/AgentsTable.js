import React, { useContext } from 'react'
import styled from 'styled-components'
import Context from '../context/UserContext'
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
  const { debts } = useContext(Context)

  console.log(debts)

  const agentDetailList = debts.map((debt, index) =>
    <AgentDetail name={debt.agent} income={(debt.total > 0)} expiredDate={debt.date} total={Math.abs(debt.total).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} key={index} />
  )

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <th>Agente</th>
            <th>Fecha</th>
            <th>Flujo</th>
            <th>Total</th>
            {/* <th>Detalle</th> */}
          </tr>
          {agentDetailList}
        </tbody>
      </Table>
    </Container>
  )
}

export default AgentsTable
