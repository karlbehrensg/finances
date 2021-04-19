import React from 'react'
import styled from 'styled-components'
import SummaryCard from '../components/SummaryCard'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: space-between;
`

const SummaryCards = () => {
  return (
    <Container>
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </Container>
  )
}

export default SummaryCards
