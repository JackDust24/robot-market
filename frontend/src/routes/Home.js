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

import RobotItem from "../components/RobotItem";
import { callAPI } from "../api/helper";
import { mutateAndFormatTheData } from "../utils/datahelper"

export default function Home() {
  const [robotData, setRobotData] = useState([]);
  const [fetchingAPIData, setFetchingAPIData] = useState(false);

  console.log("Home Page");

  useEffect(() => {
    console.log("Call API");
    setFetchingAPIData(true);
    (async () => {
      console.log("Call API Async");
      const jsonObj = await callAPI();
      // const strObj = JSON.stringify(jsonObj, null, 2)
      const formattedData = await mutateAndFormatTheData(jsonObj)
      console.log("Check formatted data - ", formattedData);

       const data = formattedData.data;
      setRobotData(data);
    })();
  }, []);

  useEffect(() => {
      // Once the robot data has been fetched we can set the loading to false and start
      // populating the screen 
      setFetchingAPIData(false);

  }, [robotData]);

  return (
    <div>
      <h1>Hello World</h1>
      <h3>This is a robot e-Commerce Website</h3>
      <h4>Build currently in progress</h4>
      <div className="container">
        <div className="row">
          <div className="filterArea col-6 col-md-2">Filter by</div>
          {/* <div className="productArea col-6 col-md-6"> */}
          <div className="productArea col-6 col-md-6">

          {fetchingAPIData && (
                <p>Fetching data ...</p>
            )}
            {!fetchingAPIData && robotData.length > 0 && (
                <div className="card-deck">

                {robotData.map((robot) => (
                    <RobotItem robot={robot} key={robot.id}/>
                ))}
                </div>
            )}
          </div>
          <div className="cartArea col-6 col-md-4">3 of 3</div>
        </div>
      </div>
    </div>
  );
}
