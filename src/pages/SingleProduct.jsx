import React from 'react'
import image from '../Images/SameDayHp305.webp'
import { RiTruckLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
// import { Link } from 'react-router-dom'

const SingleProduct = () => {
  return (
    <div className="Single-product mx-auto">
        <div  className='main-product mx-auto d-flex'>
        <div className="main-single-product my-5 mx-2 d-flex row " >
        <div className="product-image">
        <img src={image} alt="" width="300"/>
        </div>
        <div className="product-package">

        </div>
        </div>
        <div className="side-product my-5 mx-3 ms-2">
            <div className="side-product-one mb-2 py-3  rounded-2  border">
            <h1 className='ps-3'>Same Day Delivery Available In:</h1>
            <hr />
            <span className='bg-warning p-2 m-2 ms-3 rounded-5 '>Lagos</span>
            <p className='mt-3 ps-3'>Terms and conditions apply</p>
            </div>
            <div className="side-product-two py-3 rounded-2  mb-2">
              <h1 className='ps-3'>Delivery & Returns</h1>
              <hr className='mb-2'/>
            <div className="side-product-two-text d-flex mb-0 ">
              <div className="side-product-two-logo ms-3 ">
              <RiTruckLine  />
              </div>
              <div className="side-product-two-content  ms-3 mb-0 ">
                <h4 className='fw-bolder fs-6'>Delivery</h4>
                <p className='lh-sm mb-1'>Estimated delivery time 1-9 business days</p>
                <p className='lh-sm mb-2 fs-6'>Express Delivery Available</p>
                <p className='lh-sm mb-2' ><strong>For Same-Day-Delivery:</strong> Please place your order before 11AM</p>
                <p className='lh-sm mb-1' ><strong>Next-Day-Delivery:</strong> Orders placed after 11AM will be delievered the next day</p>
                <p className='lh-sm mb-1' ><strong>Note:</strong> Availability may vary by location</p>
              </div>
            </div>
            <hr className='my-1  side-product-rule'/>
            <div className="side-product-two-text d-flex ">
              <div className="side-product-two-logo ms-3">
              <RiShieldStarLine />
              </div>
              <div className="side-product-two-content  ms-3">
                <h4 className='fs-6'>Return Policy</h4>
                <h1 className='fw-bolder'>Guaranteed 7-Day Return Policy</h1>
                <p>For details about return shipping options, please visit - <span style={{color:"#ED017F"}}>Konga Return Policy</span></p>
              </div>
            </div>
            <hr className='my-1 side-product-rule'/>
            <div className="side-product-two-text d-flex ">
              <div className="side-product-two-logo ms-3">
              <BsArrowRepeat />
              </div>
              <div className="side-product-two-content  ms-3">
                <h4 className=' fs-6 mb-1'>Warranty</h4>
                <p>Warranty information unavailable for this item.</p>
              </div>
            </div>
            </div>
            <div className="side-product-three p-3 rounded-2">
              
            </div>
        </div>
    </div>
    
    <div className="bottom-product mx-auto p-5 shadow-sm">
            
    </div>
    </div>
  )
}

export default SingleProduct
