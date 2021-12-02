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
import { formatDate, formatPrice } from "./../utils/format";

import NoImage from "../assets/images/noimage.png";
import React from "react";

const ImageStyles = {
  width: `100%`,
  objectFit: "fill",
  height: `200px`,
  padding: `10px`,
};

const CardBodyStyle = {
  //   height: `30px`,
  width: `80%`,
  marginBottom: `5px`,
};

const CardBodyMaterialStyle = {
 fontSize: `0.9rem`,

  color: `blue`,
};

const CardBodyPriceStyle = {
  fontWeight: `Bold`,
  color: `black`,
};

const CardBodyDateStyle = {
  fontSize: `0.7rem`,
  color: `black`,
};

const CardBodyStockStyle = {
  fontSize: `0.8rem`,
};

const CardButtonStyle = {
  width: `70%`,
  marginLeft: `15%`,
  marginRight: `15%`,
};

const robotItem = (props) => {
  const { robot, handleAddToCart } = props;
  const checkForFeedback = (robot) => {
    const checkCount = handleAddToCart(robot);
    console.log("Check return - ", checkCount);
  };

  return (
    // <div className="col-sm-4">
    <div>
      <Col>
        <Card className="card-robot shadow">
          <Card.Img
            variant="top"
            src={robot.image ? `${robot.image}` : `${NoImage}`}
            alt={robot.name}
            style={ImageStyles}
            className="card-deck-img"
          />
          <Card.Body>
            <Card.Title>{robot.name}</Card.Title>
            <Card.Text
              className="wrap-text"
              style={(CardBodyStyle, CardBodyMaterialStyle)}
            >
              Material: {robot.material}
            </Card.Text>
            <Card.Text
              className="wrap-text text-center"
              style={(CardBodyStyle, CardBodyPriceStyle)}
            >
              Price: {formatPrice(robot.price)}
            </Card.Text>

            <Card.Text
              className="wrap-text"
              style={(CardBodyStyle, CardBodyStockStyle)}
            >
              Items in Stock: {robot.stock ? `${robot.stock}` : `Out Of Stock`}
            </Card.Text>
            <Card.Text
              className="wrap-text text-muted"
              style={(CardBodyStyle, CardBodyDateStyle)}
            >
              Robot created: {formatDate(robot.createdAt)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={() => checkForFeedback(robot)}
              disabled={robot.stock <= 0}
              style={CardButtonStyle}
            >
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default robotItem;
