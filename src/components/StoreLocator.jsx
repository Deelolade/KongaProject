import { useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


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
    <>
    <div className="header-container">
    <div className="store-header">
        <div className="store-header-content">
        <p><a href="/">Home <MdKeyboardArrowRight /> </a> store Locator</p>
        <h1>Store Locator</h1>
    </div>
    </div> 
    <div style={{ margin:'auto', padding:'8px', border: '1px solid #ddd', width:'1000px' }}>

            <form className='' style={{font:'5px', height:'30px', marginLeft:'10px', margin:'20px'}}>
                <label htmlFor="state">State:</label>
                <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="">select</option>
                    {Object.keys(statesWithCities).map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>

                <label htmlFor="city" className='ms-4'>City:</label>
                <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!cities.length}>
                    <option value="">select</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>

                <button type="button" onClick={handleSubmit} className='btn btn-primary ms-4' >
                    Apply Selection
                </button>
                <button type="button" onClick={handleSubmit} className='btn btn-primary ms-4' >
                    show All
                </button>
            </form>
        </div>
        <div className='' style={{ margin: 'auto', height:'25px', alignItems:'center', background:'grey', width:'1000px'}}>
            <p>There are 29 Konga store</p>
        </div>
        </div>
    </>
  )
}

export default StoreLocator
