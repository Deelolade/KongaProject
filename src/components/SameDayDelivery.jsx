import React from 'react'
import { PiWarningCircle } from "react-icons/pi"
import SameDayFaceMask from '../images/SameDayFaceMask.webp'
import SameDayHp305 from '../images/SameDayHp305.webp'
import SameDayLg from '../images/SameDayLg.webp'
import SameDayNokia105 from '../images/SameDayNokia105.webp'
import SameDayOil from '../images/SameDayOil.webp'
import SameDaySaisho from '../images/SameDaySaisho.webp'
import SameDayStarlink from '../images/SameDayStarlink.webp'
import SameDayStarlinkTwo from '../images/SameDayStarlinkTwo.webp'
import { MdStarRate } from "react-icons/md"
import KongaNow from '../images/KongaNow.png'
import { LiaShippingFastSolid } from "react-icons/lia"

const SameDayDelivery = () => {
  return (
    <div>
      <div className='container-fluid mt-5'>
        <div className='sameDayDeliveryHeading rounded-top py-3 text-dark d-flex'>
            <div className="flex-shrink-0">
                <h5 className="h4 ms-3 fw-bold my-auto">Same Day Delivery (KongaNow)</h5>
            </div>
            <div className="flex-shrink-0">
                <a href="#" className="ms-5 text-decoration-none fw-medium seeAllItemsSameDay" style={{fontSize: '12px', color: '#8F054D'}}>See All Items</a>
            </div>
            <div className='flex-shrink-0'>
                <button className='btn position-absolute end-0 me-4 fw-medium'><PiWarningCircle style={{fontSize: '20px'}}/> T & C Apply</button>
            </div>
        </div>

        <div className='d-flex overflow-auto mx-auto py-3' style={{width: '1350px'}}>
            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button'style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayStarlink} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Starlink Standard Actuated ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦45,600 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>50,700</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 10%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦5,100</small></p>
                    <div className='d-flex'>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <p className='text-muted ms-1 fw-normal' style={{fontSize: '0.8rem'}}>(12 Reviews)</p>
                    </div>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayStarlinkTwo} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Starlink Actuated Standard ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦525,000 <span className='fs-6 fw-light ms-2'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>583,400</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 10%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦58,400</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayFaceMask} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Protective Disposable Face ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦600 <span className='fs-6 fw-light ms-4'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>1,200</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-5' style={{fontSize: '10px'}}> - 50%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦600</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayNokia105} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Nokia 105 Africa Edition - ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦14,300 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>15,900</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 10%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦1,600</small></p>
                    <div className='d-flex'>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <MdStarRate style={{color: '#FBA100', fontSize: '18px'}}/>
                    <p className='text-muted ms-1 fw-normal' style={{fontSize: '0.8rem'}}>(1 Review)</p>
                    </div>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                
                <img src={ SameDayHp305 } className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>HP Hp 305 Original Ink Cart...</h6>
                    <h5 className="card-text fw-bold mt-3">₦16,958 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>19,400</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 10%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦2,442</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayLg} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>LG Aud 1 Sk 40 W, Bluetooth...</h6>
                    <h5 className="card-text fw-bold mt-3">₦70,000 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>105,000</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 33%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦35,000</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDayOil} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Mamador Vegetable Oil-3.5...</h6>
                    <h5 className="card-text fw-bold mt-3">₦8,840 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>10,500</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-5' style={{fontSize: '10px'}}> - 16%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦1,660</small></p>
                </div>
            </div>

            <div className='card border-0 shadow-sm py-3 productsShadows' role='button' style={{minWidth: '250px'}}>
                <div className='rounded-end-5 start-0 w-75 d-flex position-absolute' style={{backgroundColor: '#FCDBED'}}>
                    <img src={KongaNow} alt="" className='py-1 w-50 ms-2'/>
                    <LiaShippingFastSolid className='mt-1 ms-1' style={{fontSize: '1rem', fill: '#980854'}}/>
                </div>
                <img src={SameDaySaisho} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Saisho S-403ss(12) Saisho E...</h6>
                    <h5 className="card-text fw-bold mt-3">₦12,000 <span className='fs-6 fw-light ms-3'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>14,520</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 21%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦2,520</small></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SameDayDelivery
