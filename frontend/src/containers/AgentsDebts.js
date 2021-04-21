import React from 'react'
import styled from 'styled-components'
import AgentsDebtsHeader from '../components/AgentsDebtsHeader'
import AgentsTable from '../components/AgentsTable'

const Container = styled.div`
  display: block;
  margin-top: 28px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(223, 224, 235, 1);
  width: 100%;
  margin-bottom: 5%;
  border-radius: 8px;
`

const AgentsDebts = () => {
  return (
    <Container>
      <AgentsDebtsHeader />
      <AgentsTable />
    </Container>
  )
}

export default AgentsDebts
