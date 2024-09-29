import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BsCartX } from "react-icons/bs";



const EmptyCart = () => {
  return (
    <div className="" style={{backgroundColor:"#f2f2f2"}}>
        <Header/>
        <div className="empty-cart-container mt-5">
        <div className='empty-cart p-5 shadow rounded-1'>
        <BsCartX size={70} style={{color:"#ed017f"}} className='m-4'/>
        <h6>Your Cart is empty</h6>
        <p >You have not added any item to your cart</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default EmptyCart
