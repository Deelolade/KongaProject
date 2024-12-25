import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import KongaLogo from '../Images/KongaLogo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { RiQuestionFill } from "react-icons/ri";
import { useCart } from '../components/ContextProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
    <div className=' '>
      <nav className="navbar navbar-expand-sm">
        <div className=" row  justify-content-sm-center align-items-center justify-content-between mx-sm-auto px-3 px-sm-0 main-nav">
          <div className=' col-sm-1 d-flex '>
            <Link to='/'><img src={KongaLogo} alt="" className='me-5 Logo ' /></Link>
            <button className="navbar-toggler ms-auto position-absolute " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse row  col-11 col-sm-12 col-md-12 col-lg-11 row mt-sm-0 mt-4 mx-auto navbar-collapse justify-content-around" id="navbarSupportedContent">
            <ul className='col-12  col-sm-3  col-md-3 col-lg-3 '>
              <li className="nav-item  col-6">
                <Link to='/storelocator' className="nav-link active px-auto" aria-current="page">Store Locator</Link>
              </li>
              <li className="nav-item col-6">
                <Link to='/sellonkonga' className="nav-link " >Sell on Konga</Link>
              </li>
            </ul>
            <form className="d-flex mx-lg-3 col-12 col-md-4  col-sm-4 col-lg-4 mx-md-1 justify-content-center align-items-center" role="search" onSubmit={handleSubmit}>
              <input className="py-3" type="search" placeholder="Search for products,brands and categories..." aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button type="submit" className='d-flex py-3 justify-content-center align-items-center'><AiOutlineSearch className='' /> </button>
            </form>
            <ul className='col-12 col-sm-2 col-md-2  col-lg-2'>
              <div className="nav-item dropdown col-6">
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
              <li className="nav-item col-6 ">
                <Link to='/login' className="nav-link " aria-current="page">Login / SignUp</Link>
              </li>
            </ul>
            <span className='cart-icon col-12 col-sm-1 col-md-2 col-lg-2' style={{ width: "auto", height: "auto", fontSize: "15px" }}>
              <Link to="/shoppingcart" className="nav-link d-flex align-items-center  justify-content-center rounded-1 cart-icon py-2 px-2" style={{ backgroundColor: '#2D9E6D', color: 'white' }}>
                <FaShoppingCart size={20} />
                <span className="ms-1" style={{ fontSize: "15px" }}>
                  My Cart
                </span>
                <span className="badge bg-white ms-2" style={{ fontSize: '0.9rem', color: 'black' }}>
                  {getTotalItems()}
                </span>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar