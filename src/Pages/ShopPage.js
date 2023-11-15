// ShopPage.js
import React from "react";
import Product from "./Product";
import './ShopPage.css';

// Import your images
import TwoFeet from "./ShopPictures/TwoFeet.png";
import ThreeFeet from "./ShopPictures/ThreeFeet.png"
import FourFeet from "./ShopPictures/FourFeet.png"
import FiveFeet from "./ShopPictures/FiveFeet.png"

const products = [
  {
    name: "2Feet Scratcher",
    description: "This is a sturdy 24 inches Scratching with a large and heavy base. Base - 20x16.5 inches.",
    price: 50.00,
    imageUrl: TwoFeet,
  },
  {
    name: "3Feet Hybrid Cat Tree",
    description: "This is  a durable 3 foot tall scratchin post hybrid with a large top: Base - 24x18.5 inches.",
    price: 80.00,
    imageUrl: ThreeFeet,
  },
  {
    name: "4Feet Spiral Cat Tree",
    description: "This is 4 foot solid spiral tower with muliple cat ledges: Base - 24x20.5 inches.",
    price: 135.00,
    imageUrl: FourFeet,
  },
  {
    name: "5Feet Luxury Cat Condo",
    description: "This is 5 foot solid cat condo with muliple cat ledges and borderd tops: Base - 24x32 inches.",
    price: 335.00,
    imageUrl: FiveFeet,
  },
 
];

function ShopPage() {

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <div className="shop-page">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default ShopPage;
