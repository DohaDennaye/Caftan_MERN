import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { cart } = useCart();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f0f0f0' }}>
      <h1><Link to="/">Caftans Marocains</Link></h1>
      <nav>
        <Link to="/products">Produits</Link> | 
        <Link to="/about">À propos</Link> | 
        <Link to="/cart">Panier ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;