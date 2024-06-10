import React from 'react'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Home_pg from './components/home/Home_pg'
import Customer from './components/customer/Customer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home_pg/> 
      <div className="container">
        <Customer/>
      </div>
      <Login/>
    </>
  )
}

export default App