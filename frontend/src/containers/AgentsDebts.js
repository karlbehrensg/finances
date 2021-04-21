import React from 'react'
import styled from 'styled-components'
import AgentsDebtsHeader from '../components/AgentsDebtsHeader'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(223, 224, 235, 1);
  width: 100%;
  height: 546px;
`

const AgentsDebts = () => {
  return (
    <Container>
      <AgentsDebtsHeader />
    </Container>
  )
}

export default AgentsDebts
