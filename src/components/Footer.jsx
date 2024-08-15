import React from 'react'
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
    <div>
      <div className="Footer-top mt-5 p-5 bg-black text-light d-flex">
        <div className='d-flex'>
        <IoMdMail />
        <h4>Email Support</h4>
        <a href="#">contact@example.com</a>
        </div>
        <><h4>Phone Support</h4></>
      </div>
    </div>
  )
}

export default Footer
