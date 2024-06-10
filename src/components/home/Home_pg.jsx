import React from 'react'
import search from '../../assets/search.png'
import './Home_pg.css'

const Home_pg = () => {
  return (
    <>
      <div className='home '>
        <div className="searchBarText font-bold">
          
          <h2>Find and Hire skilled worker near by you</h2>  
          <input className='btn' type='text' placeholder='work' id='name'/>
          <input className='btn' type='text' placeholder='location' id='location'/>
          <button className='btn font-bold'> Search <img src={search} alt="" /> </button>
          
        </div>
      </div>
    </>
  )
}

export default Home_pg
