import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
  margin: 15px 0 0 35px;
  width: 100%;
`

const Title = styled.h3`
  color: 252733;
  font-size: 24px;
`

const AgentsDebtsHeader = () => {
  return (
    <Container>
      <Title>Proximos pagos</Title>
    </Container>
  )
}

export default AgentsDebtsHeader
