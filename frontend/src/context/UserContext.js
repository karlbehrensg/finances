import React, { useEffect, useState } from 'react'
import getMovements from '../services/getMovements'
import getResume from '../services/getResume'

const Context = React.createContext({})

export function UserContextProvider ({ children }) {
  const [resume, setResume] = useState([])
  const [movements, setMovements] = useState([])
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'))

  useEffect(() => {
    if (!jwt) return setMovements([])
    getMovements({ jwt }).then(setMovements)
    getResume({ jwt }).then(setResume)
  }, [jwt])

  return (
    <Context.Provider value={{
      resume,
      movements,
      jwt,
      getResume,
      setMovements,
      setJWT
    }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
