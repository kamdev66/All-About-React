import React from 'react'
import './NavBarTwo.css'
import {NavLink} from 'react-router-dom'

function NavBarTwo() {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    </div>
  )
}

export default NavBarTwo