import { useContext, useCallback } from 'react'
import Context from '../context/UserContext'
import createMovementService from '../services/createMovement'
import deleteMovementService from '../services/deleteMovement'
import getMovements from '../services/getMovements'
import getSummary from '../services/getSummary'

const useMovement = () => {
  const { jwt, setMovements, setSummary } = useContext(Context)

  const createMovement = useCallback(({ id, expired, agent, income, amount, category }) => {
    const method = (id) ? 'PUT' : 'POST'

    createMovementService({ jwt, id, expired, agent, income, amount, category, method })
      .then(() => {
        getMovements({ jwt }).then(setMovements)
        getSummary({ jwt }).then(setSummary)
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
