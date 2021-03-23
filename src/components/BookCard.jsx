import React from "react";
import { Card, Button } from "react-bootstrap";

const BookCard = ({ title, img, price, category }) => {
  return (
    <Card bg="dark" style={{ width: "18rem" }}>
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          provident aperiam. Pariatur, minus. Dolore, error.
        </Card.Text>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
