import { countNumberOfRobots, countTotalPrice } from "../utils/format";

import CartItem from "./CartItem";
// import "../App.css";
import React from "react";

export default function Cart(props) {
  const { cart, handleAddToCart, handleRemoveFromCart } = props;
  const numberOfRobots = countNumberOfRobots(cart);
  const totalPriceOfRobots = countTotalPrice(cart);
  console.log("Number of robots - ", numberOfRobots);
  console.log("Price of robots - ", totalPriceOfRobots);

  return (
    <div className="cart-container" style={{ border: "solid", marginTop: `40px`, width: `100%` }}>
      <h2 className="text-center">Cart</h2>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.map((robot) => (
        <CartItem
          robot={robot}
          key={robot.id}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      {cart.length !== 0 && (
        <>
          <hr></hr>
          <div className="row" style={{paddingLeft: `10px`}}>
            <div className="col">Total Robots: </div>
            <div className="col text-right"><strong>{numberOfRobots}</strong></div>
          </div>
          <div className="row" style={{paddingLeft: `10px`}}>
            <div className="col">
              <strong>{" "}Total Price:</strong>
            </div>
            <div className="col text-right">
              <strong>{totalPriceOfRobots}</strong>
            </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}
