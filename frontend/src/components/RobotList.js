// import "../App.css";

import React from "react";
import RobotItem from "./RobotItem";

export default function RobotList(props) {
  const { robotData, handleAddToCart } = props;

  return (
    <React.Fragment>
      {robotData.map((robot) => (
        <RobotItem
          robot={robot}
          key={robot.id}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </React.Fragment>
  );
}