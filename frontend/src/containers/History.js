import React from 'react'
import styled from 'styled-components'
import ChartResume from '../components/ChartResume'

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
  return (
    <Container>
      <ChartContainer>
        <h1>Historia</h1>
      </ChartContainer>
      <ResumeContainer>
        <ChartResume />
        <ChartResume />
        <ChartResume />
        <ChartResume />
      </ResumeContainer>
    </Container>
  )
}

export default History
