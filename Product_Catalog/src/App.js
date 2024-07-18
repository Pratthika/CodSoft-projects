import React from 'react';
import ProductCatalog from './ProductCatalog';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <h1>Product Catalog</h1>
        </header>
        <main>
          <ProductCatalog />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
