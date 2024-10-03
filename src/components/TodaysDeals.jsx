import React from 'react'
import { CiMobile1 } from "react-icons/ci"
import { BsLaptop } from "react-icons/bs"
import { PiHeadphonesLight } from "react-icons/pi"
import { PiTShirtLight } from "react-icons/pi"
import { HiOutlineGift } from "react-icons/hi2"
import TodaysDealsStarlink from '../images/TodaysDealsStarlink.webp'
import TodaysDealsNexus1200 from '../images/TodaysDealsNexus1200.webp'
import TodaysDealsHp653 from '../images/TodaysDealsHp653.webp'
import TodaysDealsHp652 from '../images/TodaysDealsHp652.webp'
import TodaysDealsHp305 from '../images/TodaysDealsHp305.webp'
import TodaysDealsHp216a from '../images/TodaysDealsHp216a.webp'
import { Link } from 'react-router-dom'

const TodaysDeals = () => {
    return (
    <div>
    <div className='container-fluid mt-5'>
        <div className='todaysDealsHeading rounded-top py-1 text-white d-flex align-items-center justify-content-between'>
        <div className="flex-shrink-0">
            <h4 className="h4 ms-3 fw-bolder fs-2">Today's Deals</h4>
        </div>
        <div className="flex-shrink-0" role="button">
            <Link to="/search" className="text-white ms-5 text-decoration-none position-absolute top-0 mt-2 fw-medium seeAllItems" style={{fontSize: '12px'}}>See All Items</Link>
        </div>
        <div className="curvedIcons d-none d-md-flex faded-icons flex-grow-1 justify-content-around">
        <CiMobile1 className='position-absolute start-0' />
        <BsLaptop />
        <PiHeadphonesLight/>
        <PiTShirtLight />
        <HiOutlineGift />

        <CiMobile1 />
        <BsLaptop />
        <PiHeadphonesLight />
        <PiTShirtLight />
        <HiOutlineGift />

          <CiMobile1 />
          <BsLaptop />
          <PiHeadphonesLight />
          <PiTShirtLight />
          <HiOutlineGift />

          <CiMobile1 />
          <BsLaptop />
          <PiHeadphonesLight />
          <PiTShirtLight />
          <HiOutlineGift />
        </div>
        
        </div>

        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsStarlink} alt="..." className="img-fluid rounded-start w-75"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">Starlink Actuated Standard Kit</p>
                                    <h5 className="card-text fw-bold">₦525,000 <span className='fs-6 fw-light ms-1'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>583,400</span><span className='bg-danger-subtle text-danger fw-medium ms-3 rounded-3 py-1' style={{fontSize: '10px'}}> - 10%</span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}>You save ₦58,400</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsHp653} alt="..." className="img-fluid rounded-start w-75"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">HP Hp 653 Black Original Ink Adv...</p>
                                    <h5 className="card-text fw-bold">₦22,896 <span className='fs-6 fw-light ms-4'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>26,200</span><span className='bg-danger-subtle text-danger fw-medium ms-5 rounded-3 py-1' style={{fontSize: '10px'}}> - 13%</span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}>You save ₦3,304</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsNexus1200} alt="..." className="img-fluid rounded-start w-100"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">Nexus Split Ac 1.5hp Nx-<br/>mssh1200...</p>
                                    <h5 className="card-text fw-bold">₦372,300 <span className='fs-6 fw-light ms-4'> </span><span className='fs-6 fw-light text-decoration-line-through'> </span><span className='bg-danger-subtle text-danger fw-medium ms-5 rounded-3 py-1' style={{fontSize: '10px'}}> </span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}> </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsHp216a} alt="..." className="img-fluid rounded-start w-75"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">HP 216a Cyan Laserjet Toner Cart...</p>
                                    <h5 className="card-text fw-bold">₦83,307 <span className='fs-6 fw-light ms-4'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>94,900</span><span className='bg-danger-subtle text-danger fw-medium ms-5 rounded-3 py-1' style={{fontSize: '10px'}}> - 12%</span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}>You save ₦11,593</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsHp652} alt="..." className="img-fluid rounded-start w-75"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">HP Hp 652 Black Original Ink Adv...</p>
                                    <h5 className="card-text fw-bold">₦23,939 <span className='fs-6 fw-light ms-4'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>27,400</span><span className='bg-danger-subtle text-danger fw-medium ms-5 rounded-3 py-1' style={{fontSize: '10px'}}> - 13%</span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}>You save ₦3,461</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='col-xl-4'>
                    <div className="card mb-3 border border-0 shadow-sm">
                        <div className="row g-0 productsShadows"  role='button'>
                            <div className="col-md-4">
                                <img src={TodaysDealsHp305} alt="..." className="img-fluid rounded-start w-75"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">HP Hp 305 Original Ink Cartridge...</p>
                                    <h5 className="card-text fw-bold">₦16,958 <span className='fs-6 fw-light ms-4'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>19,400</span><span className='bg-danger-subtle text-danger fw-medium ms-5 rounded-3 py-1' style={{fontSize: '10px'}}> - 13%</span></h5>
                                    <p className="card-text"><small className="fw-medium" style={{fontSize: '10px', color: '#33B27B'}}>You save ₦2,442</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default TodaysDeals
