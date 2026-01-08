import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams(); // ID du produit depuis l'URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Erreur lors du chargement du produit:', err));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.nom}</h2>
      <p>{product.categorie}</p>
      <p>Prix: {product.disponibilite.prix} MAD</p>
      <p>Stock: {product.disponibilite.en_stock}</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default ProductDetail;