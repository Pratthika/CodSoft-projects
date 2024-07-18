import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductCatalog.css';

const productsData = [
  { id: 1, name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 39.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 49.99, imageUrl: 'https://via.placeholder.com/150' },
];

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="product-catalog">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
