import { RiTruckLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineStarHalf } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { useCart } from '../components/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaChevronRight } from 'react-icons/fa'



const SingleProduct = () => {
  const { addToCart, products, } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.id === parseInt(id));

  const handleAddToCart = () => {
    if (product) {
      const itemToAdd = { ...product, quantity }; // Set quantity from state
      addToCart(itemToAdd);
      navigate('/shoppingcart');
    } else {
      alert("Product not found!");
    }
  };
  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(prev + change, 1)); // Ensure minimum quantity is 1
  };


  return (
    <div className="" style={{ overflowX: "hidden" }} >
      <Header />
      <div className='path-container  px-3 mx-auto' style={{ maxWidth: "1440px", }}>
        <div className='shop-path'>
          <Link className='home-shop-path' to="/">Home</Link>
          <span> <FaChevronRight color='gray' size={10} /> </span>
          <Link className='shop-shop-path' to="/earring">Computers & Accessories</Link>

        </div>
        <div className='shop-text  '>
          <p>Computers & Accessories</p>
        </div>
      </div>
      <div className="Single-product mx-lg-auto  mx-auto" >
        <div className='main-product mx-lg-auto mx-auto row justify-content-lg-between' style={{ maxWidth: "1440px" }}>
          <div className="main-single-product my-1 my-sm-5 mx-sm-2 mx-md-0 mx-lg-0 col-md-8 row col-sm-6 col-lg-8  " >
            <div className="product-image justify-content-center m-2 me-3 col-sm-4 col-12 col-md-5 col-lg-5 m-md-0 m-sm-2 m-lg-0">
              <img src={product.imageUrl} />
            </div>
            <div className="product-description  p-3 p-sm-5 p-md-0 mt-4 mt-md-2 col-sm-7 col-md-7 col-lg-7 col-12">
              <h1 className="fs-2">{product.nameOfProduct} {product.description}</h1>
              <p className=" lh-1 text-letter-spacing-tight mt-3" style={{ fontSize: "12px" }}> <span style={{ color: "#9b9b9b", fontSize: "12px" }}>Category:</span> {product.category}</p>
              <p className=" lh-1 text-letter-spacing-tigh mt-3" style={{ fontSize: "12px" }}> <span style={{ color: "#9b9b9b", fontSize: "12px" }}>Product No:</span> {product.id}</p>
              <hr className="my-1  side-product-rule" />
              <h1 className="my-4 fw-bold">#{product.price}</h1>
              <hr className="my-1  side-product-rule" />
              <div className="product-counter d-flex  mt-5 mx-auto">
                <p className="me-3 ">Quantity: </p>
                <div className="product-count d-flex">
                  <button className="product-package-button fs-2 pb-1" onClick={() => handleQuantityChange(-1)}>-</button>
                  <span className="product-package-count px-3" style={{ color: "#000" }} >{quantity}</span>
                  <button className="product-package-button fs-4 pb-1" onClick={() => handleQuantityChange(1)}>+</button>
                </div>
              </div>
              <div className="product-counter-number px-4 pb-1 pt-1 mb-3" style={{ backgroundColor: "#FEF2F9", width: "13rem", fontSize: "12px", borderRadius: "5px" }}>
                <p className="mb-1 ">Call us for Bulk Purchases:</p>
                <p className="mb-1 fw-bolder" style={{ color: "#ED017F", }}>07080635700</p>
              </div>
              <hr className="my-1  side-product-rule" />
              <div className="d-flex my-5 row justify-content-between mx-auto">
                <button className="bg-success col-12 col-sm-6 single-product-add-button " type="submit" onClick={handleAddToCart} >Add To Cart</button>
                <div className="d-flex col-12 col-sm-6 mt-3 mt-sm-0">
                  <div className="addToCart-love-button me-3 ">
                    <IoMdHeart className=" addToCart-button mt-2 " />
                  </div>
                  <p className="mt-2" style={{ fontSize: "12px" }}>Save For later</p>
                </div>
              </div>
              <hr className="my-1  side-product-rule" />
              <div className=" my-3 d-flex mx-3">
                <FaTruckFast style={{ fontSize: "35px", color: "#ed017f" }} />
                <p className="ms-4 fw-bold my-2 " style={{ fontSize: "12px" }}>Pickup & Pay on Collection Available</p>
              </div>
              <hr className="my-1  side-product-rule" />
              <div className="mt-3  mx-3">
                <p className="mb-0 mx-2" style={{ fontSize: "12px" }}>Share With Friends</p>.
                <div className="d-flex">
                  <div className="mx-2" style={{ width: "30px", height: "30px", border: "1px #666 solid", textAlign: "center", borderRadius: "30px" }}>
                    <FaFacebookF style={{ fontSize: "13px", }} />
                  </div>
                  <div className="mx-2" style={{ width: "30px", height: "30px", border: "1px #666 solid", textAlign: "center", borderRadius: "30px" }}>
                    <FaXTwitter style={{ fontSize: "13px", }} />
                  </div>
                  <div className="mx-2" style={{ width: "30px", height: "30px", border: "1px #666 solid", textAlign: "center", borderRadius: "30px" }}>
                    <IoLogoWhatsapp style={{ fontSize: "13px", }} />
                  </div>
                </div>


              </div>
            </div>



          </div>
          <div className="side-product my-5 mx-sm-3 mx-md-0 justify-content-center col-md-4 col-12  col-lg-4 ">
            <div className="side-product-one mb-2 py-3  rounded-2  border d-md-none d-lg-block">
              <h1 className='ps-3'>Same Day Delivery Available In:</h1>
              <hr />
              <span className='bg-warning p-2 m-2 ms-3 rounded-5 '>Lagos</span>
              <p className='mt-3 ps-3'>Terms and conditions apply</p>
            </div>
            <div className="side-product-two py-3 rounded-2  mb-2">
              <h1 className='ps-3'>Delivery & Returns</h1>
              <hr className='mb-2' />
              <div className="side-product-two-text d-flex mb-0 ">
                <div className="side-product-two-logo ms-3 ">
                  <RiTruckLine />
                </div>
                <div className="side-product-two-content  ms-3 mb-0 pe-2 pe-md-1 pe-lg-2">
                  <h4 className='fw-bolder fs-6'>Delivery</h4>
                  <p className='lh-sm mb-1'>Estimated delivery time 1-9 business days</p>
                  <p className='lh-sm mb-2'>Express Delivery Available</p>
                  <p className='lh-sm mb-2' ><strong>For Same-Day-Delivery:</strong> Please place your order before 11AM</p>
                  <p className='lh-sm mb-1' ><strong>Next-Day-Delivery:</strong> Orders placed after 11AM will be delievered the next day</p>
                  <p className='lh-sm mb-1' ><strong>Note:</strong> Availability may vary by location</p>
                </div>
              </div>
              <hr className='my-1  side-product-rule' />
              <div className="side-product-two-text d-flex ">
                <div className="side-product-two-logo ms-3">
                  <RiShieldStarLine />
                </div>
                <div className="side-product-two-content  ms-3 pe-2 pe-md-1 pe-lg-2">
                  <h4 className='fs-6'>Return Policy</h4>
                  <h1 className='fw-bolder'>Guaranteed 7-Day Return Policy</h1>
                  <p>For details about return shipping options, please visit - <span style={{ color: "#ED017F" }}>Konga Return Policy</span></p>
                </div>
              </div>
              <hr className='my-1 side-product-rule' />
              <div className="side-product-two-text d-flex ">
                <div className="side-product-two-logo ms-3">
                  <BsArrowRepeat />
                </div>
                <div className="side-product-two-content  ms-3">
                  <h4 className=' fs-6 mb-1'>Warranty</h4>
                  <p>Warranty information unavailable for this item.</p>
                </div>
              </div>
            </div>
            <div className="side-product-three  rounded-2 py-3 rounded-2">
              <div className="d-flex justify-content-between align-items-center px-2">
                <h1 className='pt-2 '>Seller Information</h1>
                <div className=" px-1 py-2 rounded-2" style={{ backgroundColor: "#D9CEF4", fontSize: "12px" }}> View Merchant Store</div>
              </div>
              <hr className='mb-2' />
              <div className=" px-3">
                <div className=" d-flex mt-3 mb-0 ">
                  <h1 className="me-3 pt-1 text-light" style={{ backgroundColor: "#9A0052", fontSize: "25px", width: "40px", height: "40px", textAlign: "center", borderRadius: "50%" }}>k</h1>
                  <div className="">
                    <h2 className="mb-1" style={{ color: "#644BA0", fontSize: "20px", fontWeight: "bolder" }}>New Horizons</h2>
                    <p>4 Years of selling on Konga</p>
                  </div>
                </div>
                <hr className='mb-2 mt-1 product-rule ' />
                <div className="row">
                  <div className="col mt-2 mb-1">
                    <h4 className="fs-6 my-1">Number of Sales</h4>
                    <h2 className="fs-4 fw-bolder">200</h2>
                    <p style={{ fontSize: "12px" }}>Successful sales</p>
                  </div>
                  <div className="col">
                    <p className=" my-1" style={{ fontSize: "12px" }}>Product Quality: </p>
                    <div className="progress rounded-1 mt-0">
                      <div className="progress-bar progress-bar-striped  progress-bar-animated bg-success" style={{ width: "86%" }}>
                        <h6 className="mt-1 me-3">86%</h6>
                      </div>
                    </div>
                    <p className="mb-1 mt-2" style={{ fontSize: "12px" }}>Delivery Rate: </p>
                    <div className="progress rounded-1 mt-0">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "50%" }}>
                        <h6 className="mt-1 ms-4 ">50%</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className='mb-0 mt-0 product-rule  ' />
                <div className=" mt-2">
                  <h6 className="fs-6 mb-1">Merchant Reviews (3)</h6>
                  <h2 className="fw-bolder fs-5 mb-0 " >4.3 / 5</h2>
                  <div className="mt-0 ms-1 mb-1" style={{ color: "#FBA100" }}><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarHalf /></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-product mx-auto p-4 ps-3   shadow-5">
          <div className=" row">
            <div className=" col-sm-3 col-12 col-sm-6 col-lg-3">
              <h5 className="me-4 fw-bolder" style={{ color: "#9A0052" }}>Seamless Shopping Experience</h5>
              <ul className="mt-2 ms-4" style={{ color: "#666" }} >
                <li><p>User-Friendly Interface</p></li>
                <li><p>Detailed Product Information</p></li>
                <li><p>Personalized Recommendations</p></li>
              </ul>
            </div>
            <h5 className="me-4 fw-bolder col-sm-2  d-sm-block d-none col-md-5 col-lg-2">Unmatched Quality</h5>
            <h5 className="me-4 fw-bolder col-sm-2  d-sm-block d-none d-md-none d-lg-block">Secure Transactions</h5>
            <h5 className="me-4 fw-bolder col-sm-2  d-sm-block d-none d-md-none d-lg-block">Customer Service</h5>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleProduct
