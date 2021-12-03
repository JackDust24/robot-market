import "./Header.css";

import React from "react";

export default function Header(props) {
  const { cartTotal } = props;
  return (
    <div className="header">
      <h1>Robot Market</h1>
    </div>
  );
}
