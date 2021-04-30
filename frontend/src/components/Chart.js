import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import Context from '../context/UserContext'

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 5%;
`

const Chart = () => {
  const { summary } = useContext(Context)
  const incomes = summary.incomes
  const outcomes = summary.outcomes

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  return (
    <Container>
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: 'Ingresos',
              data: incomes,
              borderColor: 'rgba(49, 137, 18, 1)',
              borderWidth: 2
            },
            {
              label: 'Egresos',
              data: outcomes,
              borderColor: 'rgba(238, 0, 0, 1)',
              borderWidth: 2
            }
          ]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          elements: {
            line: {
              fill: false
            }
          },
          title: {
            display: true,
            text: 'Historia',
            fontSize: 22,
            fontStyle: 'bold'
          }
        }}
      />
    </Container>
  )
}

export default Chart
