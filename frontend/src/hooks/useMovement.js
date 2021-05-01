import { useContext, useCallback } from 'react'
import Context from '../context/UserContext'
import createMovementService from '../services/createMovement'
import deleteMovementService from '../services/deleteMovement'
import getMovements from '../services/getMovements'
import getSummary from '../services/getSummary'
import getDebts from '../services/getDebts'

const useMovement = () => {
  const { jwt, setMovements, setSummary, setDebts } = useContext(Context)

  const createMovement = useCallback(({ id, expired, agent, income, amount, category }) => {
    const method = (id) ? 'PUT' : 'POST'

    createMovementService({ jwt, id, expired, agent, income, amount, category, method })
      .then(() => {
        getMovements({ jwt }).then(setMovements)
        getSummary({ jwt }).then(setSummary)
        getDebts({ jwt }).then(setDebts)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const deleteMovement = useCallback(({ id }) => {
    deleteMovementService({ jwt, id })
      .then(() => {
        getMovements({ jwt }).then(setMovements)
        getSummary({ jwt }).then(setSummary)
        getDebts({ jwt }).then(setDebts)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return {
    createMovement,
    deleteMovement
  }
}

export default useMovement
