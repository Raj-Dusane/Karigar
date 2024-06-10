import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './Navbar.css'
import Home_pg from '../home/Home_pg';
import Login from '../login/Login';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {

  // const navigate = useNavigate()

  // const gotToLogin=()=>{
  //   navigate("/login");
  // }

  return (
    <nav className='container'>
        <img src={logo} alt="Karigar" className='logo'/>
        <ul>
            {/* <li> <Link to="/"> Home </Link></li> */}
            <li>Home </li>
            <li>Explore</li>
            <li>Marketplace</li>
            <li>About</li>
            <li>Contact</li>
            <li> <button>Login</button></li>
            {/* <li> <button onClick={()=> gotToLogin()}><Link to='/login'> Login </Link> </button></li> */}
        </ul>
        {/* <Routes>
          <Route path='/' element = {<Home_pg/>} />
          <Route path='/login' element = {<Login/>} />
        </Routes> */}
    </nav>
  )
}

export default Navbar