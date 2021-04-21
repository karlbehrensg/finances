import React from 'react'
import styled from 'styled-components'
import MovementsHeader from '../components/MovementsHeader'
import MovementsTable from '../components/MovementsTable'

const Container = styled.div`
  display: block;
  margin-top: 28px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(223, 224, 235, 1);
  width: 100%;
  margin-bottom: 5%;
  border-radius: 8px;
`

const MovementsDetails = () => {
  return (
    <Container>
      <MovementsHeader />
      <MovementsTable />
    </Container>
  )
}

export default MovementsDetails
