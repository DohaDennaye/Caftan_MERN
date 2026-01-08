import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/about" element={<h2>À propos</h2>} />
      </Routes>
    </>
  );
};


export default App;