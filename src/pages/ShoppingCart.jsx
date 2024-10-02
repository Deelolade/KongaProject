import React from 'react';
// import '../css/ShoppingCart.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';
import cardOne from '../Images/Shopping-cart -img/cardOne.jpg';
import cardTwo from '../Images/Shopping-cart -img/cardTwo.jpg';
import cardThree from '../Images/Shopping-cart -img/cardThree.jpg';
import cardFour from '../Images/Shopping-cart -img/cardFour.jpg';
import secure from '../Images/Shopping-cart -img/secure.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../components/ContextProvider'; // Ensure this imports your cart context
import EmptyCart from '../components/EmptyCart';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
    const { cart,getTotalItems,decrement,increment,removeFromCart} = useCart(); // Accessing cart items from context

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if(cart.length === 0){
      return <EmptyCart/>
    }

    return (
        <div >
          <Header/>
            <div className='path-container mx-auto' style={{maxWidth:'1440px'}}> 
                <div className='shop-path'>
                    <Link className='home-shop-path' to="/">Home</Link>
                    <span> <FaChevronRight color='gray' size={10}/> </span>  
                    <Link className='shop-shop-path' to="/shoppingcart">Shopping Cart</Link>
                </div>
                <div className='shop-text'>
                    <p>Shopping Cart</p> 
                </div>
            </div>
            
            <div className="" style={{backgroundColor:"#f2f2f2"}}>
            <div className=' py-4  mx-auto ' style={{maxWidth:"1400px"}} >
              <button className='cont-button  ms-5'>
                <Link to='/' style={{textDecoration:"none",color:"#ed017f"}}>
                <FaArrowLeft size={11} className=' mt-2 mb-2 mx-3'/>
                Continue Shopping
                </Link>
              </button> 
            </div>
            <section className=' mx-auto ' style={{maxWidth:'1440px',}}>
                <div className='p-4'>
                    
                    <div className='d-flex shopCartContainer '>
                        <div className='left-shopCart '>
                            <div>
                                <div className='d-flex left-shopCartTop py-2 px-3'>
                                    <div className='item-details'>
                                        <span>Items Details</span>
                                    </div>
                                    <div className='quantityItem'>
                                        <span className='me-5'>Quantity</span>
                                        <span className='ms-5'>Item Price</span>
                                    </div>
                                    <div className='action text-end'>
                                        <span>Action</span>
                                    </div>
                                </div>
                            </div>
                            { (
                                cart.map(item => (
                                    <div key={item.id} className='py-2 px-3 d-flex itemMainContainer'>
                                      <div className=" "style={{width:"62rem"}} >
                                      <div className='d-flex itemContainer ' style={{width:"62rem"}}>
                                            <img src={item.imageUrl} alt={item.name} className='productImg' />
                                            <div className='itemName' style={{width:"32rem"}}>
                                            <p className='mb-0 mt-2 fs-6' style={{fontSize:"13px",}}> Product:0{item.id}</p>
                                            <p style={{fontSize:"13px",color:"#ed017f"}} className='my-0 fw-bold' >Sold by Konga</p>
                                            <p style={{fontSize:"13px"}}  className='fw-bold'>{item.description}</p>
                                            </div>
                                        <div className='qtyItmCont '>
                                            <div className='product-count d-flex mt-3'>
                                                <button className='product-package-button fs-2 pb-1' onClick={() =>decrement(item.id)}>-</button>
                                                <button className='product-package-count px-3'>{item.quantity}</button>
                                                <button className='product-package-button fs-4 pb-1' onClick={() => increment(item.id)}>+</button>
                                            </div>
                                            <div className='itemPriceContainer ps-2  '>
                                                <span className='mainPrice '>{(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </span>
                                                <span className='qtyPrice '>{(item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} X {item.quantity} item(s)</span>
                                            </div>
                                        </div>
                                        <div className='removeCont'>
                                            <span className='removeClick pe-2' onClick={() => removeFromCart(item.id)}>Remove item</span>
                                            <span className='saveClick pe-2'>Save for Later</span>
                                        </div>
                                      </div>
                                      <hr  className='mt-2 mb-1 '/>
                                    </div>
                                  </div>
                                ))
                              )}
                        </div>
                        <div className='right-shopCart shadow rounded'> 
                            <div className='p-3 orderSummary'>
                                <span>Order Summary</span>
                                <span>{getTotalItems()} Items</span>
                            </div>
                            <div className='p-3 d-flex justify-content-between deliveryInfo'>
                                <span className='deliveryText'>Delivery Charges:</span>
                                <span className='deliveryTextInfo'>Add your delivery address at checkout to see delivery charges</span>
                            </div>
                            <div className='p-3 d-flex justify-content-between subTotal'>
                                <span className='subTotalText'>Subtotal:</span>
                                <span className='subTotalAmount'># {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className='p-3 d-flex justify-content-between Total'>
                                <span className='totalText'>Total</span>
                                <span className='totalAmount'># {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                            <div className='p-3 excludeText'>
                                <span>Excluding delivery charges</span>
                            </div>
                            <div className='p-3 checkoutContainer'>
                                <button className='checkoutButton'>Continue to Checkout</button>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex paymentCard'>
                                    <span className='acceptText'>We accept:</span>
                                    <span><img src={cardOne} width={90} alt="" /></span>
                                    <span><img src={cardTwo}width={90} alt="" /></span>
                                    <span><img src={cardThree}width={90} alt="" /></span>
                                    <span><img src={cardFour} width={90} alt="" /></span>
                                </div>
                                <span><img src={secure} alt="" style={{width: '13px'}} /></span>
                                <span className='safeText'>Transactions are 100% safe and secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Footer/>
        </div>
    );
};

export default ShoppingCart;
