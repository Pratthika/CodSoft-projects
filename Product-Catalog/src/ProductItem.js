import React from 'react';
import { useCart } from './CartContext';
import './ProductItem.css';

function ProductItem({ product }) {
  const { addToCart } = useCart();

  const handleCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
