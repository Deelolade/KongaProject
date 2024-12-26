import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/ContextProvider';

import SignUp from './pages/SignUp';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SingleProduct from './pages/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import StoreLocator from './components/StoreLocator';
import Sellonkonga from './components/SellOnKonga';
import TrackOrder from './pages/TrackOrder';
import SearchResultsPage from './pages/SearchResultsPage';

const App = () => {

  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/storelocator' element={<StoreLocator />} />
          <Route path='/sellonkonga' element={<Sellonkonga />} />
          <Route path='/track' element={<TrackOrder />} />
          <Route path='/search' element={<SearchResultsPage />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
