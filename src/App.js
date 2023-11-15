// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar' ;
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import CartPage from './Pages/CartPage';
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Calls on Navbar function */}
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
