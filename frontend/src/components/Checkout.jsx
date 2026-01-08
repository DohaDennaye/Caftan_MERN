import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Clé publique Stripe (remplacez par la vôtre)
const stripePromise = loadStripe('pk_test_your_public_key_here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, clearCart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmCardPayment('client_secret_from_backend', {
      payment_method: { card: elements.getElement(CardElement) }
    });

    if (!error) {
      // Envoyez les détails de commande au backend
      axios.post('http://localhost:5000/api/orders', { cart, shippingInfo });
      clearCart();
      alert('Commande confirmée !');
    } else {
      alert('Erreur de paiement: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Informations de Livraison</h2>
      <input type="text" placeholder="Nom" value={shippingInfo.name} onChange={e => setShippingInfo({...shippingInfo, name: e.target.value})} required />
      <input type="email" placeholder="Email" value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} required />
      <input type="text" placeholder="Adresse" value={shippingInfo.address} onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})} required />
      
      <h2>Paiement</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>Payer</button>
    </form>
  );
};

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;