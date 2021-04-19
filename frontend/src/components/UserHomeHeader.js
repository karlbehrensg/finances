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
  return (
    <>
      <Title>Resumen</Title>
      <Form>
        <Select name='month' id='month'>
          <option value='march'>Marzo</option>
          <option value='april'>Abril</option>
        </Select>
        <Select name='year' id='year'>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
        </Select>
        <Button type='button'>Ir</Button>
      </Form>
    </>
  )
}

export default UserHomeHeader
