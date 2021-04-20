import React from 'react'
import Header from '../containers/Header'
import UserHomeHeader from '../components/UserHomeHeader'
import SummaryCards from '../containers/SummaryCards'
import History from '../containers/History'

const UserHome = () => {
  return (
    <>
      <Header>
        <UserHomeHeader />
      </Header>
      <SummaryCards />
      <History />
    </>
  )
}

export default UserHome
