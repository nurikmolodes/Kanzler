import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { data } from './assets/data';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import News from './pages/News';
import Order from './pages/Order';
import ProductDetails from './pages/ProductDetails';

function App() {
  // THE DATA
  const [cart, setCart] = useState(data);
  // SEARCH FILTER
  const [searchh, setSearchh] = useState('');
  const filteredCart = cart.filter((item) => {
    return searchh?.toLowerCase() === ''
      ? item
      : item?.name?.toLowerCase().includes(searchh?.toLowerCase()) ||
          item?.articul?.toLowerCase().includes(searchh?.toLowerCase());
  });
  return (
    <div className="wrapper">
      <Navbar cart={cart} setSearchh={setSearchh} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <Order
              setSearchh={setSearchh}
              filteredCart={filteredCart}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
