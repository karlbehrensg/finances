import React from 'react'
import styled from 'styled-components'
import MovementDetail from './MovementDetail'

const Container = styled.div`
  display: flex;
  margin-top: 28px;
  width: 100%;
  justify-content: center;
  margin-bottom: 27px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border-bottom: 1px solid rgba(159,162,180,0.2);
    padding: 0.25rem;
    text-align: center;
  }

  td {
    height: 40px;
  }
`

const MovementsTable = () => {
  return (
    <Container>
      <Table>
        <tr>
          <th>Fecha</th>
          <th>Agente</th>
          <th>Flujo</th>
          <th>Monto</th>
          <th>Categoria</th>
          <th>Detalle</th>
        </tr>
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />
        <MovementDetail date='2020-02-03' name='Ernesto Guerra' flow='Egreso' mount={9.999} category='Tarjeta de Credito' />

      </Table>
    </Container>
  )
}

export default MovementsTable
