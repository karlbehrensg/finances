import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './containers/Layout'
import { UserHome, Movements, Register, Login } from './pages'
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Layout>
            <Route exact path='/movements' component={Movements} />
            <Route exact path='/' component={UserHome} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
