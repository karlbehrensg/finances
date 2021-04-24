import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './containers/Layout'
import { UserHome, Movements, Register, Login } from './pages'
import { GlobalStyle } from './GlobalStyle'

import { UserContextProvider } from './context/UserContext'

import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <UserContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Layout>
            <PrivateRoute exact path='/movements' component={Movements} />
            <PrivateRoute exact path='/' component={UserHome} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
