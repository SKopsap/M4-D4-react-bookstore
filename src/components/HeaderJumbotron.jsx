import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const HeaderJumbotron = () => {
  return (
    <Jumbotron style={{ background: "brown", marginTop: "3rem" }} fluid>
      <Container bg="dark">
        <h1>The live long book club</h1>
        <p>
          Welcome to world of the living legends bookstore. Only life long
          achievers are welcome here...
        </p>
      </Container>
    </Jumbotron>
  );
};

export default HeaderJumbotron;
