import { useContext, useCallback } from 'react'
import Context from '../context/UserContext'
import createMovementService from '../services/createMovement'

const useMovement = () => {
  const { jwt } = useContext(Context)

  const createMovement = useCallback(({ id, expired, agent, income, amount, category }) => {
    const method = (id) ? 'PUT' : 'POST'

    createMovementService({ jwt, id, expired, agent, income, amount, category, method })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return {
    createMovement
  }
}

export default useMovement
