import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KongaHealth from '../images/KongaHealth.png';
import KongaLogistic from '../images/KongaLogistics.jpeg';
import KtravelsLogo from '../images/KtravelsLogo.png';
import KongaTv from '../images/KongaTv.png';
import KongaNow from '../images/KongaNow.png';
import KongaPay from '../images/KongaPay.png';
// import KongaCorporate from '../images/KongaLogistics.jpeg';
// import KongaGroceries from '../images/KongaGroceries.png';
import KongaLogo from '../images/KongaLogo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
        <div className="container-fluid">
          <div className="navbar-nav top-nav">
            <a className="nav-link" href="/travel">
              <img src= {KtravelsLogo} alt="Travel" height="24" />
            </a>
            <a className="nav-link" href="/konga-pay">
              <img src= {KongaPay} alt="KongaPay" height="24" />
            </a>
            <a className="nav-link" href="/corporate">
              {/* <img src= {KongaCorporate} alt="Corporate" height="24" /> */}
            </a>
            <a className="nav-link" href="/health">
              <img src= {KongaHealth} alt="Health" height="24" />
            </a>
            <a className="nav-link" href="/logistics">
              <img src= {KongaLogistic} alt="Logistics" height="24" />
            </a>
            <a className="nav-link" href="/groceries">
              {/* <img src= {KongaGroceries} alt="Groceries" height="24" /> */}
            </a>
            <a className="nav-link" href="/konga-tv">
              <img src= {KongaTv} alt="KongaTV" height="24" />
            </a>
            <a className="nav-link" href="/konga-now">
              <img src= {KongaNow} alt="KongaNow" height="24" />
            </a>
          </div>
        </div>
      </nav>

       {/* Main Navbar */}
       <nav className="navbar navbar-expand-lg navbar-light bg-pink py-0">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src= {KongaLogo} alt="Konga Logo" height="40" />
          </a>

          {/* Toggler for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Main Navigation */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/store-locator">Store Locator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sell-on-konga">Sell on Konga</a>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex">
              <input className="form-control search-input" type="search" placeholder="Search for products, brands and categories..." aria-label="Search" />
              <button className="btn btn-warning search-button" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi    bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </button>
            </form>

            {/* Help, Login/Signup, Cart */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/help">Help</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login-signup">Login / Signup</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                    <button style={{borderRadius: '3px', border: 'none', backgroundColor: 'green'}}>
                    <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    <span className='me-1' style={{fontSize: '13px', color: 'white'}}>My Cart</span>
                    <span className="badge bg-light text-dark">0</span>
                    </button>
                    
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      

      <nav className="navbar navbar-expand-lg bg-danger" id='navbar1' style={{ padding: "0px" }}>
      <div className="container-fluid">
        {/* Toggle button */}
        <button
          className="navbar-toggler px-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExampleOnHover"
          aria-controls="navbarExampleOnHover"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarExampleOnHover">
          <ul className="navbar-nav me-auto ps-lg-0" style={{ paddingLeft: "0.15rem" }}>
            {/* Navbar items with dropdown */}

            <li className="nav-item dropdown position-static">
  <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </a>

  <div className="dropdown-menu mt-0" style={{backgroundColor: 'GrayText'}}>

  <div className="dropdown-submenu position-relative dropup">
      <a
        className="dropdown-item"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id='menu'
      >
        Computer and Accessories
      </a>
      <div className="dropdown-menu dropdown-hover p-5" id='Computer'>
        <div className="row">
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Desktop and Monitors</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">CPUs</a></li>
              <li><a href="#" className="dropdown-item">All In Ones</a></li>
              <li><a href="#" className="dropdown-item">Monitors</a></li>
              <li><a href="#" className="dropdown-item">UPS</a></li>
              <li><a href="#" className="dropdown-item">Servers</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Networking</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Routers</a></li>
              <li><a href="#" className="dropdown-item">Switches</a></li>
              <li><a href="#" className="dropdown-item">Modems</a></li>
              <li><a href="#" className="dropdown-item">Access Points</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Phone and Tablets */}
    <div className="dropdown-submenu position-relative dropup">
      <a
        className="dropdown-item"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id='menu'
      >
        Phone and Tablets
      </a>
      <div className="dropdown-menu dropdown-hover p-5" id='Phone'>
        <div className="row">
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Desktop and Monitors</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">CPUs</a></li>
              <li><a href="#" className="dropdown-item">All In Ones</a></li>
              <li><a href="#" className="dropdown-item">Monitors</a></li>
              <li><a href="#" className="dropdown-item">UPS</a></li>
              <li><a href="#" className="dropdown-item">Servers</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Networking</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Routers</a></li>
              <li><a href="#" className="dropdown-item">Switches</a></li>
              <li><a href="#" className="dropdown-item">Modems</a></li>
              <li><a href="#" className="dropdown-item">Access Points</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <a className="dropdown-item" id='menu' href="#">Phone and Tablets</a>
    <a className="dropdown-item" id='menu' href="#">Electronics</a>
    <a className="dropdown-item" id='menu' href="#">Konga Fashion</a>
    <a className="dropdown-item" id='menu' href="#">Home and Kitchen</a>
    <a className="dropdown-item" id='menu' href="#">Baby, Kids, and Toys</a>
    <a className="dropdown-item" id='menu' href="#">Beauty, Health, and Personal Care</a>
    <a className="dropdown-item" id='menu' href="#">Drink and Groceries</a>

    {/* Nested Dropdown with List and Headings */}
    
    <div className="dropdown-submenu position-relative dropup">
      <a
        className="dropdown-item"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id='menu'
      >
        Other Categories
      </a>
      <div className="dropdown-menu dropdown-hover p-5" id='otherCategories'>
        <div className="row">
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Desktop and Monitors</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">CPUs</a></li>
              <li><a href="#" className="dropdown-item">All In Ones</a></li>
              <li><a href="#" className="dropdown-item">Monitors</a></li>
              <li><a href="#" className="dropdown-item">UPS</a></li>
              <li><a href="#" className="dropdown-item">Servers</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Networking</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Routers</a></li>
              <li><a href="#" className="dropdown-item">Switches</a></li>
              <li><a href="#" className="dropdown-item">Modems</a></li>
              <li><a href="#" className="dropdown-item">Access Points</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="dropdown-item">Hard Drives</a></li>
              <li><a href="#" className="dropdown-item">SSDs</a></li>
              <li><a href="#" className="dropdown-item">Flash Drives</a></li>
              <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>



            <li className="nav-item dropdown dropdown-hover position-static">
              <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Computers and Accessories
              </a>
              <div className="dropdown-menu w-100 mt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header fw-bold">Laptops</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Mini Laptops and Netbooks</a></li>
                        <li><a href="#" className="dropdown-item">Notebooks</a></li>
                        <li><a href="#" className="dropdown-item">Ultrabooks</a></li>
                        <li><a href="#" className="dropdown-item">Hybrid PCs</a></li>
                        <li><a href="#" className="dropdown-item">Macbooks</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header fw-bold">Desktop and Monitors</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">CPUs</a></li>
                        <li><a href="#" className="dropdown-item">All In Ones</a></li>
                        <li><a href="#" className="dropdown-item">Monitors</a></li>
                        <li><a href="#" className="dropdown-item">UPS</a></li>
                        <li><a href="#" className="dropdown-item">Servers</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h1 className="dropdown-header fw-bold">Computing Accessories</h1>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Computer Peripherals</a></li>
                        <li><a href="#" className="dropdown-item">Bags, Cases, Covers & Sleeves</a></li>
                        <li><a href="#" className="dropdown-item">Laptop & Desktop Accessories</a></li>
                        <li><a href="#" className="dropdown-item">Storage Devices</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Additional nav items with dropdown */}
            <li className="nav-item dropdown dropdown-hover position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Phones and Tablets
              </a>
              <div className="dropdown-menu w-100 mt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Smartphones</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Phones</a></li>
                        <li><a href="#" className="dropdown-item">iPhones</a></li>
                        <li><a href="#" className="dropdown-item">Windows Phones</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Tablets</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Tablets</a></li>
                        <li><a href="#" className="dropdown-item">iPads</a></li>
                        <li><a href="#" className="dropdown-item">Windows Tablets</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Repeat for other categories with hover dropdowns */}
            <li className="nav-item dropdown dropdown-hover position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Electronics
              </a>
              <div className="dropdown-menu w-100 mt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">TVs</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">LED TVs</a></li>
                        <li><a href="#" className="dropdown-item">Smart TVs</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Audio</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Speakers</a></li>
                        <li><a href="#" className="dropdown-item">Headphones</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Cameras</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Digital Cameras</a></li>
                        <li><a href="#" className="dropdown-item">Action Cameras</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown dropdown-hover position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Konga Fashion
              </a>
              <div className="dropdown-menu w-100 mt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Smartphones</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Phones</a></li>
                        <li><a href="#" className="dropdown-item">iPhones</a></li>
                        <li><a href="#" className="dropdown-item">Windows Phones</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Tablets</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Tablets</a></li>
                        <li><a href="#" className="dropdown-item">iPads</a></li>
                        <li><a href="#" className="dropdown-item">Windows Tablets</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown dropdown-hover position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home and Kitchen
              </a>
              <div className="dropdown-menu w-100 mt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Smartphones</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Phones</a></li>
                        <li><a href="#" className="dropdown-item">iPhones</a></li>
                        <li><a href="#" className="dropdown-item">Windows Phones</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Tablets</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Android Tablets</a></li>
                        <li><a href="#" className="dropdown-item">iPads</a></li>
                        <li><a href="#" className="dropdown-item">Windows Tablets</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <h6 className="dropdown-header">Accessories</h6>
                      <ul className="list-unstyled">
                        <li><a href="#" className="dropdown-item">Phone Cases</a></li>
                        <li><a href="#" className="dropdown-item">Chargers</a></li>
                        <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Repeat for other categories similarly */}
            {/* You can add more categories below as needed */}
          </ul>
        </div>
      </div>
    </nav>  

    </div>

  );
};

export default Header;
