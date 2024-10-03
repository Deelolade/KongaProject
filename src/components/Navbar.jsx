import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import KongaLogo from '../Images/KongaLogo.png'
import { MdShoppingCart } from "react-icons/md"
import { FaShoppingCart } from 'react-icons/fa';
import { RiQuestionFill } from "react-icons/ri";
import { useCart } from '../components/ContextProvider'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { getTotalItems } = useCart();const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
    <div  className=' container-fluid ' style={{backgroundColor:"#ed017f", width:"100vw"}}>
        <nav className="navbar navbar-expand-sm" style={{margin:"auto"}}>
  <div className="container-fluid">
    <Link to='/'><img src={KongaLogo} alt="" className='me-5' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <ul>
        <li className="nav-item">
          <Link to='/storelocator' className="nav-link active " aria-current="page">Store Locator</Link>
        </li>
        <li className="nav-item">
          <Link to='/sellonkonga' className="nav-link " >Sell on Konga</Link>
        </li>
        </ul> <form className="d-flex mx-auto" role="search" onSubmit={handleSubmit}>
        <input className="form-contro" type="search" placeholder="Search for products,brands and categories..." aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

        <button type="submit"><AiOutlineSearch /> </button>
      </form>

      <ul>
      <div className="nav-item dropdown">
      <Link to="#" className="nav-link dropdown-toggle" id="helpDropdown" role="button">
      <RiQuestionFill size={20} />
        Help
      </Link>
      <div className="dropdown-menu" aria-labelledby="helpDropdown">
        <Link to="#" className="dropdown-item">FAQs</Link>
        <Link to="#" className="dropdown-item">Contact Us</Link>
        <Link to="#" className="dropdown-item">Track My Order</Link>
        <Link to="#" className="dropdown-item">Konga Return Policy</Link>
      </div>
    </div>

        <li className="nav-item">
          <Link to='/login' className="nav-link " aria-current="page">Login/SignUp</Link>
        </li>
        </ul>

        <span className='cart-icon'><Link to="/shoppingcart" className="nav-link d-flex align-items-center position-relative rounded-1 cart-icon" style={{backgroundColor:'#2D9E6D',color:'white',padding:'.6rem .4rem'  }}>
              <FaShoppingCart size={20} />
              <span className="ms-1">My Cart</span>
              <span className="badge bg-white ms-2" style={{ fontSize: '0.9rem', padding: '0.3em 0.4rem',color:'black'}}>
                {getTotalItems()}
              </span>
            </Link></span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar