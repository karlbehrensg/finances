import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  color: 252733;
  font-size: 24px;
`

const Select = styled.select`
  border: 1px solid rgba(164, 166, 179, 1);
  box-sizing: border-box;
  border-radius: 4px;
  width: 50px;
  height: 20px;
  text-align-last:center;
  -moz-appearance: none;
  -webkit-appearance: none;
`

const Button = styled.button`
  background: rgba(4, 195, 92, 1);
  border-radius: 100px;
  width: 50px;
  height: 20px;
  color: white;
  font-weight: bold;
  
  :hover {
    background: rgba(41, 204, 151, 1);
    transition: 0.5s;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  margin-top: 5px;
  width: 164px;
`

const UserHomeHeader = () => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const years = Array(currentYear - 2020 + 2).fill().map((_, idx) => 2020 + idx)

  const months = [
    { month: 'Enero', value: 0 },
    { month: 'Febrero', value: 1 },
    { month: 'Marzo', value: 2 },
    { month: 'Abril', value: 3 },
    { month: 'Mayo', value: 4 },
    { month: 'Junio', value: 5 },
    { month: 'Julio', value: 6 },
    { month: 'Agosto', value: 7 },
    { month: 'Septiembre', value: 8 },
    { month: 'Octubre', value: 9 },
    { month: 'Noviembre', value: 10 },
    { month: 'Diciembre', value: 11 }
  ]

  const yearOptions = years.map((year) =>
    <option value={year.value} key={year}>
      {year}
    </option>
  )

  const monthOptions = months.map((month, index) =>
    <option value={month.value} key={index}>
      {month.month}
    </option>
  )

  return (
    <>
      <Title>Resumen</Title>
      <Form>
        <Select name='month' id='month' defaultValue={currentMonth}>
          {monthOptions}
        </Select>
        <Select name='year' id='year' defaultValue={currentYear}>
          {yearOptions}
        </Select>
        <Button type='button'>Ir</Button>
      </Form>
    </>
  )
}

export default UserHomeHeader
