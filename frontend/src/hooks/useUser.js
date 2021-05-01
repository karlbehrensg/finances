import { useContext, useCallback, useState } from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login'

const useUser = () => {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback(({ username, password }) => {
    loginService({ username, password })
      .then(jwt => {
        window.localStorage.setItem('jwt', jwt)
        setJWT(jwt)
      })
      .catch(err => {
        window.localStorage.removeItem('jwt')
        console.error(err)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}

export default useUser
