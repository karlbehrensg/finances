import { useContext, useCallback, useState } from 'react'
import Context from '../context/UserContext'
import loginService from '../services/login'

const useUser = () => {
  const { jwt, setJWT } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.localStorage.setItem('jwt', jwt)
        setState({ loading: false, error: false })
        setJWT(jwt)
      })
      .catch(err => {
        window.localStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.isLoginLoading,
    hasLoginError: state.error,
    login,
    logout
  }
}

export default useUser
