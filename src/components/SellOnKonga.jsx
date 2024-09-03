import chats from "../Images/chats.webp"
import communication from "../Images/communication.webp"
import Lowcommission from "../Images/Lowcommission.webp"
import onlinepayment from "../images/onlinepayment.webp"
import onlineshop from "../images/onlineshop.webp"
import safeguard from "../images/safeguard.webp"
import kongaSell from "../images/sell-on-konga.webp"
import sellElectronics from "../Images/sellElectronics.png"
import { useNavigate } from 'react-router-dom';



const SellOnKonga = () => {
    const navigate = useNavigate();

    const handleClick = () => {                 
        navigate('/login');
    };

  return (
    <>
  <div className="overall-container mt-5 mx-auto" style={{background:'#f2f2f2', }}>
     <div className="sales-header mb-5 shadowed-2 bg-white" >
         <div className="sales-header-content py-3 mx-auto "style={{background:'#fff',maxWidth:"1440px",}}>
         <h1 style={{fontSize:"45px",fontWeight:"bolder"}}>Sell On Konga</h1>
         </div>
      </div>
    
    
        <div className="mobile mt-3" style={{background:'#fff', margin:'auto', width:'1440px',}} >
        <div className='sale-container d-flex'>
            <img src={kongaSell} alt="" height={300} className="m-3" />
            <div className='sale-text-contaner p-5 mt-5'>
            <h2 className='mb-3 ms-3' style={{fontSize:"50px",fontWeight:"bolder"}} >Grow your business online</h2>
            <p className='ms-3' style={{fontSize:"20px"}}>Reach millions of buyers in every state in Nigeria easily, get your store on Konga today!</p>
            <button className="register-button rounded-1 mt-3" onClick={handleClick}>
            Register Now
            </button>
            </div>
        </div>
        </div>

        <div className="sales-overall-container mt-3 p-5 pb-0 mb-2" style={{background:'#fff', width:"1440px"}}>
          <h1 className="sales my-3" style={{textAlign:'center',fontSize:"50px",fontWeight:"bolder"}}>Why Sell on Konga?</h1>
          <div className="sell-container">
            <div className="sell-container d-flex">
            <div className="sell">
            <img src={onlineshop} alt="" />
            <h4 className="sales-title mt-3">Earn More Money</h4>
            <p className="sales-text " > Konga is one of the largest websites in Nigeria. Sell to over 50 million buyers across every state in Nigeria</p>
            </div>
            <div className="sell">
            <img src={communication} alt="" />
            <h4 className="sales-title mt-3">Communication is Easy</h4>
            <p className="sales-text">We make it easy to exchange messages with buyers who may have questions.</p>
            </div>
            <div className="sell">
            <img src={Lowcommission} alt="" />
            <h4 className="sales-title mt-3">Low Commissions</h4>
            <p className="sales-text">Commission fees are as low as 3%, and you only pay when you successfully sell your product.</p>
            </div>
          </div>

          <div className="sell-container d-flex my-5">
           <div className="sell">
          <img src={chats} alt="" />
            <h4 className="sales-title mt-3">You Have Our Support 24/7</h4>
            <p className="sales-text">Konga provides various tools to increase your success including: our online SellerHQ and our dedicated merchant   support teams.</p>
            </div>
            <div className="sell">
            <img src={onlinepayment} alt="" />
            <h4 className="sales-title mt-3">You’re in Control</h4>
            <p className="sales-text">You choose the price for your return policy, your delivery method on paid orders, and other important options.</p>
            </div>
            <div className="sell">
            <img src={safeguard}  alt="" />
            <h4 className="sales-title mt-3">We Make Sure It’s Safe</h4>
            <p className="sales-text">Konga is the safest and most trusted platform to buy and sell online in Nigeria. We’ve built a community that takes safety & security seriously for both buyers and sellers.</p>
            </div>
          </div>
          </div>
          </div>

      <div className="earn-money-container d-flex mx-auto"style={{ background:'#fff', width:'1440px', height:'220px'}}>
      <div className="earn-money m-5 p-3 ">
      <h1 style={{fontSize:"45px",fontWeight:"bolder"}}>Earn Money, Hassle Free</h1>
            <button className="register-button rounded-1" onClick={handleClick}>
            Register Now
            </button>
      </div>
      <div className="ms-auto">
      <img src={sellElectronics} alt="" className="m-5 ms-auto" style={{height:'200px', }} />
      </div>
      </div>
  </div>
  </>
  )
}


export default SellOnKonga
