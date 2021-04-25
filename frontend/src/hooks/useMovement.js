import { useContext, useCallback } from 'react'
import Context from '../context/UserContext'
import createMovementService from '../services/createMovement'

const useMovement = () => {
  const { jwt } = useContext(Context)

  const createMovement = useCallback(({ expired, agent, income, amount, category }) => {
    createMovementService({ jwt, expired, agent, income, amount, category })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return {
    createMovement
  }
}

export default useMovement
