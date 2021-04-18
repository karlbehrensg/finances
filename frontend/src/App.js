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
        <Layout>
          <Switch>
            <Route exact path='/' component={UserHome} />
            <Route exact path='/movements' component={Movements} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
