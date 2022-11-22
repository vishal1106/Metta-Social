import React from 'react'
import Result from './Result'
import Search from './Search'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <div className='heading'>
        <h1>Flight Search Engine</h1>
        </div>
      <Search/>
    </div>
  )
}

export default Home