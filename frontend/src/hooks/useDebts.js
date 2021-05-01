import { useContext, useCallback } from 'react'
import Context from '../context/UserContext'
import getDebtsService from '../services/getDebts'
import getMovements from '../services/getMovements'

const useMovement = () => {
  const { jwt, setDebts } = useContext(Context)

  const getDebts = useCallback(() => {
    getDebtsService({ jwt })
      .then(() => {
        getMovements({ jwt }).then(setDebts)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return {
    getDebts
  }
}

export default useMovement
