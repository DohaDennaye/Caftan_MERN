import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item._id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
              <h3>{item.name}</h3>
              <p>Prix: {item.price} MAD</p>
              <button onClick={() => removeFromCart(item._id)}>Supprimer</button>
            </div>
          ))}
          <p>Total: {total} MAD</p>
          <Link to="/checkout"><button>Procéder au paiement</button></Link>
        </>
      )}
    </div>
  );
};

export default Cart;