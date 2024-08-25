import SignUp from './pages/SignUp'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SingleProduct from './pages/SingleProduct'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      
      <Router>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/signup' element = {<SignUp/>} />
            <Route path='/login' element = {<LoginPage/>} />
            <Route path='/singleproduct' element = {<SingleProduct/>} />
          </Routes>
        </Router>
      
            <SingleProduct/>
      
      
    </div>
  )
}

export default App
