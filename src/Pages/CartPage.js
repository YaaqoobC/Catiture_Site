// CartPage.js
import React from 'react';

function CartPage({ cart }) {

  //Handels case of empty cart
  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;