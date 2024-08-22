import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Footer/>
      <h4 className=' py-2 rounded-1 '><Link to="/login" className="nav-link" >Login</Link></h4>
    </div>
  )
}

export default Home
