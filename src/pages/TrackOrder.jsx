import React, { useState } from 'react'
import Logo from"../Images/pinkKongaLogo.png"



const TrackOrder = () => {
    const [trackingId, setTrackingId] = useState('');
    // const [submittedId, setSubmittedId] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(null); 

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const isOrderValid = Number(trackingId); 
        if (isOrderValid >= 1 && isOrderValid <= 32) {
            setAlertType('info');
            // setSubmittedId(trackingId);
            setTrackingId(''); 
            setShowAlert(false);
        } else {
            setAlertType('danger');
        }
    };
return (
        <div className='pt-5' style={{backgroundColor:"#f2f2f"}}>
        <div className='form-image-body my-5'>
        <img src={Logo} alt="Konga Logo" className='signup-image ' />
        </div>
    <div className='' style={{marginTop:"23vh",textAlign:"center" }}>
        <h1 className='fs-2 mb-5'>Track A Package</h1>
        <div className=" bg-white shadow-lg m-auto pt-3" style={{width:"35vw",height:"8vh",textAlign:"center"}} >
        <input type="text"placeholder='Your tracking Number' onChange={(e) => setTrackingId(e.target.value)}  value={trackingId} required style={{border:"none",height:"30px", width:"32rem",fontSize:"20px"}} className='ms-0 pt-2' />
        <button className='btn  px-4 py-2 rounded-1 fw-bold text-light' style={{backgroundColor:"#33B27B"}} onClick={handleSubmit } >Track</button>
        {alertType === 'info' && (
                <div className="alert alert-info alert-dismissible fade show mt-4" role="alert">
                    <button className="btn-close fw-bold text-danger" onClick={() => setAlertType(null)}></button>
                    <p className='me-5 text-info' style={{ textAlign: "left" }}>Congratulations! Order in progress...</p>
                </div>
            )}
            {alertType === 'danger' && (
                <div className="alert alert-danger alert-dismissible fade show mt-4" role="alert" aria-live="assertive">
                    <button className="btn-close fw-bold text-danger" onClick={() => setAlertType(null)}></button>
                    <p className='me-5 text-danger' style={{ textAlign: "left" }}>Please enter a valid order number.</p>
                </div>
            )}
        </div>
    </div>
    <div className=""  style={{marginTop:"40vh",textAlign:"center" }}>
        <p className='fw-bold'> Help? call <span className='fw-bold' style={{color:"#777"}}>0912 345 6789</span></p>
    </div>

    </div>
)
}

export default TrackOrder
