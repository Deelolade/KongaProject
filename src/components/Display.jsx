import React from 'react'
import DisplayComputing from '../images/DisplayComputing.webp'
import DisplayElectronics from '../images/DisplayElectronics.webp'
import DisplayGroceries from '../images/DisplayGroceries.jpg'
import DisplayHomeAndKitchen from '../images/DisplayHomeAndKitchen.webp'
import DisplayMobilePhones from '../images/DisplayMobilePhones.webp'
import DisplayPower from '../images/DisplayPower.webp'

const Display = () => {
  
  return (
    <div>
      <div className=' container mt-5' >
        <div className='row shadow py-3 mb-3 rounded'>
            <div className='col-lg-2' role='button'>
                <img src={DisplayComputing} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2' role='button'>
                <img src={DisplayElectronics} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2' role='button'>
                <img src={DisplayPower} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2' role='button'>
                <img src={DisplayGroceries} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2' role='button'>
                <img src={DisplayHomeAndKitchen} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2' role='button'>
                <img src={DisplayMobilePhones} alt="" className='w-100'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Display
