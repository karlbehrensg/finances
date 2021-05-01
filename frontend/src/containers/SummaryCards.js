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
  const [balance, setBalance] = useState(0)
  const [usage, setUsage] = useState(0)
  const today = new Date()
  const currentMonth = today.getMonth()

  useEffect(() => {
    if (summary.incomes) {
      setIncomes(summary.incomes[currentMonth])
      setOutcomes(summary.outcomes[currentMonth])
      setBalance(summary.incomes[currentMonth] - summary.outcomes[currentMonth])
      setUsage((summary.incomes[currentMonth] !== 0) ? Math.round(summary.outcomes[currentMonth] / summary.incomes[currentMonth] * 100 * 100) / 100 : 0)
    }
  }, [summary])

  return (
    <Container>
      <SummaryCard title='Ingresos' total={`$${incomes.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} color='rgba(49, 137, 18, 1)' />
      <SummaryCard title='Egresos' total={`$${outcomes.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} color='rgba(238, 0, 0, 1)' />
      <SummaryCard title='Neto' total={`$${balance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`} color='rgba(0, 119, 182, 1)' />
      <SummaryCard title='% Egresos / Ingresos' total={`%${usage}`} color='rgba(37, 39, 51, 1)' />
    </Container>
  )
}

export default SummaryCards
