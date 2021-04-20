import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(223, 224, 235, 1);
  height: 25%;
`

const Valor = styled.h1`
  color: rgba(238, 0, 0, 1);
  text-align: center;
  margin-top: 10px;
`

const CardHeader = styled.h5`
  display: flex;
  color: rgba(159, 162, 180, 1);
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  height: 35%;
`

const ChartResume = () => {
  return (
    <Container>
      <CardHeader>Promedio Ingreso</CardHeader>
      <Valor>$9.999</Valor>
    </Container>
  )
}

export default ChartResume
