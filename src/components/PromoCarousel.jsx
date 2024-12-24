import ClearanceSale from '../Images/ClearanceSale.jpeg'
import ContactUs from '../Images/ContactUs.jpeg'
import HomeEssentials from '../Images/HomeEssentials.jpg'
import ItecGens from '../Images/ItecGens.png'
import IpowerEnergy from '../Images/IpowerEnergy.jpg'
import StarlinkSatellite from '../Images/StarlinkSatellite.jpg'
import CeraVe from '../Images/CeraVe.jpeg'
import AccessPlus from '../Images/AccessPlus.jpeg'
import BulkDeals from '../Images/BulkDeals.jpg'
import KongaApp from '../Images/KongaApp.jpeg'

const PromoCarousel = () => {
  const CarouselHeight = {
    height: '50vh'
  }
  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='row mx-auto'>
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
                    <img src={ClearanceSale} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
                  </div>
                  <div className="carousel-item">
                    <img src={ContactUs} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
                  </div>
                  <div className="carousel-item">
                    <img src={HomeEssentials} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
                  </div>
                  <div className="carousel-item">
                    <img src={ItecGens} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
                  </div>
                  <div className="carousel-item">
                    <img src={IpowerEnergy} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
                  </div>
                  <div className="carousel-item">
                    <img src={StarlinkSatellite} className="d-block w-100 img-fluid rounded" alt="..." style={CarouselHeight} />
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
          <div className='col-xl-4 mx-auto'>
            <div className='promoCarouselAdBar '>
              <div className='row mb-3 ms-auto my-md-3 my-lg-2 mx-auto'>
                <div className='col-xl-6 col-md-3 my-2 my-sm-0'>
                  <a href="#"><img src={CeraVe} className='w-100 rounded' alt='CeraVe' style={{ height: '23.7vh' }} /></a>
                </div>
                <div className='col-xl-6 col-md-3 my-2 my-sm-0'>
                  <a href="https://xclusiveplus.accessbankplc.com/xclusiveplus" target="_blank" rel="noopener noreferrer"><img src={AccessPlus} className='w-100 rounded' alt='AccessPlus' style={{ height: '23.7vh' }} /></a>
                </div>

                <div className='col-xl-6 col-md-3 mt-lg-2 my-2 my-sm-0'>
                  <a href="#"><img src={BulkDeals} className='w-100 rounded' alt='' style={{ height: '23.7vh' }} /></a>
                </div>
                <div className='col-xl-6 col-md-3 mt-lg-2 my-2 my-sm-0'>
                  <a href="https://www.kongapay.com/" target="_blank" rel="noopener noreferrer"><img src={KongaApp} className='w-100 rounded' alt='' style={{ height: '23.7vh' }} /></a>
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
