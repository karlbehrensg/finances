import React from 'react'
import { Route } from 'react-router-dom'
import Layout from './Layout'

const privateRoute = ({ componet: Component, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
        <Layout><Component {...props} /></Layout>
      )}
    />
  )
}

export default privateRoute
