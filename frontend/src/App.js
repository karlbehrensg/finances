import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import { UserHome, Movements, Register, Login } from './pages'
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Route exact path='/' component={UserHome} />
          <Route exact path='/movements' component={Movements} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Layout>
      </Router>
    </>
  )
}

export default App
