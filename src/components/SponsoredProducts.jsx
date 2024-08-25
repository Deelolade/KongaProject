import React from 'react'
import Sp5HpHighest from '../images/Sp5HpHighest.webp'
import SpAmericanFitness from '../images/SpAmericanFitness.webp'
import SpCloudInverter from '../images/SpCloudInverter.webp'
import SpEveningPrimrose  from '../images/SpEveningPrimrose.webp'
import SpFisherbrand from '../images/SpFisherbrand.webp'
import SpGoldenSix from '../images/SpGoldenSix.webp'
import SpJoola from '../images/SpJoola.webp'
import SpKingsCapsule from '../images/SpKingsCapsule.webp'
import SpRubberDumbbell from '../images/SpRubberDumbbell.webp'
import SpSolarLantern from '../images/SpSolarLantern.webp'

const SponsoredProducts = () => {
  return (
    <div>
      <div className='container-fluid mt-5'>
        <h6 className='fw-bolder'>SPONSORED PRODUCTS</h6>
        <hr/>

        <div className='d-flex overflow-auto mx-auto py-3' style={{width: '1350px'}}>
            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpJoola} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Joola Foldable Indoor Tabl...</h6>
                    <h5 className="card-text fw-bold mt-3">₦475,000 <span className='fs-6 fw-light ms-1'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>550,000</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-4' style={{fontSize: '10px'}}> - 14%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦75,000</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpKingsCapsule} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>King's Capsules - Men Only ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦29,000</h5>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={Sp5HpHighest} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>5hp Highest Standard Com...</h6>
                    <h5 className="card-text fw-bold mt-3">₦2,882,000 <span className='fs-6 fw-light ms-1'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>3,000,000</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-1' style={{fontSize: '10px'}}> -4%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦118,000</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpEveningPrimrose} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Evening Primrose - 0.10kg</h6>
                    <h5 className="card-text fw-bold mt-3">₦34,999</h5>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={ SpAmericanFitness } className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>American Fitness 3 Station ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦1,044,010 <span className='fs-6 fw-light ms-1'>₦</span><span className='fs-6 fw-light text-decoration-line-through'>1,088,220</span><span className='bg-danger-subtle text-danger fw-medium rounded-3 py-1 ms-1' style={{fontSize: '10px'}}> - 4%</span></h5>
                    <p className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦44,210</small></p>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpRubberDumbbell} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Round Head Rubber Dumb...</h6>
                    <h5 className="card-text fw-bold mt-3">₦120,000</h5>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpCloudInverter} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Cloud Energy Home Inverter...</h6>
                    <h5 className="card-text fw-bold mt-3">₦1,564,200</h5>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpSolarLantern} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Solar Lantern</h6>
                    <h5 className="card-text fw-bold mt-3">₦30,250</h5>
                </div>
            </div>

            <div className='card me-4 border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpFisherbrand} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Fisherbrand Isotemp Digital...</h6>
                    <h5 className="card-text fw-bold mt-3">₦495,000</h5>
                </div>
            </div>

            <div className='card border-0 shadow-sm py-3 productsShadows' style={{minWidth: '250px'}} role='button'>
                <img src={SpGoldenSix} className='card-img-top w-75 mx-auto' alt='...' />
                <div className='card-body'>
                    <h6 className='card-title'>Golden Six - Kidney Jealth ...</h6>
                    <h5 className="card-text fw-bold mt-3">₦34,999</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SponsoredProducts
