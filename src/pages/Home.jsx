import { Link } from 'react-router-dom'
import PromoCarousel from '../components/PromoCarousel'
import NavbarFour from '../components/NavbarFour'
import TodaysDeals from '../components/TodaysDeals'
import SponsoredProducts from "../components/SponsoredProducts"
import SameDayDelivery   from '../components/SameDayDelivery'
import Display from '../components/Display'
import Store from '../components/Store'


const Home = () => {
  return (
    <div>
      <div style={{maxWidth: '1400px'}} className='mx-auto'>
      <PromoCarousel/>
      <NavbarFour/>
      <TodaysDeals/>
      <SponsoredProducts/>
      <SameDayDelivery/>
      <Display/>
      <Store/>
    </div>
    

    </div>
  )
}

export default Home
