import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${cartTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
