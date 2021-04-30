import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 2000;
`

const Form = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #363740;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 8px;
  width: 350px;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const DeleteButton = styled.button`
  background: rgba(241, 43, 44, 1);
  border-radius: 100px;
  width: 80px;
  height: 22px;
  color: white;
  font-weight: bold;
  margin: 5px 0 0 10px;
  
  :hover {
    background: rgba(255, 69, 70, 1);
    transition: 0.5s;
  }
`

const CancelButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 100px;
  width: 80px;
  height: 22px;
  color: white;
  font-weight: bold;
  margin: 5px 0 0 10px;
  
  :hover {
    background: rgba(255, 69, 70, 1);
    transition: 0.5s;
  }
`

const Message = styled.h4`
  color: rgba(255, 255, 255, 1);
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const ConfirmDelete = ({ display, onClose, onCloseDetail, idMovement }) => {
  if (!display) return null

  const [id, setId] = useState(null)

  useEffect(() => {
    setId(idMovement)
  }, [])

  const handleSubmit = (e) => {
    console.log(`borrar ${id}`)
    onClose()
    onCloseDetail()
  }

  return ReactDOM.createPortal(
    <Container>
      <Form>
        <Row>
          <Message>Seguro quieres borrar este movimiento?</Message>
        </Row>
        <Row>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <DeleteButton onClick={handleSubmit}>Eliminar</DeleteButton>
        </Row>
      </Form>
    </Container>,
    document.getElementById('portalConfirm')
  )
}

export default ConfirmDelete
