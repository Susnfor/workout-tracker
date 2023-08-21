import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
        <Link to="/">
        <img src={logo} className="App-logo" alt="logo" height={30} />
        <h2>Workout Tracker</h2>
        </Link>
            </nav>
        </header>
    </div>
  )
}

export default Navbar