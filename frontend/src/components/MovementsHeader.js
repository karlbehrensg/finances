import React, { useState } from 'react'
import styled from 'styled-components'
import MovementForm from './MovementForm'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 15px 0 35px;
  justify-content:space-between;

  div {
    display: flex;
    align-items: center;
    width: 110px;
  }
`

const Title = styled.h3`
  color: 252733;
  font-size: 24px;
`

// const Select = styled.select`
//   border: 1px solid rgba(164, 166, 179, 1);
//   box-sizing: border-box;
//   border-radius: 4px;
//   width: 50px;
//   height: 20px;
//   text-align-last:center;
//   -moz-appearance: none;
//   -webkit-appearance: none;
// `

// const Button = styled.button`
//   background: rgba(4, 195, 92, 1);
//   border-radius: 100px;
//   width: 50px;
//   height: 20px;
//   color: white;
//   font-weight: bold;

//   :hover {
//     background: rgba(41, 204, 151, 1);
//     transition: 0.5s;
//   }
// `

// const Form = styled.form`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   margin-left: 24px;
//   margin-top: 5px;
//   max-width: 400px;
// `

// const SelectionContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `

const AddButton = styled.button`
  background: rgba(4, 195, 92, 1);
  border-radius: 100px;
  width: 150px;
  height: 20px;
  color: white;
  font-weight: bold;
  margin-top: 5px;
  
  :hover {
    background: rgba(41, 204, 151, 1);
    transition: 0.5s;
  }
`

const MovementsHeader = () => {
  const [formDisplay, setFormDisplay] = useState(false)

  return (
    <Container>
      <MovementForm formDisplay={formDisplay} onClose={() => setFormDisplay(false)} />
      <div>
        <Title>Movimientos</Title>
        {/* <Form>
          <SelectionContainer>
            <Select name='month' id='initial_month'>
              <option value='march'>Marzo</option>
              <option value='april'>Abril</option>
            </Select>
            <Select name='year' id='initial_year'>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
            </Select>
          </SelectionContainer>
          -
          <SelectionContainer>
            <Select name='month' id='finish_month'>
              <option value='march'>Marzo</option>
              <option value='april'>Abril</option>
            </Select>
            <Select name='year' id='finish_year'>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
            </Select>
          </SelectionContainer>
          <Button type='button'>Ir</Button>
        </Form> */}
      </div>
      <AddButton type='button' onClick={() => setFormDisplay(true)}>Crear movimiento</AddButton>
    </Container>
  )
}

export default MovementsHeader
