import React from 'react'
import Header from '../containers/Header'
import UserHomeHeader from '../components/UserHomeHeader'
import SummaryCards from '../containers/SummaryCards'

const UserHome = () => {
  return (
    <>
      <Header>
        <UserHomeHeader />
      </Header>
      <SummaryCards />
    </>
  )
}

export default UserHome
