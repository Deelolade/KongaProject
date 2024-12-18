import React from 'react'
import Navbar from './Navbar'
import NavbarTwo from './NavbarTwo.jsx'

const Header = () => {
  return (
    <div className='sticky-top' >
      <Navbar />
      <NavbarTwo />
    </div>
  )
}

export default Header
