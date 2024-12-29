import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';
import cardOne from '../Images/Shopping-cart -img/cardOne.jpg';
import cardTwo from '../Images/Shopping-cart -img/cardTwo.jpg';
import cardThree from '../Images/Shopping-cart -img/cardThree.jpg';
import cardFour from '../Images/Shopping-cart -img/cardFour.jpg';
import secure from '../Images/Shopping-cart -img/secure.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../components/ContextProvider';
import EmptyCart from '../components/EmptyCart';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
    const { cart, getTotalItems, decrement, increment, removeFromCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <div >
            <Header />
            <div className='path-container mx-auto ms-3 ms-md-0' style={{ maxWidth: '1440px' }}>
                <div className='shop-path'>
                    <Link className='home-shop-path' to="/">Home</Link>
                    <span> <FaChevronRight color='gray' size={10} /> </span>
                    <Link className='shop-shop-path' to="/shoppingcart">Shopping Cart</Link>
                </div>
                <div className='shop-text'>
                    <p>Shopping Cart</p>
                </div>
            </div>

            <div className="" style={{ backgroundColor: "#f2f2f2" }}>
                <div className=' py-4 pt-md-4 pb-md-1 py-lg-4 mx-auto ' style={{ maxWidth: "1400px" }} >
                    <button className='cont-button  ms-3 ms-md-5'>
                        <Link to='/' style={{ textDecoration: "none", color: "#ed017f" }}>
                            <FaArrowLeft size={11} className=' mt-2 mb-2 mx-3' />
                            Continue Shopping
                        </Link>
                    </button>
                </div>

                <section className=' mx-auto ' style={{ maxWidth: '1440px', }}>
                    <div className='p-3 ' >
                        <div className='d-flex shopCartContainer  mx-auto '>
                            <div className='left-shopCart  '>
                                <div className='p-sm-3 p-2 order-Summary fw-bolder d-lg-none'>
                                    <span>SubTotal ({cart.length} {cart.length === 1 ? 'item' : "items"})</span>
                                    <span> # {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className='left-shopCartTop py-2 px-3 mx-auto  d-flex  justify-content-between gap-2 d-none d-sm-block'>
                                    <div className='item-details  '>
                                        <span>Items Details</span>
                                    </div>
                                    <div className='quantityItem ms-auto mx-auto ps-lg-3'>
                                        <div className="ms-lg-5 ps-lg-5 ms-md-5 ps-md-5">
                                            <span className='ms-lg-5 me-lg-5 ms-md-5 me-md-5'>Quantity</span>
                                            <span className='ms-lg-5 ms-md-5'>Item Price</span>
                                        </div>
                                    </div>
                                    <div className='action'>
                                        <span>Action</span>
                                    </div>
                                </div>
                                {(
                                    cart.map(item => (
                                        <div key={item.id} className='pt-2 pb-1 px-3 px-md-0 px-lg-3 d-flex mx-auto justify-content-between itemMainContainer'>
                                            <div className=" d-flex  justify-content-evenly " style={{ width: "auto" }} >
                                                <div className="">
                                                    <div className=' itemContainer d-flex row justify-content-between ' style={{ width: "100%", }}>
                                                        <div className="d-flex itemName col-12 col-sm-6  ">
                                                            <img src={item.imageUrl} alt={item.name} className='productImg' />
                                                            <div className=''>
                                                                <p className='mb-0 fs-6 d-none d-sm-block' style={{ fontSize: "13px", }}> Product: 000{item.id}</p>
                                                                <p style={{ fontSize: "13px" }} className='fw-bold mb-0'>{item.description}</p>
                                                                <p style={{ fontSize: "13px", color: "#ed017f" }} className='my-0 fw-bold' >Sold by Konga</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start align-item-center ">
                                                            <div className='qtyItmCont ms-md-4 ms-lg-0 mt-3 mt-sm-2 mt-md-0 '>
                                                                <p className="d-md-none mb-0  ">Quantity:</p>
                                                                <div className='product-count d-flex me-auto '>
                                                                    <button className='product-package-button fs-2 pb-1' onClick={() => decrement(item.id)}>-</button>
                                                                    <button className='product-package-count px-3'>{item.quantity}</button>
                                                                    <button className='product-package-button fs-4 pb-1' onClick={() => increment(item.id)}>+</button>
                                                                </div>
                                                            </div>
                                                            <div className='itemPriceContainer ms-md-5  ms-lg-0 pt-3 pt-sm-0' >
                                                                <span className='mainPrice '>{(item.price * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                                </span>
                                                                <span className='qtyPrice '>{(item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} X {item.quantity} item(s)</span>
                                                            </div>
                                                        </div>
                                                        <hr className='mt-2 mb-0 d-md-none' />
                                                        <div className='removeCont  d-flex  text-lg-end text-md-end ms-md-4 md-lg-0  '>
                                                            <div className='removeClick pe-1' onClick={() => removeFromCart(item.id)}>Remove item</div>
                                                            <div className='saveClick pe-1'>Save for Later</div>
                                                        </div>
                                                    </div>
                                                    <hr className='mt-2 mb-0 d-none d-md-block ' />
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                )}
                                <div className='p-3 d-flex tablet-payment   d-lg-none  '>
                                    <div className='d-flex paymentCard '>
                                        <span className='acceptText'>We accept:</span>
                                        <span className="mx-1 mx-md-1 mx-lg-0"><img src={cardOne} width={90} alt="" /></span>
                                        <span className="mx-1 mx-md-1 mx-lg-0"><img src={cardTwo} width={90} alt="" /></span>
                                        <span className="mx-1 mx-md-1 mx-lg-0"><img src={cardThree} width={90} alt="" /></span>
                                        <span className="mx-1 mx-md-1 mx-lg-0"><img src={cardFour} width={90} alt="" /></span>
                                    </div>
                                    <div className="payment">
                                        <span><img src={secure} alt="" style={{ width: '13px' }} /></span>
                                        <span className='safeText'>Transactions are 100% safe and secure</span>
                                    </div>
                                    <div className='p-3 '>
                                        <button className='checkoutButton' onClick={() => alert("Checkout")}>Continue to Checkout</button>
                                    </div>
                                </div>
                            </div>
                            <div className='right-shopCart shadow rounded col-3 d-none  d-lg-block'>
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
                                        <span><img src={cardTwo} width={90} alt="" /></span>
                                        <span><img src={cardThree} width={90} alt="" /></span>
                                        <span><img src={cardFour} width={90} alt="" /></span>
                                    </div>
                                    <span><img src={secure} alt="" style={{ width: '13px' }} /></span>
                                    <span className='safeText'>Transactions are 100% safe and secure</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ShoppingCart;
{/* <div className='p-3'>
                                    <div className='d-flex paymentCard'>
                                        <span className='acceptText'>We accept:</span>
                                        <span><img src={cardOne} width={90} alt="" /></span>
                                        <span><img src={cardTwo} width={90} alt="" /></span>
                                        <span><img src={cardThree} width={90} alt="" /></span>
                                        <span><img src={cardFour} width={90} alt="" /></span>
                                    </div>
                                    <span><img src={secure} alt="" style={{ width: '13px' }} /></span>
                                    <span className='safeText'>Transactions are 100% safe and secure</span>
                                </div> */}