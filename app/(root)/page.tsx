import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName : "abcd" , lastName:"xyz" ,email:"abcd@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>


        <header>
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"} subtext = "Access and manage your account and transactions efficiently"/>
          <TotalBalanceBox accounts ={[]} totalBanks = {1} totalCurrentBalance = {2000.20}/>
        </header>
        Recent transaction
      </div>
        <RightSidebar user = {loggedIn} transactions={[]} banks={[]}/>
    </section> 
  )
}

export default Home