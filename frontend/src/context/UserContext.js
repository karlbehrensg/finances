import React, { useEffect, useState } from 'react'
import getMovements from '../services/getMovements'
import getSummary from '../services/getSummary'
import getDebts from '../services/getDebts'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [debts, setDebts] = useState([])
  const [summary, setSummary] = useState([])
  const [movements, setMovements] = useState([])
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) {
      setMovements([])
      setSummary([])
      setDebts([])
    }
    getMovements({ jwt }).then(setMovements)
    getSummary({ jwt }).then(setSummary)
    getDebts({ jwt }).then(setDebts)
  }, [jwt])

  return (
    <Context.Provider value={{
      debts,
      summary,
      movements,
      jwt,
      setDebts,
      setSummary,
      setMovements,
      setJWT
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
