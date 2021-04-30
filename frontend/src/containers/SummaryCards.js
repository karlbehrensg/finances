import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import SummaryCard from '../components/SummaryCard'

import Context from '../context/UserContext'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  justify-content: center;
`

const SummaryCards = () => {
  const { summary } = useContext(Context)
  const [incomes, setIncomes] = useState(0)
  const [outcomes, setOutcomes] = useState(0)

  useEffect(() => {
    if (summary.incomes) {
      setIncomes(summary.incomes[4])
      setOutcomes(summary.outcomes[4])
    }
  }, [summary])

  return (
    <Container>
      <SummaryCard title='Ingresos' total={`$${incomes}`} />
      <SummaryCard title='Egresos' total={`$${outcomes}`} />
      <SummaryCard title='Neto' total={`$${incomes - outcomes}`} />
      <SummaryCard title='% Egresos / Ingresos' total={`%${Math.round(outcomes / incomes * 100 * 100) / 100}`} />
    </Container>
  )
}

export default SummaryCards
