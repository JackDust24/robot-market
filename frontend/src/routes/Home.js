import "./Home.css";

import {
  Button,
  Card,
  CardDeck,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Cart from "../components/Cart";
import RobotItem from "../components/RobotItem";
import RobotList from "../components/RobotList";
import { addUniqueIdToTheData } from "../utils/datahelper";
import { callAPI } from "../api/helper";

export default function Home() {
  const [robotData, setRobotData] = useState([]);
  const [fetchingAPIData, setFetchingAPIData] = useState(false);
  const [cart, setCart] = useState([]);

  console.log("Home Page");

  /* Life Cycle Methods */
  useEffect(() => {
    setFetchingAPIData(true);
    (async () => {
      const jsonObj = await callAPI();
      // Add UniqueID to the data
      const formattedData = await addUniqueIdToTheData(jsonObj);
      const data = formattedData.data;
      setRobotData(data);
    })();
  }, []);

  useEffect(() => {
    // Once the robot data has been fetched we can set the loading to false and start
    // populating the screen
    setFetchingAPIData(false);
  }, [robotData]);

  useEffect(() => {
    // Once the robot data has been fetched we can set the loading to false and start
    // populating the screen
    console.log("Chech Cart ", cart);
    console.log("Chech Robots ", robotData);
  }, [cart]);

  /* Event Handlers */
  // Robot being added to cart
  const handleAddToCart = (robot) => {
    // Check Cart if more than 5 types exist
    if (cart.length > 4) {
      alert(
        "You have reached the maximum number of Robots allowed for adding to the cart"
      );
      return;
    }
    // Find if selected Robot is in the Cart list and the selected Robot from the Robot list
    const checkCartForItem = cart.find(
      (robotCart) => robotCart.id === robot.id
    );
    const checkRobotDataForItem = robotData.find(
      (robotItem) => robotItem.id === robot.id
    );
    // Though unlikely to be called we will not add to cart if the stock is empty
    if (checkRobotDataForItem.stock === 0) {
      console.log("Ran out of stock");
      return;
    }
    // If robot is in the cart then increase the stock by one, otherwise creeate a new robot in cart
    if (checkCartForItem) {
      setCart(
        cart.map((robotCart) =>
          robotCart.id === robot.id
            ? { ...checkCartForItem, stock: checkCartForItem.stock + 1 }
            : robotCart
        )
      );
    } else {
      setCart([...cart, { ...robot, stock: 1 }]);
    }
    // Remove one item of stock from the robot listing
    setRobotData(
      robotData.map((robotItem) =>
        robotItem.id === robot.id
          ? {
              ...checkRobotDataForItem,
              stock: checkRobotDataForItem.stock - 1,
            }
          : robotItem
      )
    );
  };

  const handleRemoveFromCart = (robot) => {
    // Find if selected Robot is in the Cart list and the selected Robot from the Robot list
    const checkCartForItem = cart.find(
      (robotCart) => robotCart.id === robot.id
    );
    const checkRobotDataForItem = robotData.find(
      (robotItem) => robotItem.id === robot.id
    );
     // We can check if the item being removed is 1, then we can remove the robot from the cart altogether.
     // If not, then we just decrease the stock count by one.
    if (checkCartForItem.stock === 1) {
      // Use filter to remove it from the cart
      setCart(cart.filter((robotCart) => robotCart.id !== robot.id));
    } else {
      setCart(
        cart.map((robotCart) =>
          robotCart.id === robot.id
            ? { ...checkCartForItem, stock: checkCartForItem.stock - 1 }
            : robotCart
        )
      );
      // We then increase the robot count by one in the robot list.
      setRobotData(
        robotData.map((robotItem) =>
          robotItem.id === robot.id
            ? {
                ...checkRobotDataForItem,
                stock: checkRobotDataForItem.stock + 1,
              }
            : robotItem
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/*Filter Row*/}
        <div className="col-sm-10">
          Filter by Material
          {/*Robots Column*/}
          <div className="productArea">
            {fetchingAPIData && <p>Fetching data ...</p>}
            {!fetchingAPIData && robotData.length > 0 && (
              <RobotList
                robotData={robotData}
                handleAddToCart={handleAddToCart}
              />
            )}
          </div>
        </div>

        {/*Cart Column*/}
        <div className="cartArea col-sm-2">
          <Cart
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
}
