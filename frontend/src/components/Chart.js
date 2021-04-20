import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 5%;
`

const Chart = () => {
  return (
    <Container>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Ingresos',
              data: [12, 19, 3, 22, 15, 16],
              borderColor: 'rgba(49, 137, 18, 1)',
              borderWidth: 2
            },
            {
              label: 'Egresos',
              data: [8, 14, 7, 8, 12, 12],
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
