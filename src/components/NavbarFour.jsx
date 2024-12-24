import KongaBlogNav from '../Images/KongaBlogNav.webp'
import PayBillsNav from '../Images/PayBillsNav.webp'
import OfflineStoreNav from '../Images/OfflineStoreNav.webp'
import BrandStoresNav from '../Images/BrandStoresNav.webp'
import BookFlightsNav from '../Images/BookFlightsNav.webp'
import WatchKongaTvNav from '../Images/WatchKongaTvNav.webp'

const NavbarFour = () => {
  return (
    <div>
      <div className='container-fluid mt-5 mt-md-2 mt-lg-5'>
        <div className='row text-center'>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={KongaBlogNav} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={PayBillsNav} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={OfflineStoreNav} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={BrandStoresNav} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={BookFlightsNav} alt="" className='w-100'/>
                </div>
            </div>
            <div className='col-xl-2 col-md-2'>
                <div className='navbarFour shadow-sm py-2 rounded border-light border-opacity-75' role="button">
                <img src={WatchKongaTvNav} alt="" className='w-100'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarFour
