import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import Chart from '../components/Chart'
import ChartResume from '../components/ChartResume'

import Context from '../context/UserContext'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(223, 224, 235, 1);
  width: 100%;
  height: 546px;
`

const ChartContainer = styled.div`
  width: 75%;
  border-right: 1px solid rgba(223, 224, 235, 1);
`

const ResumeContainer = styled.div`
  width: 25%;
`

const History = () => {
  const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length
  const today = new Date()
  const currentMonth = today.getMonth() + 1

  const { summary } = useContext(Context)
  const [averageIncomes, setAverageIncomes] = useState(0)
  const [averageOutcomes, setAverageOutcomes] = useState(0)
  const [averageBalance, setAverageBalance] = useState(0)
  const [averageUsage, setAverageUsage] = useState(0)

  useEffect(() => {
    if (summary.incomes) {
      const avgIncomes = Math.round(average(summary.incomes.slice(0, currentMonth)))
      const avgOutcomes = Math.round(average(summary.outcomes.slice(0, currentMonth)))
      setAverageIncomes(avgIncomes)
      setAverageOutcomes(avgOutcomes)
      setAverageBalance(avgIncomes - avgOutcomes)
      setAverageUsage((avgIncomes !== 0) ? Math.round(avgOutcomes / avgIncomes * 100 * 100) / 100 : 0)
    }
  }, [summary])

  return (
    <Container>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <ResumeContainer>
        <ChartResume title='Promedio Neto' total={`$${averageBalance}`} color='rgba(0, 119, 182, 1)' />
        <ChartResume title='Promedio Ingreso' total={`$${averageIncomes}`} color='rgba(49, 137, 18, 1)' />
        <ChartResume title='Promedio Egreso' total={`$${averageOutcomes}`} color='rgba(238, 0, 0, 1)' />
        <ChartResume title='% Egresos / Ingresos' total={`%${averageUsage}`} color='rgba(37, 39, 51, 1)' />
      </ResumeContainer>
    </Container>
  )
}

export default History
