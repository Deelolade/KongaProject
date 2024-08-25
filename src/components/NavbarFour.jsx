import React from 'react'
import KongaBlogNav from '../images/KongaBlogNav.webp'
import PayBillsNav from '../images/PayBillsNav.webp'
import OfflineStoreNav from '../images/OfflineStoreNav.webp'
import BrandStoresNav from '../images/BrandStoresNav.webp'
import BookFlightsNav from '../images/BookFlightsNav.webp'
import WatchKongaTvNav from '../images/WatchKongaTvNav.webp'

const NavbarFour = () => {
  return (
    <div>
      <div className='container-fluid mt-5'>
        <div className='row text-center'>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={KongaBlogNav} alt="" className='w-75'/>
                </div>
            </div>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={PayBillsNav} alt="" className='w-75'/>
                </div>
            </div>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={OfflineStoreNav} alt="" className='w-75'/>
                </div>
            </div>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={BrandStoresNav} alt="" className='w-75'/>
                </div>
            </div>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={BookFlightsNav} alt="" className='w-75'/>
                </div>
            </div>
            <div className='col-xl-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={WatchKongaTvNav} alt="" className='w-75'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarFour
