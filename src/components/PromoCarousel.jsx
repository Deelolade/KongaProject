 import React from 'react'
import ClearanceSale from '../images/ClearanceSale.jpeg'
import ContactUs from '../images/ContactUs.jpeg'
import HomeEssentials from '../images/HomeEssentials.jpg'
import ItecGens from '../images/ItecGens.png'
import IpowerEnergy from '../images/IpowerEnergy.jpg'
import StarlinkSatellite from '../images/StarlinkSatellite.jpg'
import CeraVe from '../images/CeraVe.jpeg'
import AccessPlus from '../images/AccessPlus.jpeg'
import BulkDeals from '../images/BulkDeals.jpg'
import KongaApp from '../images/KongaApp.jpeg'

const PromoCarousel = () => {
  const CarouselHeight={
    height:'50vh'
  }
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-xl-8'>
          <div className='promoCarousel'>
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5" aria-label="Slide 6"></button>
    </div>

      
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ClearanceSale} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
    <div className="carousel-item">
      <img src={ContactUs} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
    <div className="carousel-item">
      <img src={HomeEssentials} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
    <div className="carousel-item">
      <img src={ItecGens} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
    <div className="carousel-item">
      <img src={IpowerEnergy} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
    <div className="carousel-item">
      <img src={StarlinkSatellite} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
      </div>
        </div>
        <div className='col-xl-4'>
          <div className='promoCarouselAdBar'>
            <div className='row mb-3'>
              <div className='col-xl-6'>
              <a href="#"><img src={CeraVe} className='w-100 rounded' alt='CeraVe' style={{height: '23.7vh'}}/></a>
              </div>
              <div className='col-xl-6'>
              <a href="https://xclusiveplus.accessbankplc.com/xclusiveplus" target="_blank" rel="noopener noreferrer"><img src={AccessPlus} className='w-100 rounded' alt='AccessPlus' style={{height: '23.7vh'}}/></a>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-6'>
              <a href="#"><img src={BulkDeals} className='w-100 rounded' alt='' style={{height: '23.7vh'}}/></a>
              </div>
              <div className='col-xl-6'>
              <a href="https://www.kongapay.com/" target="_blank" rel="noopener noreferrer"><img src={KongaApp} className='w-100 rounded' alt='' style={{height: '23.7vh'}}/></a>
              </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default PromoCarousel
