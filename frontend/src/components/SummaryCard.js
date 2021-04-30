import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: block;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(223, 224, 235, 1);
  box-sizing: border-box;
  border-radius: 8px;
  width: 220px;
  height: 134px;
  justify-content: center;
  align-items: center;
  margin: 0 1%;
`

const Valor = styled.h1`
  color: rgba(49, 137, 18, 1);
  text-align: center;
`

const CardHeader = styled.h5`
  color: rgba(159, 162, 180, 1);
  text-align: center;
`

const SummaryCard = ({ title, total }) => {
  return (
    <>
      <Card>
        <CardHeader>{title}</CardHeader>
        <Valor>{total}</Valor>
      </Card>
    </>
  )
}

export default SummaryCard
