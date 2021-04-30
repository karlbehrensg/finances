import React, { useEffect, useState } from 'react'
import getMovements from '../services/getMovements'
import getSummary from '../services/getSummary'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [summary, setSummary] = useState([])
  const [movements, setMovements] = useState([])
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setMovements([])
    getMovements({ jwt }).then(setMovements)
    getSummary({ jwt }).then(setSummary)
  }, [jwt])

  return (
    <Context.Provider value={{
      summary,
      movements,
      jwt,
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
