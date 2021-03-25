import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

// https://www.youtube.com/watch?v=mkgylOJSdhE

// https://www.youtube.com/watch?v=CHFif_y2TyM

// https://www.youtube.com/watch?v=Cos-1qUyvrc

const Hero = () => {
  return (
    <Jumbotron fluid style={{ backgroundColor: "black", marginTop: "3rem" }}>
      <Container bg="dark">
        <ReactPlayer
          controls="false"
          autoPlay="true"
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=4vIQON2fDWMk"
        />
        <h1>The live long book club</h1>
        <p>
          Welcome to world of the living legends bookstore. Only life long
          achievers are welcome here...
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
