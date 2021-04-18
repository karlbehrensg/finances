import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UserHome, Movements, Register, Login } from './pages'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={UserHome} />
      <Route exact path='/movements' component={Movements} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Router>
  )
}

export default App
