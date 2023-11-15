// Product.js
import React, {useState} from "react";

function Product({ name, description, price, imageUrl }) {
  
  const [cart, setCart] = useState([]);

  // Add items to the cart when the user clicks "Add to Cart"
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
        <button onClick={addToCart}>
          Add to Cart
        </button>
    </div>
  );
}

export default Product;

// onClick={() => addToCart({ id: name, price: price  })}