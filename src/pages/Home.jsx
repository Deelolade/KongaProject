import { Link } from 'react-router-dom'
import PromoCarousel from '../components/PromoCarousel'
import NavbarFour from '../components/NavbarFour'
import TodaysDeals from '../components/TodaysDeals'
import SponsoredProducts from "../components/SponsoredProducts"
import SameDayDelivery   from '../components/SameDayDelivery'
import Display from '../components/Display'
import Store from '../components/Store'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };
  return (
    <div>
      <Header/>
      <div style={{maxWidth: '1400px'}} className='mx-auto'>
      <PromoCarousel/>
      <NavbarFour/>
      <TodaysDeals/>
      <SponsoredProducts/>
      <SameDayDelivery/>
      <Display/>
      <Store/>
    </div>
      <Footer/>
    

    </div>
  )
}

export default Home
