import React, { useEffect, useState } from 'react'
import getMovements from '../services/getMovements'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [movements, setMovements] = useState([])
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setMovements([])
    getMovements({ jwt }).then(setMovements)
  }, [jwt])

  return (
    <Context.Provider value={{
      movements,
      jwt,
      setMovements,
      setJWT
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
