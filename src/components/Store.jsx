import React from 'react'
import imageOne from '../Images/LgStore.png'
import imageTwo from '../Images/HpStore.png'
import imageThree from '../Images/ItecStore.png'
import imageFour from '../Images/CeraveStore.png'
import imageFive from '../Images/StarlinkStore.jpeg'
import imageSix from '../Images/TecnoStore.png'
import imageSeven from '../Images/TgiStore.png'
import imageEight from '../Images/SamsungStore.png'
import imageNine from '../Images/AppleStore.jpeg'
import imageTen from '../Images/IntelStore.png'
import imageEleven from '../Images/LenovoStore.png'
import imageTwelve from '../Images/VivoStore.png'
import imageThirteen from '../Images/RingStore.png'
import imageFourteen from '../Images/UnileverStore.png'
import imageFifteen from '../Images/ThermocuStore.png'
import imageSixteen from '../Images/InfinixStore.png'
import imageSeventeen from '../Images/NexusStore.png'
import imageEighteen from '../Images/NiveaStore.png'
import ads from '../Images/KidSpecial.jpg'

const Store = () => {
  return (
    <div className='store-body m-3'>
      <div className='store-header '>
        <h3 className='text-center py-2 font-weight-bold store-header-text'>Official Store</h3>
      </div>
      <div className='store-prop-container'>
        <div className='row g-2 my-3 mx-1 text-center '>
        <div className=' Store-image col-md-2 col-3 '>
        < img  src={imageOne} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3 '>
        < img  src={imageTwo} alt=""  />
        </div>

        <div className='Store-image col-md-2 col-3'>
        < img  src={imageThree} alt=""  />
        </div>

        <div className='Store-image col-md-2 col-3'>
        < img  src={imageFour} alt=""  />
        </div>

        <div className='Store-image col-md-2 col-3'>
        < img  src={imageFive} alt=""  />
        </div> 

        <div className='Store-image col-md-2 col-3'>
        < img  src={imageSix} alt=""  />
        </div>

        

    
        <div className= 'Store-image col-md-2 col-3'>
        < img  src={imageSeven} alt=""  />
        </div>

        <div className= 'Store-image col-md-2 col-3'>
        < img  src={imageEight} alt=""  />
        </div>

        <div className='Store-image col-md-2 col-3'>
        < img  src={imageNine} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageTen} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageEleven} alt=""  />
        </div> 

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageTwelve} alt=""  />
        </div>




        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageThirteen} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageFourteen} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageFifteen} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageSixteen} alt=""  />
        </div>

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageSeventeen} alt=""  />
        </div> 

        <div className=' Store-image col-md-2 col-3'>
        < img  src={imageEighteen} alt=""  />
        </div>

        </div>
      </div>

      <div className='store-ads-container' >
      < img  src={ads} alt=""  style={{maxWidth:"1400px"}}/>
      </div>
    </div>
  )
}

export default Store
