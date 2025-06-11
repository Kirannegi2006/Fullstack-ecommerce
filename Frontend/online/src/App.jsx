import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import Register from './Pages/Register';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kid_banner from './Components/assets/banner_kids.png';
import NewCollections from './Components/NewCollections/NewCollections';

// Footer pages
import AboutUs from './Pages/AboutUs';
import Careers from './Pages/Careers';
import Press from './Pages/Press';
import FAQ from './Pages/FAQ';
import Shipping from './Pages/Shipping';
import Returns from './Pages/Returns';
import TrackOrder from './Pages/TrackOrder';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import Cookies from './Pages/Cookies';
import Logout from './Pages/Logout';

export default function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>

        {/* Main routes */}
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />


        <Route path="/new-collections" element={<NewCollections />} />

        {/* Footer link pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}
