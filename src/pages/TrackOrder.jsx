import React from 'react'
import Logo from"../Images/pinkKongaLogo.png"


const TrackOrder = () => {
  return (
        <div className='pt-5' style={{backgroundColor:"#f2f2f"}}>
        <div className='form-image-body my-5'>
        <img src={Logo} alt="Konga Logo" className='signup-image ' />
        </div>
    <div className='' style={{marginTop:"23vh",textAlign:"center" }}>
        <h1 className='fs-2 mb-5'>Track A Package</h1>
        <div className=" bg-white shadow-lg m-auto pt-3" style={{width:"35vw",height:"8vh",textAlign:"center"}} >
        <input type="text"placeholder='Your tracking Number'  style={{border:"none",height:"30px", width:"32rem",fontSize:"20px"}} className='ms-0 pt-2' />
        <button className='btn  px-4 py-2 rounded-1 fw-bold text-light' style={{backgroundColor:"#33B27B"}}>Track</button>
        </div>
    </div>
    <div className=""  style={{marginTop:"40vh",textAlign:"center" }}>
        <p className='fw-bold'> Help? call <span className='fw-bold' style={{color:"#777"}}>0912 345 6789</span></p>
    </div>

    </div>
  )
}

export default TrackOrder
