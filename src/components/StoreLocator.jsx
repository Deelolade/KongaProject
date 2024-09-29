import { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';



const StoreLocator = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);

  const statesWithCities = {
      Lagos: ['Ikeja', 'Victoria Island', 'Lekki'],
      Abuja: ['Central Business District', 'Garki', 'Wuse'],
      Kano: ['Kano City', 'Kumbotso', 'Tarauni'],
      PortHarcourt: ['GRA', 'Obio-Akpor', 'Eleme'],
      Enugu: ['Enugu City', 'Nsukka', 'Udi']
  };

  const handleStateChange = (event) => {
      const state = event.target.value;
      setSelectedState(state);
      setSelectedCity('');
      setCities(statesWithCities[state] || []);
  };

  const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedState && selectedCity) {
        alert(`Selected State: ${selectedState}, Selected City: ${selectedCity}`);
    } else {
    alert('Please select both a state and a city.');
    }
  };
  return (
    < div>
    <Header />
    <div className='path-container mx-auto p-3   'style={{maxWidth:"1440px"}}> 
        <div className='shop-path'>
          <Link className='home-shop-path' to="/">Home</Link>
          <span className="px-1"> <FaChevronRight color='gray' size={10}/></span>  
          <Link className='shop-shop-path' to="/storelocator">Store Locator</Link>

        </div>
        <div className='shop-text'>
          <p>Store Locator</p> 
        </div>
      </div>
    <div className="header-container pt-5 " style={{backgroundColor:"#f2f2f2",height:"30vh"}}>
    <div style={{ margin:'auto', padding:'8px', border: '1px solid #ddd', width:'1000px',border:"none",backgroundColor:"#F8F8F8" }}>

            <form className='d-flex' style={{font:'5px', height:'30px', marginLeft:'10px', margin:'20px'}}>
            <div className="  ">
            <label htmlFor="state" className='mx-2'>State:</label>
                <select id="state" value={selectedState}  onChange={handleStateChange}>
                    <option value="">select</option>
                    {Object.keys(statesWithCities).map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </div>

            <div className="  ms-3">
            <label htmlFor="city" className=' ms-2 me-4'>City:</label>
                <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!cities.length}>
                    <option value="">select</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

                <button type="button" onClick={handleSubmit} className='store-button mx-4 rounded-1 ' >
                    Apply Selection
                </button>
                <button type="button" onClick={handleSubmit} className=' store-button rounded-1' >
                    show All
                </button>
            </form>
        </div>
        <div className='ps-3' style={{ margin: 'auto', height:'25px', alignItems:'center', background:'#E2E2E2', width:'1000px'}}>
            <p className='text-dark justify-content-center' style={{fontSize:"13px",fontWeight:"bolder"}}>There are 29 Konga store</p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default StoreLocator
