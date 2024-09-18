import SignUp from './pages/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SingleProduct from './pages/SingleProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import StoreLocator from './components/StoreLocator'
import Sellonkonga from './components/SellOnKonga'
import ShoppingCart from './pages/ShoppingCart'
import Elitebook from './pages/singleProductCat/HPElitebook'
import Zinox from './pages/singleProductCat/Zinox'
import Vga from './pages/singleProductCat/Vga'
import LaptopStand from './pages/singleProductCat/A&SLaptopStand'
import Ups from './pages/singleProductCat/UPS'
import Mouse from './pages/singleProductCat/Mouse'
import Flash from './pages/singleProductCat/Flash'
import Iphone15 from './pages/singleProductCat/Iphone15'
import Galaxy from './pages/singleProductCat/Galaxy'
import Infinix from './pages/singleProductCat/Infinix'
import Techno from './pages/singleProductCat/Techno'
import Huawei from './pages/singleProductCat/Huawei'
import ZTE from './pages/singleProductCat/ZTE'
import Oppo from './pages/singleProductCat/Oppo'
import Itel from './pages/singleProductCat/Itel'
import Nexus from './pages/singleProductCat/Nexus'
import Samsung from './pages/singleProductCat/Samsung'
import Hisense from './pages/singleProductCat/Hisense'
import Camera from './pages/singleProductCat/Camera'
import Bluetooth from './pages/singleProductCat/Bluetooth'
import Wireless from './pages/singleProductCat/Wireless'
import Headphone from './pages/singleProductCat/Headphone'
import Mixer from './pages/singleProductCat/Mixer'
import Sneakers from './pages/singleProductCat/Sneakers'
import Watch from './pages/singleProductCat/Watch'
import Moccasine from './pages/singleProductCat/Moccasine'
import Necklace from './pages/singleProductCat/Necklace'
import Purse from './pages/singleProductCat/Purse'
import Jacket from './pages/singleProductCat/Jacket'
import Glass from './pages/singleProductCat/Glass'
import Earring from './pages/singleProductCat/Earring'


import { createContext,useState } from 'react'

export const CartContext = createContext();

const App = () => {
  const [count,setCount] = useState(0)
  return (
      <CartContext.Provider value={{count, setCount}}>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/signup' element = {<SignUp/>} />
            <Route path='/login' element = {<LoginPage/>} />
            <Route path='/shoppingcart' element = {<ShoppingCart/>} />
            <Route path='/singleproduct' element = {<SingleProduct/>} />
            <Route path='/elitebook' element = {<Elitebook/>} />
            <Route path='/zinox' element = {<Zinox/>} />
            <Route path='/vga' element = {<Vga/>} />
            <Route path='/laptop' element = {<LaptopStand/>} />
            <Route path='/ups' element = {<Ups/>} />
            <Route path='/mouse' element = {<Mouse/>} />
            <Route path='/flash' element = {<Flash/>} />
            <Route path='/Iphone15' element = {<Iphone15/>} /> 
            <Route path='/galaxy' element = {<Galaxy/>} />
            <Route path='/itel' element = {<Itel/>} />
            <Route path='/infinix' element = {<Infinix/>} />
            <Route path='/techno' element = {<Techno/>} />
            <Route path='/oppo' element = {<Oppo/>} />
            <Route path='/huawei' element = {<Huawei/>} />
            <Route path='/zte' element = {<ZTE/>} />
            <Route path='/nexus' element = {<Nexus/>} />
            <Route path='/samsung' element = {<Samsung/>} />
            <Route path='/purse' element = {<Purse/>} />
            <Route path='/hisense' element = {<Hisense/>} />
            <Route path='/camera' element = {<Camera/>} />
            <Route path='/bluetooth' element = {<Bluetooth/>} />
            <Route path='/wireless' element = {<Wireless/>} />
            <Route path='/headphone' element = {<Headphone/>} />
            <Route path='/mixer' element = {<Mixer/>} />
            <Route path='/sneakers' element = {<Sneakers/>} />
            <Route path='/watch' element = {<Watch/>} />
            <Route path='/moccasine' element = {<Moccasine/>} />
            <Route path='/necklace' element = {<Necklace/>} />
            <Route path='/jacket' element = {<Jacket/>} />
            <Route path='/glass' element = {<Glass/>} />
            <Route path='/earring' element = {<Earring/>} />
            <Route path='/storelocator' element = {<StoreLocator/>} />
            <Route path='/sellonkonga' element = {<Sellonkonga/>} />
          </Routes>
          {/* <SingleProduct/> */}
      <Footer/>
      </Router>

    </CartContext.Provider>
    
  )
}

export default App
