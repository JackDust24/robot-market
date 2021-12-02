import "./Header.css";

import React from "react";

export default function Header(props) {

    const { cartTotal } = props;
    return (
      <div className="header">
          <a href="#/">
            <h1>Robot Market</h1>
          </a>
          <a href="#/cart">
            Cart
            {cartTotal ? (
              <button className="badge">{cartTotal}</button>
            ) : (
              ''
            )}
          </a>
      </div>
    );
  }
