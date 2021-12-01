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
import {formatDate, formatPrice} from "./../utils/format"

import NoImage from "../assets/images/noimage.png"
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

const robotItem = ({robot}) => {

    const handleAddToCart = () => {
        console.log("Cart clicked")
    }
    
  return (
    <div className="col-md-4">
      <Col>
        <Card className="card-robot shadow">
            <Card.Img
              variant="top"
              src={robot.image ? `${robot.image}` : `${NoImage}`}
              style={ImageStyles}
              className="card-deck-img"
            />
            <Card.Body>
              <Card.Title>{robot.name}</Card.Title>
              <Card.Text className="wrap-text" style={CardBodyStyle, CardBodyMaterialStyle}>
                Material: {robot.material}
              </Card.Text>
              <Card.Text className="wrap-text text-center" style={CardBodyStyle, CardBodyPriceStyle}>
                Price: {formatPrice(robot.price)}
              </Card.Text>

              <Card.Text className="wrap-text" style={CardBodyStyle, CardBodyStockStyle}>
                Items in Stock: {robot.stock ? `${robot.stock}` : `Out Of Stock`}
              </Card.Text>
              <Card.Text className="wrap-text text-muted" style={CardBodyStyle, CardBodyDateStyle}>
                Robot created: {formatDate(robot.createdAt)}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={() => handleAddToCart()}
                disabled={robot.stock <= 0}
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
