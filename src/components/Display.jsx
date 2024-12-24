import DisplayComputing from '../Images/DisplayComputing.webp'
import DisplayElectronics from '../Images/DisplayElectronics.webp'
import DisplayGroceries from '../Images/DisplayGroceries.jpg'
import DisplayHomeAndKitchen from '../Images/DisplayHomeAndKitchen.webp'
import DisplayMobilePhones from '../Images/DisplayMobilePhones.webp'
import DisplayPower from '../Images/DisplayPower.webp'

const Display = () => {
  
  return (
    <div>
      <div className=' mt-5 ms-3 mb-2 ' style={{width:"1400px"}} >
        <div className='row shadow py-3 mb-3 rounded'>
            <div className='col-lg-2 col-md-2 col-4 mb-sm-0 mb-4' role='button'>
                <img src={DisplayComputing} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2 col-md-2 col-4 ' role='button'>
                <img src={DisplayElectronics} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2 col-md-2 col-4' role='button'>
                <img src={DisplayPower} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2 col-md-2 col-4' role='button'>
                <img src={DisplayGroceries} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2 col-md-2 col-4' role='button'>
                <img src={DisplayHomeAndKitchen} alt="" className='w-100'/>
            </div>
            <div className='col-lg-2 col-md-2 col-4' role='button'>
                <img src={DisplayMobilePhones} alt="" className='w-100'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Display
