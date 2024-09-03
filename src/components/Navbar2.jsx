import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import Category from './Category'
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className='Nav-container'>
     {/* <Category/> */}
     <div className="dropdown-container">
      <div
        className="dropdown-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#" style={{ fontWeight: 'bold' }}>
          All Categories <GiHamburgerMenu size={15} />
        </a>
      </div>

      {isOpen && (
        <div
          className="dropdown-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-grid" >
            <div>
              <h4>Mobile Phones</h4>
              <ul>
                <li>Smartphones</li>
                <li>Feature Phones</li>
              </ul>
            </div>
            <div>
              <h4>Mobile Phone Accessories</h4>
              <ul>
                <li>Cables</li>
                <li>Cases & Covers</li>
                <li>Screen Protectors</li>
              </ul>
            </div>
            <div>
              <h4>Tablets</h4>
              <ul>
                <li>Android</li>
                <li>iOS</li>
                <li>Windows</li>
              </ul>
            </div>
            <div>
              <h4>Tablet Accessories</h4>
              <ul>
                <li>Cases & Covers</li>
                <li>Holders & Stands</li>
              </ul>
            </div>
            <div>
              <h4>Shop by Price</h4>
              <ul>
                <li>Up to 10,000</li>
                <li>Up to 20,000</li>
                <li>Up to 30,000</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default DropdownMenu;