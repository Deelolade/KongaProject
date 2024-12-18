import React from 'react'
import Navbar from './Navbar'
import NavBottom from './NavBottom'
const Header = () => {
  return (
    <div className='sticky-top' >
      <Navbar />
      <NavBottom />
    </div>
  )
}

export default Header
