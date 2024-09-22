import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import computers from '../Images/computers.png'
import electronics from '../Images/electronics.png'
import phones from '../Images/phones.png'
import fashion from '../Images/fashion.png'

const navbarTwo = () => {
    const [Computers, setComputers] = useState(false);
    const [Phones, setPhones] = useState(false);
    const [Electronics, setElectronics] = useState(false);
    const [Fashion, setFashion] = useState(false);
    return (
    <div>
        <nav className='NavbarTwo ' >
            <ul className='d-flex  NavbarTwo-main' >
                <li><a href="" className='NavbarTwo-main-list fw-bolder'>  All Categories< GiHamburgerMenu className="NavbarTwo-icon ms-2 text-light" /> </a></li>
                <li><a href="" className='NavbarTwo-main-list'onMouseEnter={()=> setComputers(true)} onMouseLeave={() => setComputers(false)} >Computer and Accessories</a>
                </li>
                <li><a href="" className='NavbarTwo-main-list'onMouseEnter={()=> setPhones(true)} onMouseLeave={() => setPhones(false)} >Phone and Tablet</a>
                </li>
                <li><a href="" className='NavbarTwo-main-list'onMouseEnter={()=> setElectronics(true)} onMouseLeave={() => setElectronics(false)} >Electronics</a>
                </li>
                <li><a href="" className='NavbarTwo-main-list'onMouseEnter={()=> setFashion(true)} onMouseLeave={() => setFashion(false)} >Konga Fashion</a>
                </li>
            </ul>
        </nav>

{/* For the main part of the navbar elements */}

{Computers && ( // Conditional rendering based on state
<div className="NavbarTwo-hover ">
    <div className="NavbarTwo-hover-item  d-flex" onMouseEnter={() => setComputers(true)} onMouseLeave={() => setComputers(false)} >
    <div className="NavbarTwo-hover-list p-4 ">
        <div className="row NavbarTwo-hover-item-text ">
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Desktop and Monitors</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">CPUs</a></li>
            <li><a href="#" className="dropdown-item">All In Ones</a></li>
            <li><a href="#" className="dropdown-item">Monitors</a></li>
            <li><a href="#" className="dropdown-item">UPS</a></li>
            <li><a href="#" className="dropdown-item">Servers</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Networking</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Routers</a></li>
            <li><a href="#" className="dropdown-item">Switches</a></li>
            <li><a href="#" className="dropdown-item">Modems</a></li>
            <li><a href="#" className="dropdown-item">Access Points</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Hard Drives</a></li>
            <li><a href="#" className="dropdown-item">SSDs</a></li>
            <li><a href="#" className="dropdown-item">Flash Drives</a></li>
            <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Hard Drives</a></li>
            <li><a href="#" className="dropdown-item">SSDs</a></li>
            <li><a href="#" className="dropdown-item">Flash Drives</a></li>
            <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">SSDs</a></li>
            <li><a href="#" className="dropdown-item">Flash Drives</a></li>
            <li><a href="#" className="dropdown-item">Memory Cards</a></li>
            <li><a href="#" className="dropdown-item">Hard Drives</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Computing Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Computer Peripherals</a></li>
            <li><a href="#" className="dropdown-item">Bags, Cases, Covers & Sleeves</a></li>
            <li><a href="#" className="dropdown-item">Laptop & Desktop Accessories</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Storage Devices</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Printers, Scanners & Accessories</a></li>
            <li><a href="#" className="dropdown-item">Printers</a></li>
            <li><a href="#" className="dropdown-item">Scanners</a></li>
            <li><a href="#" className="dropdown-item">Inks, Toners & Cartridges</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Projectors & Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Video Projectors</a></li>
            <li><a href="#" className="dropdown-item">Projector Lamps</a></li>
            <li><a href="#" className="dropdown-item">Projector Lenses</a></li>
            <li><a href="#" className="dropdown-item">Mounting Equipment</a></li>
            <li><a href="#" className="dropdown-item">Projection Screens</a></li>
            <li><a href="#" className="dropdown-item">Projector Bags & Cases</a></li>
            <li><a href="#" className="dropdown-item">Remote Controls</a></li>
            <li><a href="#" className="dropdown-item">Other Projector Accessories</a></li>
            </ul>
        </div>
        
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Wifi & Networking</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Switches</a></li>
            <li><a href="#" className="dropdown-item">Routers</a></li>
            <li><a href="#" className="dropdown-item">Modems</a></li>
            <li><a href="#" className="dropdown-item">Networking Peripherals</a></li>
            </ul>
        </div>
        
        </div>
    </div>
            <div className="NavbarTwo-hover-item-image p-4 mt-5 pe-5">
                <img src={computers} alt="" />
            </div>
    </div>
</div>
)}
{Phones && ( // Conditional rendering based on state
<div className="NavbarTwo-hover">
<div className="NavbarTwo-hover-item d-flex" onMouseEnter={() => setPhones(true)} onMouseLeave={() => setPhones(false)} >                    
        <div className="NavbarTwo-hover-list p-4 ">
        <div className="row NavbarTwo-hover-item-text ">
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Mobile Phones</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Smartphones</a></li>
            <li><a href="#" className="dropdown-item">Feature Phones</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Mobile Phone Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Cables</a></li>
            <li><a href="#" className="dropdown-item">Cases & Covers</a></li>
            <li><a href="#" className="dropdown-item">Screen Protectors</a></li>
            <li><a href="#" className="dropdown-item">Chargers & Power Banks</a></li>
            <li><a href="#" className="dropdown-item">Earphones & Headsets</a></li>
            <li><a href="#" className="dropdown-item">Smartwatches & Bands</a></li>
            <li><a href="#" className="dropdown-item">Clips, Holders & Stands</a></li>
            <li><a href="#" className="dropdown-item">Batteries</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Tablets</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Android</a></li>
            <li><a href="#" className="dropdown-item">iOS</a></li>
            <li><a href="#" className="dropdown-item">Windows</a></li>
            <li><a href="#" className="dropdown-item">Other OS'</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Tablet Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Cases & Covers</a></li>
            <li><a href="#" className="dropdown-item">Holders & Stands</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-5">
            <h6 className="dropdown-header fw-bold">Other Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Shop By Price</a></li>
            <li><a href="#" className="dropdown-item">Up to 10,000</a></li>
            <li><a href="#" className="dropdown-item">Up to 20,000</a></li>
            <li><a href="#" className="dropdown-item">Up to 30,000</a></li>
            <li><a href="#" className="dropdown-item">Up to 40,000</a></li>
            <li><a href="#" className="dropdown-item">Up to 50,000</a></li>
            <li><a href="#" className="dropdown-item">Up to 60,000</a></li>
            <li><a href="#" className="dropdown-item">60,000 & Above</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-5">
            <h6 className="dropdown-header fw-bold">Desk, Radio & Intercom Phones</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Other Brands</a></li>
            <li><a href="#" className="dropdown-item">Desk, Radio & Intercom Phones Accessories</a></li>
            <li><a href="#" className="dropdown-item">Panasonic</a></li>
            <li><a href="#" className="dropdown-item">Walkie Talkie</a></li>
            <li><a href="#" className="dropdown-item">Desk Phones</a></li>
            <li><a href="#" className="dropdown-item">Intercom Phones</a></li>
            </ul>
        </div>
        </div>
    </div>
<div className="NavbarTwo-hover-item-image p-4 mt-5 pe-5">
    <img src={phones} alt="" />
</div>
</div>
</div>
)}


{Electronics&& ( // Conditional rendering based on state
<div className="NavbarTwo-hover">
<div className="NavbarTwo-hover-item d-flex" onMouseEnter={() => setElectronics(true)} onMouseLeave={() => setElectronics(false)} >
    <div className="NavbarTwo-hover-list p-4 ">
        <div className="row NavbarTwo-hover-item-text ">
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Televisions</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Smart TVs</a></li>
            <li><a href="#" className="dropdown-item">LED TVs</a></li>
            <li><a href="#" className="dropdown-item">Curved TVs</a></li>
            <li><a href="#" className="dropdown-item">OLED TVs</a></li>
            <li><a href="#" className="dropdown-item">Plasma TVs</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">DVD Players and Recorders</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">DVD Players</a></li>
            <li><a href="#" className="dropdown-item">DVD Recorders</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Cameras</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Digital Cameras</a></li>
            <li><a href="#" className="dropdown-item">Professional & SLR Cameras</a></li>
            <li><a href="#" className="dropdown-item">Camcorders & Video Cameras</a></li>
            <li><a href="#" className="dropdown-item">Camera Lenses & Accessories</a></li>
            <li><a href="#" className="dropdown-item">CCTV Cameras</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">TV Audio</a></li>
            <li><a href="#" className="dropdown-item">Headphones</a></li>
            <li><a href="#" className="dropdown-item">Television Accessories</a></li>
            <li><a href="#" className="dropdown-item">Gaming Accessories</a></li>
            <li><a href="#" className="dropdown-item">Other Accessories</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Games and Consoles</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">PS4</a></li>
            <li><a href="#" className="dropdown-item">PS3</a></li>
            <li><a href="#" className="dropdown-item">Xbox One</a></li>
            <li><a href="#" className="dropdown-item">Nintendo Wii</a></li>
            <li><a href="#" className="dropdown-item">Xbox 360</a></li>
            <li><a href="#" className="dropdown-item">Sony PSP</a></li>
            <li><a href="#" className="dropdown-item">PS Vita</a></li>
            <li><a href="#" className="dropdown-item">Nintendo 3DS</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Car & Vehicle Electronics</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Computer Peripherals</a></li>
            <li><a href="#" className="dropdown-item">Vehicle Audio & Video</a></li>
            <li><a href="#" className="dropdown-item">GPS & Navigation</a></li>
            <li><a href="#" className="dropdown-item">Vehicle Safety & Security</a></li>
            <li><a href="#" className="dropdown-item">Vehicle Electronics Accessories</a></li>
            <li><a href="#" className="dropdown-item">Car Lighting</a></li>
            <li><a href="#" className="dropdown-item">Car Diagnostics</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Wearable Technology</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Activity Trackers</a></li>
            <li><a href="#" className="dropdown-item">Smartwatches</a></li>
            <li><a href="#" className="dropdown-item">Virtual Reality</a></li>
            <li><a href="#" className="dropdown-item">Smart Tracking Devices</a></li>
            <li><a href="#" className="dropdown-item">Smart Glasses</a></li>
            <li><a href="#" className="dropdown-item">Smart Rings</a></li>
            <li><a href="#" className="dropdown-item">Wearable Cameras</a></li>
            <li><a href="#" className="dropdown-item">Accessories</a></li>
            </ul>
        </div>
        </div>
    </div>
    <div className="NavbarTwo-hover-item-image p-4 mt-5 pe-5">
        <img src={electronics} alt="" />
    </div>
    </div>
</div>
)}



{Fashion && ( // Conditional rendering based on state
    <div className="NavbarTwo-hover">
        <div className="NavbarTwo-hover-item d-flex" onMouseEnter={() => setFashion(true)} onMouseLeave={() => setFashion(false)} >
        <div className="NavbarTwo-hover-list p-4 ">
        <div className="row NavbarTwo-hover-item-text ">
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Women's Wear</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Dresses</a></li>
            <li><a href="#" className="dropdown-item">Tops</a></li>
            <li><a href="#" className="dropdown-item">Trousers</a></li>
            <li><a href="#" className="dropdown-item">Jumpsuits & Playsuits</a></li>
            <li><a href="#" className="dropdown-item">Suits & Blazers</a></li>
            <li><a href="#" className="dropdown-item">Skirts</a></li>
            <li><a href="#" className="dropdown-item">Co-ordinates</a></li>
            <li><a href="#" className="dropdown-item">Lingerie & Sleepwear</a></li>
            <li><a href="#" className="dropdown-item">Ready to Wear</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Women's Shoes</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Ballerinas & Flats</a></li>
            <li><a href="#" className="dropdown-item">Heels</a></li>
            <li><a href="#" className="dropdown-item">Sandals & Slippers</a></li>
            <li><a href="#" className="dropdown-item">Wedges</a></li>
            <li><a href="#" className="dropdown-item">Sport Shoes</a></li>
            <li><a href="#" className="dropdown-item">Shoes & Bags</a></li>
            </ul>
        </div>
        <div className="col-lg-3 mt-3">
            <h6 className="dropdown-header fw-bold">Women's Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Bags</a></li>
            <li><a href="#" className="dropdown-item">Belts</a></li>
            <li><a href="#" className="dropdown-item">Wallets</a></li>
            <li><a href="#" className="dropdown-item">Jewellery</a></li>
            <li><a href="#" className="dropdown-item">Hats & Scarves</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Men's Wear</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Shirts</a></li>
            <li><a href="#" className="dropdown-item">Polos</a></li>
            <li><a href="#" className="dropdown-item">T-Shirts</a></li>
            <li><a href="#" className="dropdown-item">Jeans</a></li>
            <li><a href="#" className="dropdown-item">Trousers & Shorts</a></li>
            <li><a href="#" className="dropdown-item">Suits, Blazers & Jackets</a></li>
            <li><a href="#" className="dropdown-item">Pyjamas</a></li>
            <li><a href="#" className="dropdown-item">Jerseys</a></li>
            <li><a href="#" className="dropdown-item">Traditional Wear</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Men's Shoes</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Casual Shoes</a></li>
            <li><a href="#" className="dropdown-item">Formal Shoes</a></li>
            <li><a href="#" className="dropdown-item">Slippers & Sandals</a></li>
            <li><a href="#" className="dropdown-item">Shoe Care & Accessories</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Men's Accessories</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Belts & Wallets</a></li>
            <li><a href="#" className="dropdown-item">Socks & Underwear</a></li>
            <li><a href="#" className="dropdown-item">Caps & Hats</a></li>
            <li><a href="#" className="dropdown-item">Jewellery</a></li>
            <li><a href="#" className="dropdown-item">Bags</a></li>
            <li><a href="#" className="dropdown-item">Ties & Cufflinks</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Watches</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Men's Watches</a></li>
            <li><a href="#" className="dropdown-item">Women's Watches</a></li>
            <li><a href="#" className="dropdown-item">Unisex Watches</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Style Finder for Women</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Monochrome</a></li>
            <li><a href="#" className="dropdown-item">Floral</a></li>
            <li><a href="#" className="dropdown-item">Bold in Black</a></li>
            <li><a href="#" className="dropdown-item">9 to 5 Chic</a></li>
            <li><a href="#" className="dropdown-item">Trending Now</a></li>
            <li><a href="#" className="dropdown-item">Red Hot</a></li>
            </ul>
        </div>
        <div className="col-lg-4 mt-3">
            <h6 className="dropdown-header fw-bold">Style Finder for Men</h6>
            <ul className="list-unstyled">
            <li><a href="#" className="dropdown-item">Monochrome</a></li>
            <li><a href="#" className="dropdown-item">Prints</a></li>
            <li><a href="#" className="dropdown-item">Wardrobe Basics</a></li>
            <li><a href="#" className="dropdown-item">Men in Blue</a></li>
            <li><a href="#" className="dropdown-item">Business Look</a></li>
            </ul>
        </div>
        </div>
    </div>
    <div className="NavbarTwo-hover-item-image p-4 mt-5 pe-5">
    <img src={fashion} alt="" />
    </div>
</div>
</div>


)}



    </div>
  )
}

export default navbarTwo
