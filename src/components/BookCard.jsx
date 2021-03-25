import React from "react";
import { Card, Button } from "react-bootstrap";

const BookCard = ({ title, img, price, category }) => {
  return (
    <Card
      bg="dark"
      className="mt-5"
      style={{ width: "18rem", cursor: "pointer" }}
    >
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title className="truncate">{title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Text>£ {price.toFixed(2)}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button variant="outline-light">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
