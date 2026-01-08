import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <h3>{product.nom}</h3>
          <p>{product.categorie}</p>
          <p>Prix: {product.disponibilite.prix} MAD</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;