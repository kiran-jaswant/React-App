import React from 'react'
import './Navbar.css'
import logo from './books.png'

function Navbar() {
  return (
    <div className='nav-body'>
        <div className='nav-header'>
        <img src={logo} className='logo'></img>
        <h1 className='library'>Library</h1>
        </div>
        <div className='navbar-items'>
            <h1 className='navbar-menu'>Home</h1>
            <h1 className='navbar-menu'>About</h1>
            <h1 className='navbar-menu'>Contact</h1>
            <h1 className='navbar-menu'>Books</h1>

        </div>

    </div>
  )
}

export default Navbar
