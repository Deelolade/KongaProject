import SignUp from './pages/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SingleProduct from './pages/SingleProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import StoreLocator from './components/StoreLocator'
import Sellonkonga from './components/SellOnKonga'


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/signup' element = {<SignUp/>} />
            <Route path='/login' element = {<LoginPage/>} />
            <Route path='/singleproduct' element = {<SingleProduct/>} />
            <Route path='/storelocator' element = {<StoreLocator/>} />
            <Route path='/sellonkonga' element = {<Sellonkonga/>} />
          </Routes>
          {/* <Sellonkonga/> */}
      {/* <SingleProduct/> */}
      <Footer/>
      </Router>
      
      
    </div>
  )
}

export default App
