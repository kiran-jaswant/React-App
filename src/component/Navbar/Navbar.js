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
            <a href='/' className='navbar-menu' ><h1 >Home</h1></a>
            <a href='/about'  className='navbar-menu'><h1>About</h1></a>
            <a href='/contact' className='navbar-menu'><h1 >Contact</h1></a>
            <a href='/books' className='navbar-menu'><h1 >Books</h1></a>

        </div>

    </div>
  )
}

export default Navbar
