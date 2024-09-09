import React from 'react'
import Navbar from './Navbar'
import NavbarTwo from './navbarTwo'

const Header = () => {
  return (
    <div className='fixed-t' >
        <Navbar/>
        <NavbarTwo/>
    </div>
  )
}

export default Header
