import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt,FaInstagram,FaFacebookF  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrApple } from "react-icons/gr";
import { BsAndroid2,BsYoutube,BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
    <div className="Footer-top text-light  ">  
      <div className="Footer-top-main mt-5 text-light d-flex ">
        <div className="Footer-top-logo mt-4 ">
        <IoMdMail />
        </div>
        <div className='Footer-top-text mb-3  mx-3  mt-2 me-5 '>
        <a href="#"><h3 className='Footer-text mt-2 mb-2 '>Email Support</h3> <p>help@konga.com</p></a>
        </div>
        <div className="Footer-top-logo mt-4">
        <FaPhoneAlt />
        </div>
        <div className='Footer-top-text mb-3  mx-3  mt-2 me-5'>
        <a href="#"><h3 className='Footer-text mt-2 mb-2 '>Phone Support</h3> <p>0708 063 5700, 0201 888 3435</p></a>
        </div>
        <div className="Footer-top-logo mt-4 ">
        <FaWhatsapp />
        </div>
        <div className='Footer-top-text mb-3  mx-3  mt-2 me-5'>
        <a href="#"><h3 className='Footer-text mt-2 mb-2 '> Whatsapp</h3> <p>0907 0038 400, 0809 460 5555</p></a>
        </div>
        <div className='Footer-top-text mb-3  mx-3  mt-2 me-5  ms-auto'>
        <a href="#"><h3 className='Footer-top-text mt-2 mb-2 '> Get Latest Deals</h3> <p>Our best promotions sent to your inbox.</p></a>
      </div>
      <div className="Footer-input mt-3 mb-2 ">
        <input type="text" placeholder='Email Address' className='Footer-input-area p-2'/>
        <button className=' Footer-button btn text-info'><h4>Subscribe</h4></button>
      </div>
    </div>
    </div>
    <div className="Footer-bottom d-flex">
      
    <div className="Footer-main-bottom p-3 mt-3  ">
        <div className="d-flex Footer-list">
            <div className='col'>
              <ul className='list-unstyled '>
                <li><a href="#" className='Footer-bottom-head'><h4>About Konga</h4></a></li>
                <li><a href="#" >Contact Us</a></li>
                <li><a href="#" >About Us</a></li>
                <li><a href="#" >Careers</a></li>
                <li><a href="#" >Our Blog</a></li>
                <li><a href="#" >Forum</a></li>
                <li><a href="#" >Terms & Conditions</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='Footer-bottom-list list-unstyled'>
                <li><a href="#" className='Footer-bottom-head'><h4>Payment</h4></a></li>
                <li><a href="#" >Konga Pay</a></li>
                <li><a href="#" >Wallet</a></li>
                <li><a href="#" >Visa</a></li>
                <li><a href="#" >Verve</a></li>
                <li><a href="#" >Mastercard</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='Footer-bottom-list list-unstyled'>
                <li><a href="#" className='Footer-bottom-head'><h4>Buying On Konga</h4></a></li>
                <li><a href="#" >Buyer Safety Centre</a></li>
                <li><a href="#" >FAQs</a></li>
                <li><a href="#" >Delivery</a></li>
                <li><a href="#" >Konga Return Policy</a></li>
                <li><a href="#" >Digital Services</a></li>
                <li><a href="#" >Bulk Purchase</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='Footer-bottom-list list-unstyled'>
                <li><a href="#" className='Footer-bottom-head'><h4>More info</h4></a></li>
                <li><a href="#" >Site Map</a></li>
                <li><a href="#" >Track My Order</a></li>
                <li><a href="#" >Privacy Policy</a></li>
                <li><a href="#" >Authentic Items Policy</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='Footer-bottom-list list-unstyled'>
                <li><a href="#"className='Footer-bottom-head'><h4>Make Money On Konga</h4></a></li>
                <li><a href="#">Become A Konga Affiliate</a></li>
              </ul>
            </div>
      <div className='Footer-main-connect'>
            <div className="Footer-bottom-connect d-flex">
              
              <div className="Footer-bottom-store bg-black d-flex mx-4">
              <div className="Footer-store-logo mb-2 me-3">
              <GrApple />
                </div>
                <div className='Footer-store-text  '>
                <a href="#"> <p>Download on</p><h3 className='Footer-text  '>App store</h3> </a>
                </div>
                </div>
        
                
              <div className="Footer-bottom-store bg-black d-flex">
              <div className="Footer-store-logo mb-2 me-3 ">
                <BsAndroid2 />
                </div>
                <div className='Footer-store-text  '>
                <a href="#"> <p>Download on</p><h3 className='Footer-text mt-0 '>Google play</h3> </a>
                </div>
                </div>
              </div>
              
        <div className="Footer-connect mt-3 ms-4">
          <h4>Connect with us</h4>
          <div className="Footer-social d-flex">
            <a href="#" className='social-icon me-3'><FaFacebookF /></a>
            <a href="#" className='social-icon me-3'><BsTwitterX /></a>
            <a href="#" className='social-icon me-3'><FaInstagram /></a>
            <a href="#" className='social-icon me-3'><BsYoutube /></a>
          </div>
          
        </div>
        </div>  

        </div>
        
        <div className='Footer-copyright text-center mt-5  d-flex align-items-center justify-content-center'>
          <div className='Footer-line  mb-3'></div>
          <div className='Footer-line-text '>
          <p> Copyright &copy; 2024 Konga.com. All Rights Reserved.</p>
          </div>
          <div className='Footer-line mb-3 '></div>
        </div>

        
      </div>

    </div>
    
    </div> 
    
  
  )
}

export default Footer
