import chats from "../Images/chats.webp"
import communication from "../Images/communication.webp"
import Lowcommission from "../Images/Lowcommission.webp"
import onlinepayment from "../Images/onlinePayment.webp"
import onlineshop from "../Images/onlineshop.webp"
import safeguard from "../Images/safeguard.webp"
import kongaSell from "../Images/sell-on-konga.webp"
import sellElectronics from "../Images/sellElectronics.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'



const SellOnKonga = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="Sell-on-Konga">
      <Header />
      <div className='path-container mx-auto p-3 ' style={{ maxWidth: "1440px", }}>
        <div className='shop-path'>
          <Link className='home-shop-path' to="/">Home</Link>
          <span className="px-1"> <FaChevronRight color='gray' size={10} /></span>
          <Link className='shop-shop-path' to="/sellonkonga">Sell on Konga</Link>

        </div>
        <div className='shop-text'>
          <p>Sell On Konga</p>
        </div>
      </div>
      <div className="overall-container pt-3  mx-auto pb-5" style={{ background: '#f2f2f2', }}>
        <div className="mobile mt-3" style={{ background: '#fff', margin: 'auto', width: '1440px', }} >
          <div className='sale-container d-flex row justify-content-center align-items-center'>
            <img src={kongaSell} alt="" height={300} className="m-3  col-md-4 col-lg-4" />
            <div className='sale-text-container p-5 mt-0 mt-sm-5 mt-md-0 col-md-7 col-lg-7'>
              <h2 className='mb-3 ms-3' >Grow your business online</h2>
              <p className='ms-3'>Reach millions of buyers in every state in Nigeria easily, get your store on Konga today!</p>
              <button className="register-button rounded-1 mt-3" onClick={handleClick}>
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="sales-overall-container mt-3 p-5 p-3 mb-2" style={{ background: '#fff', width: "1440px" }}>
          <h1 className="sales my-3 " >Why Sell on Konga?</h1>
          <div className="sell-container row">
            <div className="sell-container d-flex row">
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={onlineshop} alt="" />
                <h4 className="sales-title mt-3">Earn More Money</h4>
                <p className="sales-text " > Konga is one of the largest websites in Nigeria. Sell to over 50 million buyers across every state in Nigeria</p>
              </div>
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={communication} alt="" />
                <h4 className="sales-title mt-3">Communication is Easy</h4>
                <p className="sales-text">We make it easy to exchange messages with buyers who may have questions.</p>
              </div>
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={Lowcommission} alt="" />
                <h4 className="sales-title mt-3">Low Commissions</h4>
                <p className="sales-text">Commission fees are as low as 3%, and you only pay when you successfully sell your product.</p>
              </div>
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={chats} alt="" />
                <h4 className="sales-title mt-3">You Have Our Support 24/7</h4>
                <p className="sales-text">Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant   support teams.</p>
              </div>
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={onlinepayment} alt="" />
                <h4 className="sales-title mt-3">You’re in Control</h4>
                <p className="sales-text">You choose the price for your return policy, your delivery method on paid orders, and other important options.</p>
              </div>
              <div className="sell col-lg-4 col-md-6 my-md-2 col-12">
                <img src={safeguard} alt="" />
                <h4 className="sales-title mt-3">We Make Sure It’s Safe</h4>
                <p className="sales-text">Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="earn-money-container  mx-auto row p-md-3 " style={{ background: '#fff', width: '1440px', height: 'auto' }}>
          <div className="earn-money m-2 m-md-5 p-3 mx-md-0 col-12 col-md-5 ">
            <h1 style={{ fontWeight: "bolder" }}>Earn Money, Hassle Free</h1>
            <button className="register-button rounded-1" onClick={handleClick}>
              Register Now
            </button>
          </div>
          <div className="ms-auto col-12 col-md-6">
            <img src={sellElectronics} alt="" className="m-5 mx-md-0 ms-auto" style={{ height: '200px', }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default SellOnKonga
