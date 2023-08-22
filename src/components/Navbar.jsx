import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className='nav'>
        <Link to="/">
          <nav>
            <div className='nav-logo'>
        <img src={logo} className="App-logo" alt="logo" height={30} />
        <h2>Workout Tracker</h2>
        </div>
        <p>Track your workouts!</p>
        </nav>
        </Link>
            </div>
        </header>
    </div>
  )
}

export default Navbar